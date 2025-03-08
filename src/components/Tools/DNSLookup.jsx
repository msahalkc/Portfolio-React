import { useState } from "react";
import { Card, CardBody, Input, Button, Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Select, SelectItem } from "@nextui-org/react";
import ToolTemplate from "./ToolTemplate";
import { dnsLookup } from "./api";

const DNSLookup = () => {
  const [domain, setDomain] = useState("");
  const [recordType, setRecordType] = useState("A");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const recordTypes = [
    "A", "AAAA", "MX", "TXT", "NS", "SOA"
  ];

  const handleLookup = async () => {
    if (!domain) return;
    setLoading(true);
    setError(null);
    
    try {
      const records = await dnsLookup(domain, recordType);
      setResults(records);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const formatRecordData = (record) => {
    try {
      if (typeof record.data === 'string') {
        return record.data.replace(/['"]/g, '');  // Remove quotes
      }
      return JSON.stringify(record.data);
    } catch {
      return record.data;
    }
  };

  const renderResults = () => {
    if (!results || results.length === 0) return null;

    return (
      <Card>
        <CardBody>
          <Table aria-label="DNS Records">
            <TableHeader>
              <TableColumn>TYPE</TableColumn>
              <TableColumn>VALUE</TableColumn>
              <TableColumn>TTL</TableColumn>
            </TableHeader>
            <TableBody>
              {results.map((record, index) => (
                <TableRow key={index}>
                  <TableCell>{record.type}</TableCell>
                  <TableCell className="font-mono whitespace-pre-wrap">{formatRecordData(record)}</TableCell>
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
    <div className="">
      <Card className="mb-8">
        <CardBody className="flex flex-row gap-4">
          <Input
            type="text"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            placeholder="Enter domain name"
            className="flex-1"
          />
          <Select
            value={recordType}
            onChange={(e) => setRecordType(e.target.value)}
            className="w-40"
          >
            {recordTypes.map((type) => (
              <SelectItem key={type} value={type}>
                {type}
              </SelectItem>
            ))}
          </Select>
          <Button
            onClick={handleLookup}
            isLoading={loading}
            className="bg-blueee-500 dark:bg-emerald-500 text-white"
          >
            Lookup
          </Button>
        </CardBody>
      </Card>

      {error && (
        <Card className="mb-8 border-danger">
          <CardBody className="text-danger">{error}</CardBody>
        </Card>
      )}

      {renderResults()}
    </div>
  );
};

export default DNSLookup;
