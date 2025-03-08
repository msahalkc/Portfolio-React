import { useState } from "react";
import { Card, CardBody } from "@nextui-org/react";
import ToolTemplate from "./ToolTemplate";
import { mtaStsLookup } from "./api";

const MtaStsLookup = () => {
  const [domain, setDomain] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLookup = async () => {
    if (!domain) return;
    setLoading(true);
    setError(null);
    
    try {
      const data = await mtaStsLookup(domain);
      setResults(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const renderResults = () => {
    if (!results) return null;
    return (
      <div className="space-y-4">
        <Card>
          <CardBody>
            <h3 className="text-xl font-bold mb-2">DNS Records</h3>
            <div className="font-mono whitespace-pre-wrap">
              {results.records.map((record, index) => (
                <div key={index}>{record.data.replace(/"/g, '')}</div>
              ))}
            </div>
          </CardBody>
        </Card>
        {results.policy && (
          <Card>
            <CardBody>
              <h3 className="text-xl font-bold mb-2">MTA-STS Policy</h3>
              <pre className="font-mono whitespace-pre-wrap">{results.policy}</pre>
            </CardBody>
          </Card>
        )}
      </div>
    );
  };

  return (
    <ToolTemplate
      title="MTA-STS Lookup"
      inputPlaceholder="Enter domain name"
      buttonText="Lookup MTA-STS"
      handleLookup={handleLookup}
      renderResults={renderResults}
      loading={loading}
      error={error}
      value={domain}
      onChange={(e) => setDomain(e.target.value)}
    />
  );
};

export default MtaStsLookup;
