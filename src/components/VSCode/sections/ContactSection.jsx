import { motion } from 'framer-motion';
import { useState } from 'react';

const K = ({ children }) => <span style={{ color: '#569cd6' }}>{children}</span>;
const T = ({ children }) => <span style={{ color: '#4ec9b0' }}>{children}</span>;
const S = ({ children }) => <span style={{ color: '#ce9178' }}>"{children}"</span>;
const C = ({ children }) => <span style={{ color: '#6a9955' }}>// {children}</span>;
const F = ({ children }) => <span style={{ color: '#dcdcaa' }}>{children}</span>;
const V = ({ children }) => <span style={{ color: '#9cdcfe' }}>{children}</span>;

const Line = ({ n, children, pad = 0 }) => (
  <div className="vsc-line">
    <span className="vsc-ln">{n}</span>
    <span className="vsc-lc" style={{ paddingLeft: pad * 18 }}>{children ?? ' '}</span>
  </div>
);

const preamble = [
  (n) => <Line key={n} n={n}><C>contact.tsx — Let&apos;s connect!</C></Line>,
  (n) => <Line key={n} n={n} />,
  (n) => <Line key={n} n={n}><K>import</K> {'{ '}<T>useState</T>{' }'} <K>from</K> <S>react</S>;</Line>,
  (n) => <Line key={n} n={n}><K>import</K> {'{ '}<T>ContactForm</T>{' }'} <K>from</K> <S>./components</S>;</Line>,
  (n) => <Line key={n} n={n} />,
  (n) => <Line key={n} n={n}><K>const</K> <V>contact</V> = {'{'}</Line>,
  (n) => <Line key={n} n={n} pad={1}><V>phone</V>: <S>+91 9847 790 722</S>,</Line>,
  (n) => <Line key={n} n={n} pad={1}><V>email</V>: <S>msahalkc@gmail.com</S>,</Line>,
  (n) => <Line key={n} n={n} pad={1}><V>location</V>: <S>MES College of Engineering, Kuttippuram</S>,</Line>,
  (n) => <Line key={n} n={n} pad={1}><V>github</V>: <S>github.com/msahalkc</S>,</Line>,
  (n) => <Line key={n} n={n} pad={1}><V>linkedin</V>: <S>linkedin.com/in/msahalkc</S>,</Line>,
  (n) => <Line key={n} n={n}>{'}'}</Line>,
  (n) => <Line key={n} n={n} />,
  (n) => <Line key={n} n={n}><K>export default function</K> <F>Contact</F>() {'{'}</Line>,
  (n) => <Line key={n} n={n} pad={1}><K>return</K> (</Line>,
];

const closing = [
  (n) => <Line key={n} n={n} pad={1}>);</Line>,
  (n) => <Line key={n} n={n}>{'}'}</Line>,
];

const contactInfo = [
  { icon: 'fa-solid fa-mobile', label: 'Phone', value: '+91 9847 790 722', href: 'tel:+919847790722', color: '#4ec9b0' },
  { icon: 'fa-solid fa-envelope', label: 'Email', value: 'msahalkc@gmail.com', href: 'mailto:msahalkc@gmail.com', color: '#dcdcaa' },
  { icon: 'fa-solid fa-location-dot', label: 'Location', value: 'MES College of Engineering, Kuttippuram', href: null, color: '#c586c0' },
];

const socials = [
  { icon: 'fa-brands fa-github', label: 'GitHub', href: 'https://github.com/msahalkc', color: '#cccccc' },
  { icon: 'fa-brands fa-linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/msahalkc', color: '#0077b5' },
  { icon: 'fa-brands fa-medium', label: 'Medium', href: 'https://medium.com/@msahalkc', color: '#cccccc' },
  { icon: 'fa-brands fa-behance', label: 'Behance', href: 'https://www.behance.net/msahalkc', color: '#1769ff' },
];

const ContactSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`, {
        method: 'POST',
        body: new FormData(e.target),
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        setIsSubmitted(true);
        e.target.reset();
      } else {
        alert('Oops! There was a problem submitting your form');
      }
    } catch {
      alert('Oops! There was a problem submitting your form');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="vsc-section">
      <div className="vsc-code-block">
        {preamble.map((r, i) => r(i + 1))}
      </div>

      <div className="vsc-rendered-output">
        <div className="vsc-output-marker">
          <span style={{ color: '#6a9955', fontSize: '0.75rem' }}>{'/* ↓ rendered output ↓ */'}</span>
        </div>

        <div className="vsc-contact-header">
          <span style={{ color: '#dcdcaa', fontSize: '1.8rem', fontFamily: 'Consolas, monospace', fontWeight: 'bold' }}>
            <span style={{ color: '#4ec9b0' }}>Contact</span>
            <span style={{ color: '#569cd6' }}>()</span>
          </span>
          <span style={{ color: '#6a9955', fontSize: '0.8rem', marginLeft: 16 }}>// I&apos;ve been waiting for you</span>
        </div>

        <div className="vsc-contact-layout">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="vsc-contact-info"
          >
            <div className="vsc-contact-tagline">
              <span style={{ color: '#cccccc', fontSize: '1.4rem', lineHeight: 1.5 }}>
                I&apos;ve been <br />
              </span>
              <span style={{ color: '#4ec9b0', fontSize: '1.4rem' }}>waiting for you.</span>
            </div>

            <div className="vsc-contact-details">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="vsc-contact-item"
                >
                  <div className="vsc-contact-item-icon" style={{ background: item.color + '22', border: `1px solid ${item.color}44` }}>
                    <i className={item.icon} style={{ color: item.color }} />
                  </div>
                  <div>
                    <div style={{ color: '#858585', fontSize: '0.7rem', fontFamily: 'Consolas, monospace' }}>
                      <span style={{ color: '#569cd6' }}>const </span>
                      <span style={{ color: '#9cdcfe' }}>{item.label.toLowerCase()}</span>
                      <span style={{ color: '#cccccc' }}> = </span>
                    </div>
                    {item.href ? (
                      <a href={item.href} className="vsc-contact-value" style={{ color: item.color }}>
                        {item.value}
                      </a>
                    ) : (
                      <span className="vsc-contact-value" style={{ color: item.color }}>{item.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div className="vsc-contact-socials">
              <div style={{ color: '#6a9955', fontSize: '0.75rem', marginBottom: 12 }}>{'// social_links[]'}</div>
              <div className="vsc-socials-row">
                {socials.map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    whileHover={{ scale: 1.15 }}
                    className="vsc-social-btn"
                    title={s.label}
                    style={{ '--social-color': s.color }}
                  >
                    <i className={s.icon} style={{ color: s.color, fontSize: '1.2rem' }} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="vsc-contact-form-wrap"
          >
            <div className="vsc-form-header">
              <span style={{ color: '#dcdcaa', fontFamily: 'Consolas, monospace', fontSize: '0.9rem' }}>
                <span style={{ color: '#569cd6' }}>async function </span>
                <span style={{ color: '#dcdcaa' }}>sendMessage</span>
                <span style={{ color: '#cccccc' }}>(</span>
                <span style={{ color: '#9cdcfe' }}>data</span>
                <span style={{ color: '#cccccc' }}>) {'{'}</span>
              </span>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="vsc-form-success"
              >
                <i className="fa-solid fa-circle-check" style={{ fontSize: '2rem', color: '#4ec9b0', marginBottom: 12 }} />
                <p style={{ color: '#4ec9b0', fontFamily: 'Consolas, monospace' }}>
                  <span style={{ color: '#6a9955' }}>// </span>
                  Message sent successfully!
                </p>
                <p style={{ color: '#858585', fontSize: '0.8rem', marginTop: 8 }}>
                  I&apos;ll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="vsc-contact-form">
                {[
                  { name: 'name', type: 'text', placeholder: 'Your Name', label: 'name' },
                  { name: 'email', type: 'email', placeholder: 'Your Email', label: 'email' },
                  { name: 'subject', type: 'text', placeholder: 'Subject', label: 'subject' },
                ].map(field => (
                  <div key={field.name} className="vsc-field-wrap">
                    <div className="vsc-field-label">
                      <span style={{ color: '#9cdcfe', fontFamily: 'Consolas, monospace', fontSize: '0.75rem' }}>
                        <span style={{ color: '#569cd6' }}>const </span>{field.label}:
                      </span>
                    </div>
                    <input
                      type={field.type}
                      name={field.name}
                      required
                      placeholder={field.placeholder}
                      disabled={isSubmitting}
                      onFocus={() => setFocused(field.name)}
                      onBlur={() => setFocused(null)}
                      className={`vsc-input ${focused === field.name ? 'vsc-input-focused' : ''}`}
                    />
                  </div>
                ))}

                <div className="vsc-field-wrap">
                  <div className="vsc-field-label">
                    <span style={{ color: '#9cdcfe', fontFamily: 'Consolas, monospace', fontSize: '0.75rem' }}>
                      <span style={{ color: '#569cd6' }}>const </span>message:
                    </span>
                  </div>
                  <textarea
                    name="message"
                    required
                    placeholder="Your Message"
                    disabled={isSubmitting}
                    rows={4}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    className={`vsc-input vsc-textarea ${focused === 'message' ? 'vsc-input-focused' : ''}`}
                  />
                </div>

                <button type="submit" disabled={isSubmitting} className="vsc-submit-btn">
                  {isSubmitting ? (
                    <>
                      <i className="fa-solid fa-spinner fa-spin" style={{ marginRight: 8 }} />
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-paper-plane" style={{ marginRight: 8 }} />
                      Submit()
                    </>
                  )}
                </button>
              </form>
            )}

            <div style={{ color: '#cccccc', fontFamily: 'Consolas, monospace', fontSize: '0.9rem', marginTop: 8 }}>
              {'}'}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="vsc-code-block">
        {closing.map((r, i) => r(i + preamble.length + 1))}
      </div>
    </div>
  );
};

export default ContactSection;
