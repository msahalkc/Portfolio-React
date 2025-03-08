import { useState } from "react";
import { Card, CardBody } from "@nextui-org/react";
import ToolTemplate from "./ToolTemplate";
import { checkEmailServer } from "./api";

const EmailServerTest = () => {
  const [domain, setDomain] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleTest = async () => {
    if (!domain) return;
    setLoading(true);
    setError(null);
    
    try {
      const data = await checkEmailServer(domain);
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
      <Card>
        <CardBody>
          <div className="space-y-4">
            {results.map((result, index) => (
              <div key={index} className="p-4 bg-default-100 rounded-lg">
                <h3 className="font-bold mb-2">MX Server {index + 1}</h3>
                <div className="space-y-2">
                  <div>Server: {result.hostname || result.server}</div>
                  <div>Priority: {result.priority}</div>
                  <div>Port: {result.port || '25'}</div>
                  <div className="flex items-center gap-2">
                    Status:
                    <span className={result.available ? "text-success" : "text-danger"}>
                      {result.available ? "Available" : "Unavailable"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    );
  };

  return (
    <ToolTemplate
      title="Email Server Test"
      inputPlaceholder="Enter domain name"
      buttonText="Test Email Server"
      handleLookup={handleTest}
      renderResults={renderResults}
      loading={loading}
      error={error}
      value={domain}
      onChange={(e) => setDomain(e.target.value)}
    />
  );
};

export default EmailServerTest;
