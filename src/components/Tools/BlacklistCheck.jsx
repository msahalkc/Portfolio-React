import { useState } from "react";
import { Card, CardBody } from "@nextui-org/react";
import ToolTemplate from "./ToolTemplate";
import { blacklistCheck } from "./api";

const BlacklistCheck = () => {
  const [ip, setIp] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCheck = async () => {
    if (!ip) return;
    setLoading(true);
    setError(null);
    
    try {
      const data = await blacklistCheck(ip);
      setResults(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const renderResults = () => {
    if (!results) return null;
    
    const listedCount = results.filter(r => r.listed).length;
    const totalCount = results.length;
    
    return (
      <div className="space-y-4">
        <Card>
          <CardBody>
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold">Summary</h3>
              <p className={listedCount === 0 ? "text-success" : "text-danger"}>
                Listed on {listedCount} of {totalCount} blacklists
              </p>
            </div>
            <div className="space-y-2">
              {results.map((result, index) => (
                <div 
                  key={index} 
                  className="flex justify-between items-center p-2 bg-default-100 rounded-lg"
                >
                  <span>{result.blacklist}</span>
                  <span className={result.listed ? "text-danger" : "text-success"}>
                    {result.listed ? "Listed" : "Clean"}
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
      title="IP Blacklist Check"
      inputPlaceholder="Enter IP address"
      buttonText="Check Blacklists"
      handleLookup={handleCheck}
      renderResults={renderResults}
      loading={loading}
      error={error}
      value={ip}
      onChange={(e) => setIp(e.target.value)}
    />
  );
};

export default BlacklistCheck;
