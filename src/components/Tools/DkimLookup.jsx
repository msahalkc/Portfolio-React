import { useState } from "react";
import { Card, CardBody, Input, Select, SelectItem } from "@nextui-org/react";
import ToolTemplate from "./ToolTemplate";
import { dkimLookup } from "./api";

const DkimLookup = () => {
  const [domain, setDomain] = useState("");
  const [selector, setSelector] = useState("default");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const selectors = [
    { value: "default", label: "default" },
    { value: "google", label: "google" },
    { value: "selector1", label: "selector1" },
    { value: "selector2", label: "selector2" },
    { value: "s1", label: "s1" },
    { value: "s2", label: "s2" },
    { value: "k1", label: "k1" },
    { value: "20230601", label: "gmail-2023" },
  ];

  const handleLookup = async () => {
    if (!domain) return;
    setLoading(true);
    setError(null);
    
    try {
      const records = await dkimLookup(domain, selector);
      if (!records || records.length === 0) {
        throw new Error('No DKIM records found');
      }
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
          <div className="space-y-4">
            {results.map((record, index) => (
              <div key={index} className="p-4 bg-default-100 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <div className="font-bold">DKIM Record {index + 1}</div>
                  <div className="text-small text-default-500">
                    Selector: {record.selector || selector}
                  </div>
                </div>
                <div className="font-mono text-sm whitespace-pre-wrap break-all">
                  {record.data}
                </div>
                <div className="text-small text-default-500 mt-2">
                  TTL: {record.TTL}s
                </div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    );
  };

  const CustomInput = (
    <div className="flex gap-4 flex-1">
      <Input
        type="text"
        value={domain}
        onChange={(e) => setDomain(e.target.value)}
        placeholder="Enter domain name"
        className="flex-1"
      />
      <Select
        value={selector}
        onChange={(e) => setSelector(e.target.value)}
        placeholder="Select DKIM selector"
        className="w-48"
      >
        {selectors.map((s) => (
          <SelectItem key={s.value} value={s.value}>
            {s.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );

  return (
    <ToolTemplate
      inputPlaceholder="Custom"
      customInput={CustomInput}
      buttonText="Lookup DKIM Record"
      handleLookup={handleLookup}
      renderResults={renderResults}
      loading={loading}
      error={error}
      value={domain}
      onChange={(e) => setDomain(e.target.value)}
    />
  );
};

export default DkimLookup;
