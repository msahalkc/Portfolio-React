import { useState } from "react";
import { Card, CardBody } from "@nextui-org/react";
import ToolTemplate from "./ToolTemplate";
import { dmarcLookup } from "./api";

const DmarcLookup = () => {
  const [domain, setDomain] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLookup = async () => {
    if (!domain) return;
    setLoading(true);
    setError(null);
    
    try {
      const records = await dmarcLookup(domain);
      // Parse the records here instead of in the API
      setResults(records.map(record => ({
        ...record,
        data: record.data.replace(/['"]/g, '') // Remove quotes from the data
      })));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const parseDmarcRecord = (record) => {
    const elements = record.data.split(';').map(e => e.trim());
    const parsed = {};
    
    elements.forEach(element => {
      const [key, value] = element.split('=').map(s => s.trim());
      if (key && value) {
        parsed[key] = value;
      }
    });

    return parsed;
  };

  const renderResults = () => {
    if (!results || results.length === 0) return null;
    
    return (
      <Card>
        <CardBody>
          {results.map((record, index) => {
            const parsed = parseDmarcRecord(record);
            return (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-bold">DMARC Policy</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(parsed).map(([key, value]) => (
                    <Card key={key} className="bg-default-100">
                      <CardBody>
                        <div className="space-y-1">
                          <div className="font-medium capitalize">
                            {key === 'v' ? 'Version' :
                             key === 'p' ? 'Policy' :
                             key === 'rua' ? 'Aggregate Reports' :
                             key === 'ruf' ? 'Forensic Reports' :
                             key === 'pct' ? 'Percentage' :
                             key === 'sp' ? 'Subdomain Policy' :
                             key === 'aspf' ? 'SPF Alignment' :
                             key === 'adkim' ? 'DKIM Alignment' : key}
                          </div>
                          <div className="font-mono text-sm">{value}</div>
                        </div>
                      </CardBody>
                    </Card>
                  ))}
                </div>
                <div className="text-small text-default-500 mt-2">
                  TTL: {record.TTL}s
                </div>
              </div>
            );
          })}
        </CardBody>
      </Card>
    );
  };

  return (
    <ToolTemplate
      title="DMARC Record Lookup"
      inputPlaceholder="Enter domain name (e.g., gmail.com)"
      buttonText="Lookup DMARC Record"
      handleLookup={handleLookup}
      renderResults={renderResults}
      loading={loading}
      error={error}
      value={domain}
      onChange={(e) => setDomain(e.target.value)}
    />
  );
};

export default DmarcLookup;
