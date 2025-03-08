import { useState } from "react";
import { Card, CardBody } from "@nextui-org/react";
import ToolTemplate from "./ToolTemplate";
import { ping } from "./api";

const PingTool = () => {
  const [host, setHost] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePing = async () => {
    if (!host) return;
    setLoading(true);
    setError(null);
    
    try {
      const data = await ping(host);
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
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Host:</span>
              <span className="font-mono">{results.host}</span>
            </div>
            <div className="flex justify-between">
              <span>IP Address:</span>
              <span className="font-mono">{results.ip}</span>
            </div>
            <div className="flex justify-between">
              <span>Status:</span>
              <span className={results.status === 'Success' ? 'text-success' : 'text-danger'}>
                {results.status}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Response Time:</span>
              <span className="font-mono">{results.time}ms</span>
            </div>
            <div className="flex justify-between">
              <span>TTL:</span>
              <span className="font-mono">{results.ttl}</span>
            </div>
          </div>
        </CardBody>
      </Card>
    );
  };

  return (
    <ToolTemplate
      title="Ping Tool"
      inputPlaceholder="Enter hostname or IP (e.g., google.com)"
      buttonText="Start Ping"
      handleLookup={handlePing}
      renderResults={renderResults}
      loading={loading}
      error={error}
      value={host}
      onChange={(e) => setHost(e.target.value)}
    />
  );
};

export default PingTool;
