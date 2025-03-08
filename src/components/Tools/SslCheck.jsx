import { useState } from "react";
import { Card, CardBody } from "@nextui-org/react";
import ToolTemplate from "./ToolTemplate";
import { sslCheck } from "./api";

const SslCheck = () => {
  const [domain, setDomain] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCheck = async () => {
    if (!domain) return;
    setLoading(true);
    setError(null);
    
    try {
      const data = await sslCheck(domain);
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
            <div className="flex justify-between items-center">
              <span>Status:</span>
              <span className={results.valid ? "text-success" : "text-danger"}>
                {results.valid ? "Valid" : "Invalid"}
              </span>
            </div>
            <div className="p-4 bg-default-100 rounded-lg space-y-2">
              <div className="flex justify-between">
                <span>Issuer:</span>
                <span className="font-mono">{results.issuer}</span>
              </div>
              <div className="flex justify-between">
                <span>Subject:</span>
                <span className="font-mono">{results.subject}</span>
              </div>
              <div className="flex justify-between">
                <span>Valid From:</span>
                <span className="font-mono">{new Date(results.validFrom).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Valid To:</span>
                <span className="font-mono">{new Date(results.validTo).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Protocol:</span>
                <span className="font-mono">{results.protocol}</span>
              </div>
              <div className="flex justify-between">
                <span>Cipher:</span>
                <span className="font-mono">{results.cipher}</span>
              </div>
              <div className="flex justify-between">
                <span>Key Strength:</span>
                <span className="font-mono">{results.keyStrength}</span>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    );
  };

  return (
    <ToolTemplate
      title="SSL Certificate Check"
      inputPlaceholder="Enter domain name"
      buttonText="Check SSL"
      handleLookup={handleCheck}
      renderResults={renderResults}
      loading={loading}
      error={error}
      value={domain}
      onChange={(e) => setDomain(e.target.value)}
    />
  );
};

export default SslCheck;
