import { useState } from "react";
import { Card, CardBody, Progress } from "@nextui-org/react";
import ToolTemplate from "./ToolTemplate";
import { emailDeliverability } from "./api";

const EmailDeliverability = () => {
  const [domain, setDomain] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCheck = async () => {
    if (!domain) return;
    setLoading(true);
    setError(null);
    
    try {
      const data = await emailDeliverability(domain);
      setResults(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const renderResults = () => {
    if (!results) return null;

    const checks = [
      { name: "MX Records", status: Array.isArray(results.mx) && results.mx.length > 0 },
      { name: "SPF Record", status: Array.isArray(results.spf) && results.spf.length > 0 },
      { name: "DMARC Record", status: Array.isArray(results.dmarc) && results.dmarc.length > 0 },
      { name: "DKIM Record", status: Array.isArray(results.dkim) && results.dkim.length > 0 },
      { name: "MTA-STS", status: results.mtaSts !== null }
    ];

    const score = (checks.filter(c => c.status).length / checks.length) * 100;

    return (
      <div className="space-y-4">
        <Card>
          <CardBody>
            <h3 className="text-xl font-bold mb-4">Deliverability Score</h3>
            <Progress 
              value={score}
              className="mb-2"
              color={score > 80 ? "success" : score > 50 ? "warning" : "danger"}
            />
            <p className="text-center">{Math.round(score)}%</p>
          </CardBody>
        </Card>
        
        <Card>
          <CardBody>
            <h3 className="text-xl font-bold mb-4">Checks</h3>
            <div className="space-y-2">
              {checks.map((check, index) => (
                <div key={index} className="flex justify-between items-center p-2 bg-default-100 rounded-lg">
                  <span>{check.name}</span>
                  <span className={check.status ? "text-success" : "text-danger"}>
                    {check.status ? "✓" : "✗"}
                  </span>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </div>
    );
  };

  return (
    <ToolTemplate
      title="Email Deliverability Check"
      inputPlaceholder="Enter domain name"
      buttonText="Check Deliverability"
      handleLookup={handleCheck}
      renderResults={renderResults}
      loading={loading}
      error={error}
      value={domain}
      onChange={(e) => setDomain(e.target.value)}
    />
  );
};

export default EmailDeliverability;
