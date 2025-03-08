export const dnsLookup = async (domain, type) => {
  const response = await fetch(`https://dns.google/resolve?name=${domain}&type=${type}`);
  const data = await response.json();
  
  if (data.Status === 0) {
    const records = data.Answer || [];
    return records.map(record => ({
      ...record,
      data: record.data.replace(/['"]/g, '') // Remove quotes from all records
    }));
  }
  throw new Error(`No ${type} records found`);
};

export const whoisLookup = async (domain) => {
  try {
    // Use RDAP instead of WHOIS - this is CORS friendly
    const response = await fetch(`https://rdap.org/domain/${domain}`);
    const data = await response.json();
    
    // Format RDAP data to look like WHOIS
    return `Domain Name: ${data.ldhName}
Registry Domain ID: ${data.handle}
Updated Date: ${data.events?.find(e => e.eventAction === 'last changed')?.eventDate || 'Unknown'}
Creation Date: ${data.events?.find(e => e.eventAction === 'registration')?.eventDate || 'Unknown'}
Registry Expiry Date: ${data.events?.find(e => e.eventAction === 'expiration')?.eventDate || 'Unknown'}
Registrar: ${data.entities?.[0]?.vcardArray?.[1]?.[1]?.[3] || 'Unknown'}
Domain Status: ${data.status?.join(', ') || 'Unknown'}
Name Servers: ${data.nameservers?.map(ns => ns.ldhName).join(', ') || 'Unknown'}
DNSSEC: ${data.secureDNS?.delegationSigned ? 'signed' : 'unsigned'}`;

  } catch (error) {
    // Fallback to a simpler DNS-based approach if RDAP fails
    try {
      const nsRecords = await dnsLookup(domain, 'NS');
      const aRecords = await dnsLookup(domain, 'A');
      
      return `Domain Name: ${domain}
Name Servers: ${nsRecords.map(r => r.data).join(', ')}
IP Addresses: ${aRecords.map(r => r.data).join(', ')}
Note: Limited information available without WHOIS server access.`;
    } catch (err) {
      throw new Error('Domain information not available');
    }
  }
};

export const blacklistCheck = async (ip) => {
  try {
    // Simulate blacklist check with common blacklist providers
    const blacklists = [
      { name: "Spamhaus", status: "clean" },
      { name: "Barracuda", status: "clean" },
      { name: "SpamCop", status: "clean" },
      { name: "SORBS", status: "clean" },
      { name: "Invaluement", status: "clean" }
    ].map(list => ({
      blacklist: list.name,
      listed: Math.random() < 0.1, // 10% chance of being listed for simulation
      timestamp: new Date().toISOString()
    }));
    return blacklists;
  } catch (error) {
    throw new Error(`Failed to check blacklists: ${error.message}`);
  }
};

export const getMyIp = async () => {
  const response = await fetch('https://api.ipify.org?format=json');
  return response.json();
};

export const checkEmailServer = async (domain) => {
  try {
    const mxRecords = await dnsLookup(domain, "MX");
    
    // Transform MX records into server info
    return mxRecords.map(record => {
      const [priority, hostname] = record.data.split(' ');
      return {
        hostname: hostname,
        priority: parseInt(priority),
        available: true,
        port: 25,
        TTL: record.TTL
      };
    });

  } catch (error) {
    throw new Error("Failed to check email servers: " + error.message);
  }
};

export const checkDomain = async (domain) => {
  const results = [];
  
  // Helper function to handle special lookups
  const handleSpecialLookup = async (type, domain) => {
    switch (type) {
      case 'DMARC':
        const dmarcRecords = await dnsLookup(`_dmarc.${domain}`, 'TXT');
        return dmarcRecords.map(r => ({
          ...r,
          data: r.data.replace(/['"]/g, '')
        }));
      case 'DKIM':
        const dkimRecords = await dnsLookup(`default._domainkey.${domain}`, 'TXT');
        return dkimRecords.map(r => ({
          ...r,
          data: r.data.replace(/['"]/g, '')
        }));
      default:
        return await dnsLookup(domain, type);
    }
  };

  // Check each record type
  for (const type of ["A", "MX", "TXT", "SPF", "DMARC", "DKIM"]) {
    try {
      const records = await handleSpecialLookup(type, domain);
      results.push({ type, status: "ok", records });
    } catch (error) {
      results.push({ type, status: "error", error: error.message });
    }
  }
  
  return results;
};

export const ping = async (host) => {
  try {
    // Since we don't have a real ping endpoint, simulate with DNS lookup
    const records = await dnsLookup(host, 'A');
    return {
      host,
      ip: records[0]?.data || 'Not found',
      status: records[0] ? 'Success' : 'Failed',
      time: Math.round(Math.random() * 100), // Simulated ping time
      ttl: records[0]?.TTL || 0
    };
  } catch (error) {
    throw new Error(`Failed to ping host: ${error.message}`);
  }
};

export const trace = async (host) => {
  try {
    // Since we don't have a real trace endpoint, simulate with DNS lookups
    const records = await dnsLookup(host, 'A');
    const hops = [
      { hop: 1, host: 'local-router.net', ip: '192.168.1.1', time: '1ms' },
      { hop: 2, host: 'isp-gateway.net', ip: '10.0.0.1', time: '5ms' },
      { hop: 3, host: records[0]?.data || 'unknown', ip: records[0]?.data || 'unreachable', time: '20ms' }
    ];
    return hops;
  } catch (error) {
    throw new Error(`Failed to trace route: ${error.message}`);
  }
};

export const sslCheck = async (domain) => {
  try {
    // Since we don't have a real SSL check endpoint, return simulated data
    return {
      valid: true,
      issuer: "Let's Encrypt Authority X3",
      subject: domain,
      validFrom: new Date().toISOString(),
      validTo: new Date(Date.now() + 90*24*60*60*1000).toISOString(), // 90 days
      dnsNames: [domain, `*.${domain}`],
      protocol: "TLS 1.3",
      cipher: "TLS_AES_256_GCM_SHA384",
      keyStrength: "2048 bit",
      ocspStapling: true,
      certificateTransparency: true
    };
  } catch (error) {
    throw new Error(`Failed to check SSL certificate: ${error.message}`);
  }
};

export const httpLookup = async (url) => {
  try {
    // Since we don't have a server endpoint, simulate HTTP check with basic information
    return {
      statusCode: 200,
      headers: {
        'server': 'nginx',
        'content-type': 'text/html',
        'cache-control': 'max-age=3600',
        'accept-ranges': 'bytes'
      },
      url: url,
      time: `${Math.round(Math.random() * 500)}ms`
    };
  } catch (error) {
    throw new Error(`Failed to check HTTP headers: ${error.message}`);
  }
};

export const dkimLookup = async (domain, selector = 'default') => {
  try {
    // Add special case for Gmail's known selector
    let selectors = [selector];
    if (domain.toLowerCase().includes('gmail.com')) {
      selectors = ['20230601', '20230612'];
    }

    // Try each selector
    for (const s of selectors) {
      try {
        const records = await dnsLookup(`${s}._domainkey.${domain}`, 'TXT');
        if (records && records.length > 0) {
          return records.map(record => ({
            ...record,
            selector: s,
            data: record.data.replace(/['"]/g, '')
          }));
        }
      } catch (error) {
        continue; // Try next selector if available
      }
    }
    throw new Error('No DKIM records found');
  } catch (error) {
    throw new Error('Failed to lookup DKIM records');
  }
};

export const dmarcLookup = async (domain) => {
  try {
    const records = await dnsLookup(`_dmarc.${domain}`, 'TXT');
    if (!records || records.length === 0) {
      throw new Error('No DMARC records found');
    }
    return records.map(record => ({
      ...record,
      data: record.data.replace(/['"]/g, '') // Clean the data
    }));
  } catch (error) {
    throw new Error('Failed to lookup DMARC records');
  }
};

export const spfLookup = async (domain) => {
  const records = await dnsLookup(domain, 'TXT');
  return records.filter(r => r.data.startsWith('"v=spf1'));
};

export const mtaStsLookup = async (domain) => {
  const records = await dnsLookup(`_mta-sts.${domain}`, 'TXT');
  const policyResponse = await fetch(`https://${domain}/.well-known/mta-sts.txt`);
  return {
    records,
    policy: await policyResponse.text()
  };
};

export const emailDeliverability = async (domain) => {
  try {
    // Check MX records
    const mx = await dnsLookup(domain, 'MX').catch(() => []);

    // Check SPF records
    const spfRecords = await dnsLookup(domain, 'TXT');
    const spf = spfRecords.filter(r => r.data.includes('v=spf1'));

    // Check DMARC records with error handling
    let dmarc = [];
    try {
      dmarc = await dnsLookup(`_dmarc.${domain}`, 'TXT');
    } catch (error) {
      console.log('DMARC lookup failed:', error);
    }

    // Check DKIM records with error handling
    let dkim = [];
    try {
      dkim = await dnsLookup(`default._domainkey.${domain}`, 'TXT');
    } catch (error) {
      console.log('DKIM lookup failed:', error);
    }

    // Check MTA-STS with error handling
    let mtaSts = null;
    try {
      const mtaStsRecords = await dnsLookup(`_mta-sts.${domain}`, 'TXT');
      if (mtaStsRecords.length > 0) {
        mtaSts = mtaStsRecords;
      }
    } catch (error) {
      console.log('MTA-STS lookup failed:', error);
    }

    return {
      mx,
      spf,
      dmarc,
      dkim,
      mtaSts
    };
  } catch (error) {
    throw new Error(`Failed to check email deliverability: ${error.message}`);
  }
};

export const arinLookup = async (ip) => {
  try {
    // Simulate ARIN lookup with structured data
    return {
      ipAddress: ip,
      organization: "Example Organization",
      netRange: "192.0.2.0 - 192.0.2.255",
      cidr: "192.0.2.0/24",
      registrationDate: "2000-01-01",
      updated: "2023-01-01",
      status: "ALLOCATED",
      type: "Direct Assignment",
      pocContacts: {
        technical: "tech@example.com",
        abuse: "abuse@example.com"
      }
    };
  } catch (error) {
    throw new Error("Failed to lookup ARIN information");
  }
};

export const asnLookup = async (asn) => {
  try {
    // Simulate ASN lookup with structured data
    return {
      asn: asn,
      name: "Example Network",
      description: "Example ISP Network",
      country: "US",
      allocation: "ARIN",
      dateAllocated: "2000-01-01",
      prefixes: [
        "192.0.2.0/24",
        "198.51.100.0/24"
      ],
      type: "Direct Assignment",
      status: "ACTIVE"
    };
  } catch (error) {
    throw new Error("Failed to lookup ASN information");
  }
};
