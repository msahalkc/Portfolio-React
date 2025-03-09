import { useState } from "react";
import { Card, CardBody, Select, SelectItem } from "@nextui-org/react";
import MXLookup from "./MXLookup";
import DNSLookup from "./DNSLookup";
import WhoisLookup from "./WhoisLookup";
import MyIP from "./MyIP";
import EmailServerTest from "./EmailServerTest";
import DomainHealth from "./DomainHealth";
import PingTool from "./PingTool";
import TraceTool from "./TraceTool";
import HttpLookup from "./HttpLookup";
import BlacklistCheck from "./BlacklistCheck";
import SslCheck from "./SslCheck";
import SpfLookup from "./SpfLookup";
import DkimLookup from "./DkimLookup";
import DmarcLookup from "./DmarcLookup";
import MtaStsLookup from "./MtaStsLookup";
import EmailDeliverability from "./EmailDeliverability";
import ArinLookup from "./ArinLookup";
import AsnLookup from "./AsnLookup";
import SEO from "../SEO";

const ToolsLayout = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTool, setSelectedTool] = useState("");

  const tools = {
    "DNS Tools": [
      { id: "dns", name: "DNS Lookup", component: <DNSLookup /> },
      { id: "mx", name: "MX Lookup", component: <MXLookup /> },
      { id: "spf", name: "SPF Lookup", component: <SpfLookup /> },
      { id: "dkim", name: "DKIM Lookup", component: <DkimLookup /> },
      { id: "dmarc", name: "DMARC Lookup", component: <DmarcLookup /> },
    ],
    "Email Tools": [
      { id: "email-test", name: "Email Server Test", component: <EmailServerTest /> },
      { id: "mta-sts", name: "MTA-STS Lookup", component: <MtaStsLookup /> },
      { id: "deliverability", name: "Email Deliverability", component: <EmailDeliverability /> },
    ],
    "Network Tools": [
      { id: "myip", name: "What Is My IP?", component: <MyIP /> },
      { id: "ping", name: "Ping", component: <PingTool /> },
      { id: "trace", name: "Trace", component: <TraceTool /> },
      { id: "http", name: "HTTP Lookup", component: <HttpLookup /> },
      { id: "ssl", name: "SSL Check", component: <SslCheck /> },
    ],
    "Security Tools": [
      { id: "blacklist", name: "Blacklist Check", component: <BlacklistCheck /> },
      { id: "domain-health", name: "Domain Health", component: <DomainHealth /> },
    ],
    "Other Lookups": [
      { id: "whois", name: "WHOIS Lookup", component: <WhoisLookup /> },
      { id: "arin", name: "ARIN Lookup", component: <ArinLookup /> },
      { id: "asn", name: "ASN Lookup", component: <AsnLookup /> },
    ]
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
    setSelectedTool(""); // Reset selected tool when category changes
  };

  const currentTool = selectedCategory && selectedTool ? 
    tools[selectedCategory]?.find(tool => tool.id === selectedTool) : null;

  return (
    <div className="flex flex-col p-10 sm:px-48">
      <SEO 
        title="DNS & Network Tools | Muhammed Sahal K C"
        description="Free online DNS and network diagnostic tools. Lookup DNS records, check email configurations, analyze domain health, and more."
        keywords="DNS lookup, WHOIS lookup, MX records, SPF records, DKIM, DMARC, email server test, blacklist check, SSL checker, network tools"
      />
      <h1 className="text-6xl Bebas mb-10">DNS & Network Tools</h1>
      
      <Card className="mb-8">
        <CardBody className="flex flex-row gap-4">
          <Select
            label="Select Category"
            placeholder="Select a category"
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="flex-1"
          >
            {Object.keys(tools).map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </Select>

          <Select
            label="Select Tool"
            placeholder="Select a tool"
            value={selectedTool}
            onChange={(e) => setSelectedTool(e.target.value)}
            isDisabled={!selectedCategory}
            className="flex-1"
          >
            {selectedCategory && tools[selectedCategory]?.map((tool) => (
              <SelectItem key={tool.id} value={tool.id}>
                {tool.name}
              </SelectItem>
            ))}
          </Select>
        </CardBody>
      </Card>

      <div className="flex-1 overflow-hidden">
        {currentTool ? (
          <div className="h-full flex flex-col">
            <h2 className="text-3xl Bebas mb-6">{currentTool.name}</h2>
            <div className="flex-1 overflow-auto pr-2">
              {currentTool.component}
            </div>
          </div>
        ) : (
          <Card>
            <CardBody className="text-center text-default-500">
              Select a category and tool to get started
            </CardBody>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ToolsLayout;
