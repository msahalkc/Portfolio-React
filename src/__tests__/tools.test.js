import { jest } from '@jest/globals';
import { 
  dnsLookup, whoisLookup, blacklistCheck, getMyIp, checkEmailServer,
  checkDomain, ping, trace, sslCheck, httpLookup, dkimLookup,
  dmarcLookup, spfLookup, mtaStsLookup, emailDeliverability
} from '../components/Tools/api';

describe('DNS & Network Tools Tests', () => {
  let globalFetch;

  beforeAll(() => {
    globalFetch = global.fetch;
  });

  beforeEach(() => {
    global.fetch = jest.fn(() => 
      Promise.resolve({
        json: () => Promise.resolve({
          Status: 0,
          Answer: [{ data: '"test data"', TTL: 300 }]
        })
      })
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    global.fetch = globalFetch;
  });

  describe('DNS Lookup Tests', () => {
    it('should return DNS records', async () => {
      const records = await dnsLookup('example.com', 'A');
      expect(records[0].data).toBe('test data');
      expect(records[0].TTL).toBe(300);
    });

    it('should handle errors', async () => {
      global.fetch = jest.fn(() => 
        Promise.resolve({
          json: () => Promise.resolve({ Status: 1 })
        })
      );
      await expect(dnsLookup('invalid', 'A')).rejects.toThrow();
    });
  });

  describe('WHOIS Lookup Tests', () => {
    it('should return WHOIS information', async () => {
      const info = await whoisLookup('example.com');
      expect(info).toContain('Domain Name');
    });
  });

  describe('Email Server Tests', () => {
    it('should return MX server information', async () => {
      global.fetch = jest.fn(() => 
        Promise.resolve({
          json: () => Promise.resolve({
            Status: 0,
            Answer: [{ data: '10 mail.example.com', TTL: 300 }]
          })
        })
      );
      const servers = await checkEmailServer('example.com');
      expect(servers[0].priority).toBe(10);
      expect(servers[0].hostname).toBe('mail.example.com');
    });
  });

  describe('DMARC Tests', () => {
    it('should return DMARC records', async () => {
      global.fetch = jest.fn(() => 
        Promise.resolve({
          json: () => Promise.resolve({
            Status: 0,
            Answer: [{ data: '"v=DMARC1; p=reject;"', TTL: 300 }]
          })
        })
      );
      const records = await dmarcLookup('example.com');
      expect(records[0].data).toBe('v=DMARC1; p=reject;');
    });
  });

  describe('DKIM Tests', () => {
    it('should return DKIM records', async () => {
      global.fetch = jest.fn(() => 
        Promise.resolve({
          json: () => Promise.resolve({
            Status: 0,
            Answer: [{ data: '"v=DKIM1; k=rsa;"', TTL: 300 }]
          })
        })
      );
      const records = await dkimLookup('example.com');
      expect(records[0].data).toContain('v=DKIM1');
    });
  });

  describe('HTTP Lookup Tests', () => {
    it('should return HTTP headers', async () => {
      const response = await httpLookup('example.com');
      expect(response).toHaveProperty('statusCode');
      expect(response).toHaveProperty('headers');
    });
  });

  describe('SSL Check Tests', () => {
    it('should return SSL certificate info', async () => {
      const info = await sslCheck('example.com');
      expect(info).toHaveProperty('valid');
      expect(info).toHaveProperty('issuer');
    });
  });

  describe('Ping Tests', () => {
    it('should return ping results', async () => {
      const results = await ping('example.com');
      expect(results).toHaveProperty('status');
      expect(results).toHaveProperty('time');
    });
  });

  describe('Trace Tests', () => {
    it('should return trace results', async () => {
      const results = await trace('example.com');
      expect(Array.isArray(results)).toBe(true);
      expect(results[0]).toHaveProperty('hop');
    });
  });
});
