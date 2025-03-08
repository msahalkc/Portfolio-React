import { useState } from "react";
import { Card, CardBody, Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/react";
import ToolTemplate from "./ToolTemplate";
import { trace } from "./api";

const TraceTool = () => {
  const [host, setHost] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleTrace = async () => {
    if (!host) return;
    setLoading(true);
    setError(null);
    
    try {
      const data = await trace(host);
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
          <Table aria-label="Trace Route Results">
            <TableHeader>
              <TableColumn>HOP</TableColumn>
              <TableColumn>HOST</TableColumn>
              <TableColumn>IP</TableColumn>
              <TableColumn>TIME</TableColumn>
            </TableHeader>
            <TableBody>
              {results.map((hop, index) => (
                <TableRow key={index}>
                  <TableCell>{hop.hop}</TableCell>
                  <TableCell>{hop.host}</TableCell>
                  <TableCell>{hop.ip}</TableCell>
                  <TableCell>{hop.time}</TableCell>
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
      title="Traceroute Tool"
      inputPlaceholder="Enter hostname or IP (e.g., google.com)"
      buttonText="Start Trace"
      handleLookup={handleTrace}
      renderResults={renderResults}
      loading={loading}
      error={error}
      value={host}
      onChange={(e) => setHost(e.target.value)}
    />
  );
};

export default TraceTool;
