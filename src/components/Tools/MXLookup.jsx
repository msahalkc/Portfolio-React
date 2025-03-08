import { useState } from "react";
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Card, CardBody } from "@nextui-org/react";
import ToolTemplate from "./ToolTemplate";
import { dnsLookup } from "./api";

const MXLookup = () => {
  const [domain, setDomain] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLookup = async () => {
    if (!domain) return;
    setLoading(true);
    setError(null);
    
    try {
      const records = await dnsLookup(domain, "MX");
      setResults(records);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const renderResults = () => {
    if (!results || results.length === 0) return null;

    return (
      <Card>
        <CardBody>
          <Table aria-label="MX Records">
            <TableHeader>
              <TableColumn>PRIORITY</TableColumn>
              <TableColumn>MAIL SERVER</TableColumn>
              <TableColumn>TTL</TableColumn>
            </TableHeader>
            <TableBody>
              {results.map((record, index) => {
                const [priority, server] = record.data.split(" ");
                return (
                  <TableRow key={index}>
                    <TableCell>{priority}</TableCell>
                    <TableCell>{server}</TableCell>
                    <TableCell>{record.TTL}s</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardBody>
      </Card>
    );
  };

  return (
    <ToolTemplate
      title="MX Lookup"
      inputPlaceholder="Enter domain name (e.g., gmail.com)"
      buttonText="Lookup MX Records"
      handleLookup={handleLookup}
      renderResults={renderResults}
      loading={loading}
      error={error}
      value={domain}
      onChange={(e) => setDomain(e.target.value)}
    />
  );
};

export default MXLookup;
