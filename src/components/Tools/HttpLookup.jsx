import { useState } from "react";
import { Card, CardBody } from "@nextui-org/react";
import ToolTemplate from "./ToolTemplate";
import { httpLookup } from "./api";

const HttpLookup = () => {
  const [url, setUrl] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLookup = async () => {
    if (!url) return;
    setLoading(true);
    setError(null);
    
    try {
      const data = await httpLookup(url);
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
            <div className="p-4 bg-default-100 rounded-lg">
              <h3 className="font-bold mb-2">Response Information</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Status Code:</span>
                  <span className="font-mono">{results.statusCode}</span>
                </div>
                <div className="flex justify-between">
                  <span>Response Time:</span>
                  <span className="font-mono">{results.time}</span>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-default-100 rounded-lg">
              <h3 className="font-bold mb-2">Headers</h3>
              <div className="space-y-1">
                {Object.entries(results.headers).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="font-mono text-sm">{key}:</span>
                    <span className="font-mono text-sm ml-4">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    );
  };

  return (
    <ToolTemplate
      title="HTTP Header Lookup"
      inputPlaceholder="Enter URL (e.g., https://example.com)"
      buttonText="Check Headers"
      handleLookup={handleLookup}
      renderResults={renderResults}
      loading={loading}
      error={error}
      value={url}
      onChange={(e) => setUrl(e.target.value)}
    />
  );
};

export default HttpLookup;
