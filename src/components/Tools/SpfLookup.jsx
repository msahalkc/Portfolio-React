import { useState } from "react";
import { Card, CardBody, Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/react";
import ToolTemplate from "./ToolTemplate";
import { spfLookup } from "./api";

const SpfLookup = () => {
  const [domain, setDomain] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLookup = async () => {
    if (!domain) return;
    setLoading(true);
    setError(null);
    
    try {
      const records = await spfLookup(domain);
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
          <Table aria-label="SPF Records">
            <TableHeader>
              <TableColumn>SPF RECORD</TableColumn>
              <TableColumn>TTL</TableColumn>
            </TableHeader>
            <TableBody>
              {results.map((record, index) => (
                <TableRow key={index}>
                  <TableCell>{record.data.replace(/"/g, '')}</TableCell>
                  <TableCell>{record.TTL}s</TableCell>
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
      title="SPF Record Lookup"
      inputPlaceholder="Enter domain name (e.g., gmail.com)"
      buttonText="Lookup SPF Records"
      handleLookup={handleLookup}
      renderResults={renderResults}
      loading={loading}
      error={error}
      value={domain}
      onChange={(e) => setDomain(e.target.value)}
    />
  );
};

export default SpfLookup;
