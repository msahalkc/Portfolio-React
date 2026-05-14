import { motion } from 'framer-motion';

const K = ({ children }) => <span style={{ color: '#569cd6' }}>{children}</span>;
const T = ({ children }) => <span style={{ color: '#4ec9b0' }}>{children}</span>;
const S = ({ children }) => <span style={{ color: '#ce9178' }}>"{children}"</span>;
const C = ({ children }) => <span style={{ color: '#6a9955' }}>// {children}</span>;
const F = ({ children }) => <span style={{ color: '#dcdcaa' }}>{children}</span>;
const V = ({ children }) => <span style={{ color: '#9cdcfe' }}>{children}</span>;
const P = ({ children }) => <span style={{ color: '#c586c0' }}>{children}</span>;

const Line = ({ n, children, pad = 0 }) => (
  <div className="vsc-line">
    <span className="vsc-ln">{n}</span>
    <span className="vsc-lc" style={{ paddingLeft: pad * 18 }}>{children ?? ' '}</span>
  </div>
);

const homeLines = [
  (n) => <Line key={n} n={n}><C>Welcome to msahalkc's portfolio</C></Line>,
  (n) => <Line key={n} n={n}><C>Software Developer — Kozhikode, Kerala, India</C></Line>,
  (n) => <Line key={n} n={n} />,
  (n) => <Line key={n} n={n}><K>import</K> <T>React</T> <K>from</K> <S>react</S>;</Line>,
  (n) => <Line key={n} n={n}><K>import</K> {'{ '}<T>motion</T>{' }'} <K>from</K> <S>framer-motion</S>;</Line>,
  (n) => <Line key={n} n={n} />,
  (n) => <Line key={n} n={n}><K>interface</K> <T>Developer</T> {'{'}</Line>,
  (n) => <Line key={n} n={n} pad={1}><V>name</V>: <T>string</T>;</Line>,
  (n) => <Line key={n} n={n} pad={1}><V>title</V>: <T>string</T>;</Line>,
  (n) => <Line key={n} n={n} pad={1}><V>company</V>: <T>string</T>;</Line>,
  (n) => <Line key={n} n={n} pad={1}><V>skills</V>: <T>string</T>[];</Line>,
  (n) => <Line key={n} n={n}>{'}'}</Line>,
  (n) => <Line key={n} n={n} />,
  (n) => <Line key={n} n={n}><K>const</K> <V>developer</V>: <T>Developer</T> = {'{'}</Line>,
  (n) => <Line key={n} n={n} pad={1}><V>name</V>: <S>Muhammed Sahal K C</S>,</Line>,
  (n) => <Line key={n} n={n} pad={1}><V>title</V>: <S>Software Developer</S>,</Line>,
  (n) => <Line key={n} n={n} pad={1}><V>company</V>: <S>FantaCode</S>,</Line>,
  (n) => <Line key={n} n={n} pad={1}><V>skills</V>: [<S>ASP.NET</S>, <S>AngularJS</S>, <S>React.js</S>, <S>UI/UX</S>],</Line>,
  (n) => <Line key={n} n={n}>{'}'}</Line>,
  (n) => <Line key={n} n={n} />,
  (n) => <Line key={n} n={n}><K>export default function</K> <F>Home</F>() {'{'}</Line>,
  (n) => <Line key={n} n={n} pad={1}><K>return</K> (</Line>,
];

const closingLines = [
  (n, offset) => <Line key={n} n={n + offset} pad={1}>);</Line>,
  (n, offset) => <Line key={n} n={n + offset}>{'}'}</Line>,
];

const HomeSection = ({ onNavigate }) => {
  const skills = ['ASP.NET', 'AngularJS', 'React.js', 'Tailwind CSS', 'UI/UX Design', 'Figma', 'Node.js', 'MongoDB', 'GraphQL', 'Adobe Suite'];

  return (
    <div className="vsc-section">
      {/* Code preamble */}
      <div className="vsc-code-block">
        {homeLines.map((renderLine, i) => renderLine(i + 1))}
      </div>

      {/* Rendered output */}
      <div className="vsc-rendered-output">
        <div className="vsc-output-marker">
          <span style={{ color: '#6a9955', fontSize: '0.75rem' }}>{'/* ↓ rendered output ↓ */'}</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="vsc-home-hero"
        >
          <div className="vsc-hero-eyebrow">
            <span className="vsc-hero-greeting">Hi, I am a</span>
          </div>
          <h1 className="vsc-hero-title">
            {'{'}<span style={{ color: '#4ec9b0' }}>SOFTWARE</span>{' '}
            <span style={{ color: '#dcdcaa' }}>DEVELOPER</span>{'}'}
          </h1>

          <div className="vsc-hero-bio-grid">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="vsc-bio-card"
            >
              <div className="vsc-bio-label">
                <span style={{ color: '#6a9955' }}>// Who am I?</span>
              </div>
              <p className="vsc-bio-text">
                I&apos;m <span style={{ color: '#9cdcfe' }}>Muhammed Sahal K C</span>, a Software Developer at{' '}
                <span style={{ color: '#ce9178' }}>FantaCode</span> based in Kozhikode, Kerala. With expertise in
                Full Stack Development, UI/UX Design, and Graphic Design, I bring creative solutions to technical challenges.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="vsc-bio-card"
            >
              <div className="vsc-bio-label">
                <span style={{ color: '#6a9955' }}>// What do I do?</span>
              </div>
              <p className="vsc-bio-text">
                I specialize in <span style={{ color: '#569cd6' }}>ASP.NET</span> and{' '}
                <span style={{ color: '#569cd6' }}>AngularJS</span> development while maintaining a strong foundation
                in <span style={{ color: '#61dafb' }}>React.js</span>. I create seamless, user-centric digital solutions.
              </p>
            </motion.div>
          </div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="vsc-skills-section"
          >
            <div style={{ color: '#6a9955', fontSize: '0.8rem', marginBottom: 10 }}>
              {'// skills[]'}
            </div>
            <div className="vsc-skills-grid">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.05, duration: 0.3 }}
                  className="vsc-skill-badge"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="vsc-hero-cta"
          >
            <button
              className="vsc-btn-primary"
              onClick={() => onNavigate('works')}
            >
              <i className="fa-solid fa-folder-open" style={{ marginRight: 8 }} />
              View My Works
            </button>
            <button
              className="vsc-btn-secondary"
              onClick={() => onNavigate('contact')}
            >
              <i className="fa-solid fa-terminal" style={{ marginRight: 8 }} />
              Get In Touch
            </button>
            <a
              href="https://github.com/msahalkc"
              target="_blank"
              rel="noreferrer"
              className="vsc-btn-ghost"
            >
              <i className="fa-brands fa-github" style={{ marginRight: 8 }} />
              GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Code closing */}
      <div className="vsc-code-block">
        {closingLines.map((renderLine, i) => renderLine(i, homeLines.length + 1))}
      </div>
    </div>
  );
};

export default HomeSection;
