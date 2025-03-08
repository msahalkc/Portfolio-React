import { useState } from "react";
import { Card, CardBody, Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/react";
import ToolTemplate from "./ToolTemplate";
import { whoisLookup } from "./api";

const WhoisLookup = () => {
  const [domain, setDomain] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLookup = async () => {
    if (!domain) return;
    setLoading(true);
    setError(null);
    
    try {
      const data = await whoisLookup(domain);
      // Handle both string and JSON responses
      setResults(typeof data === 'string' ? data : JSON.stringify(data, null, 2));
    } catch (err) {
      setError(typeof err === 'string' ? err : err.message);
    } finally {
      setLoading(false);
    }
  };

  const parseWhoisData = (data) => {
    const lines = data.split('\n');
    return lines.reduce((acc, line) => {
      const [key, ...values] = line.split(':');
      if (key && values.length) {
        acc[key.trim()] = values.join(':').trim();
      }
      return acc;
    }, {});
  };

  const renderResults = () => {
    if (!results) return null;
    const parsedData = parseWhoisData(results);

    return (
      <Card>
        <CardBody>
          <Table aria-label="WHOIS Information">
            <TableHeader>
              <TableColumn>FIELD</TableColumn>
              <TableColumn>VALUE</TableColumn>
            </TableHeader>
            <TableBody>
              {Object.entries(parsedData).map(([key, value], index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium whitespace-nowrap">{key}</TableCell>
                  <TableCell className="font-mono">{value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    );
  };

  return (
    <ToolTemplate
      title="WHOIS Lookup"
      inputPlaceholder="Enter domain name or IP address"
      buttonText="Lookup WHOIS"
      handleLookup={handleLookup}
      renderResults={renderResults}
      loading={loading}
      error={error}
      value={domain}
      onChange={(e) => setDomain(e.target.value)}
    />
  );
};

export default WhoisLookup;
