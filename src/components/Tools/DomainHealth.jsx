import { useState } from "react";
import { Card, CardBody, Progress } from "@nextui-org/react";
import ToolTemplate from "./ToolTemplate";
import { checkDomain } from "./api";

const DomainHealth = () => {
  const [domain, setDomain] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCheck = async () => {
    if (!domain) return;
    setLoading(true);
    setError(null);
    
    try {
      const data = await checkDomain(domain);
      setResults(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatRecordData = (record, type) => {
    if (!record) return null;
    try {
      // Handle string data with quotes
      if (typeof record.data === 'string') {
        const data = record.data.replace(/['"]/g, '');
        // For DMARC and DKIM records, just return the cleaned string
        if (type === 'DMARC' || type === 'DKIM') {
          return data;
        }
        // For other records, try to parse if it looks like JSON
        return data.startsWith('{') ? JSON.parse(data) : data;
      }
      return record.data;
    } catch (err) {
      return record.data;
    }
  };

  const renderRecords = (result) => {
    if (!result.records) return null;
    return (
      <div className="space-y-2">
        {result.records.map((record, idx) => (
          <div key={idx} className="p-2 bg-default-100 rounded-lg">
            <div className="font-mono whitespace-pre-wrap">
              {formatRecordData(record, result.type)}
            </div>
            <div className="text-small text-default-500 mt-1">
              TTL: {record.TTL}s
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderResults = () => {
    if (!results) return null;

    const score = (results.filter(r => r.status === "ok").length / results.length) * 100;

    return (
      <div className="space-y-4">
        <Card>
          <CardBody>
            <h3 className="text-xl font-bold mb-4">Domain Health Score</h3>
            <Progress 
              value={score}
              className="mb-2"
              color={score > 80 ? "success" : score > 50 ? "warning" : "danger"}
            />
            <p className="text-center">{Math.round(score)}%</p>
          </CardBody>
        </Card>
        
        {results.map((result, index) => (
          <Card key={index}>
            <CardBody>
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold">{result.type} Records</h4>
                <span className={result.status === "ok" ? "text-success" : "text-danger"}>
                  {result.status === "ok" ? "✓" : "✗"}
                </span>
              </div>
              {result.status === "ok" ? renderRecords(result) : (
                <p className="text-danger">{result.error}</p>
              )}
            </CardBody>
          </Card>
        ))}
      </div>
    );
  };

  return (
    <ToolTemplate
      title="Domain Health Check"
      inputPlaceholder="Enter domain name"
      buttonText="Check Domain Health"
      handleLookup={handleCheck}
      renderResults={renderResults}
      loading={loading}
      error={error}
      value={domain}
      onChange={(e) => setDomain(e.target.value)}
    />
  );
};

export default DomainHealth;
