import { useState } from "react";
import { Card, CardBody } from "@nextui-org/react";
import ToolTemplate from "./ToolTemplate";
import { asnLookup } from "./api";

const AsnLookup = () => {
  const [asn, setAsn] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLookup = async () => {
    if (!asn) return;
    setLoading(true);
    setError(null);
    
    try {
      const data = await asnLookup(asn);
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
                  {Array.isArray(value) ? value.join(', ') : value}
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
      title="ASN Lookup"
      inputPlaceholder="Enter ASN number"
      buttonText="Lookup ASN"
      handleLookup={handleLookup}
      renderResults={renderResults}
      loading={loading}
      error={error}
      value={asn}
      onChange={(e) => setAsn(e.target.value)}
    />
  );
};

export default AsnLookup;
