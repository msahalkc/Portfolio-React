import { useState } from "react";
import { Card, CardBody } from "@nextui-org/react";
import ToolTemplate from "./ToolTemplate";
import { arinLookup } from "./api";

const ArinLookup = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLookup = async () => {
    if (!query) return;
    setLoading(true);
    setError(null);
    
    try {
      const data = await arinLookup(query);
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
            {Object.entries(results).map(([key, value]) => (
              <div key={key} className="flex justify-between p-2 bg-default-100 rounded-lg">
                <span className="font-medium capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}:
                </span>
                <span className="font-mono">
                  {typeof value === 'object' 
                    ? Object.entries(value).map(([k, v]) => `${k}: ${v}`).join(', ')
                    : value
                  }
                </span>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    );
  };

  return (
    <ToolTemplate
      title="ARIN Lookup"
      inputPlaceholder="Enter IP address or ASN"
      buttonText="Lookup"
      handleLookup={handleLookup}
      renderResults={renderResults}
      loading={loading}
      error={error}
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default ArinLookup;
