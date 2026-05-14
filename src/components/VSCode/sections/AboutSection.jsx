import { motion } from 'framer-motion';

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

const skills = {
  'Frontend': { items: ['React.js', 'AngularJS', 'HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript (ES6+)'], color: '#61dafb' },
  'Backend': { items: ['ASP.NET', 'Node.js', 'Express.js', 'REST APIs'], color: '#4ec9b0' },
  'Database': { items: ['MongoDB', 'SQL Server'], color: '#dcdcaa' },
  'Design': { items: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'InDesign'], color: '#c586c0' },
  'Tools': { items: ['Git', 'GitHub', 'VS Code', 'Netlify', 'Vite'], color: '#ce9178' },
};

const iframes = [
  'https://www.behance.net/embed/project/164402949?ilo0=1',
  'https://www.behance.net/embed/project/164400157?ilo0=1',
  'https://www.behance.net/embed/project/164402641?ilo0=1',
];

const preamble = [
  (n) => <Line key={n} n={n}><C>about.tsx — About Muhammed Sahal K C</C></Line>,
  (n) => <Line key={n} n={n} />,
  (n) => <Line key={n} n={n}><K>import</K> {'{ '}<T>SkillSet</T>, <T>Expertise</T>{' }'} <K>from</K> <S>./types</S>;</Line>,
  (n) => <Line key={n} n={n} />,
  (n) => <Line key={n} n={n}><K>const</K> <V>about</V> = {'{'}</Line>,
  (n) => <Line key={n} n={n} pad={1}><V>name</V>: <S>Muhammed Sahal K C</S>,</Line>,
  (n) => <Line key={n} n={n} pad={1}><V>expertise</V>: [<S>Frontend</S>, <S>UI/UX</S>, <S>Graphic Design</S>],</Line>,
  (n) => <Line key={n} n={n} pad={1}><V>education</V>: <S>B.Tech CSE — MESCE Kuttippuram</S>,</Line>,
  (n) => <Line key={n} n={n} pad={1}><V>currentRole</V>: <S>Software Developer at FantaCode</S>,</Line>,
  (n) => <Line key={n} n={n}>{'}'}</Line>,
  (n) => <Line key={n} n={n} />,
  (n) => <Line key={n} n={n}><K>export default function</K> <F>About</F>() {'{'}</Line>,
  (n) => <Line key={n} n={n} pad={1}><K>return</K> (</Line>,
];

const closing = [
  (n) => <Line key={n} n={n} pad={1}>);</Line>,
  (n) => <Line key={n} n={n}>{'}'}</Line>,
];

const AboutSection = () => (
  <div className="vsc-section">
    <div className="vsc-code-block">
      {preamble.map((r, i) => r(i + 1))}
    </div>

    <div className="vsc-rendered-output">
      <div className="vsc-output-marker">
        <span style={{ color: '#6a9955', fontSize: '0.75rem' }}>{'/* ↓ rendered output ↓ */'}</span>
      </div>

      <div className="vsc-about-header">
        <span style={{ color: '#dcdcaa', fontSize: '1.8rem', fontFamily: 'Consolas, monospace', fontWeight: 'bold' }}>
          <span style={{ color: '#4ec9b0' }}>About</span>
          <span style={{ color: '#569cd6' }}>Me</span>
          <span style={{ color: '#cccccc' }}>()</span>
        </span>
      </div>

      {/* Expertise cards */}
      <div className="vsc-about-cards">
        {[
          {
            title: 'Front End Development',
            icon: 'fa-solid fa-code',
            color: '#61dafb',
            desc: 'Experienced in modern web development with React.js, proficient in HTML5, CSS3, JavaScript (ES6+), and Tailwind CSS. I specialize in building responsive, user-friendly web applications with a focus on performance and best practices.',
          },
          {
            title: 'UI/UX Design',
            icon: 'fa-solid fa-pen-ruler',
            color: '#c586c0',
            desc: 'Passionate about creating intuitive and engaging user experiences. Proficient in Figma and Adobe XD for wireframing, prototyping, and design systems. I focus on user-centered design principles.',
          },
          {
            title: 'Graphic Design',
            icon: 'fa-solid fa-palette',
            color: '#dcdcaa',
            desc: 'Creative graphic designer skilled in Adobe Creative Suite (Photoshop, Illustrator, InDesign) and Canva. Experienced in creating visual content for digital and print media, including logos, branding materials, and marketing collateral.',
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="vsc-about-card"
            style={{ '--about-color': card.color }}
          >
            <div className="vsc-about-card-icon">
              <i className={card.icon} style={{ color: card.color, fontSize: '1.2rem' }} />
            </div>
            <h3 className="vsc-about-card-title" style={{ color: card.color }}>{card.title}</h3>
            <p className="vsc-about-card-desc">{card.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Skills matrix */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="vsc-skills-matrix"
      >
        <div style={{ color: '#6a9955', fontSize: '0.8rem', marginBottom: 16 }}>
          {'// skills — organized by category'}
        </div>
        <div className="vsc-skills-matrix-grid">
          {Object.entries(skills).map(([category, { items, color }]) => (
            <div key={category} className="vsc-skill-category">
              <div className="vsc-skill-category-header">
                <span style={{ color, fontFamily: 'Consolas, monospace', fontSize: '0.8rem' }}>
                  <span style={{ color: '#569cd6' }}>const </span>
                  <span style={{ color: '#9cdcfe' }}>{category.toLowerCase()}</span>
                  <span style={{ color: '#cccccc' }}> = [</span>
                </span>
              </div>
              <div className="vsc-skill-items">
                {items.map(item => (
                  <span key={item} className="vsc-skill-item" style={{ borderColor: color + '44', color }}>
                    {item}
                  </span>
                ))}
              </div>
              <div style={{ color: '#cccccc', fontFamily: 'Consolas, monospace', fontSize: '0.75rem', marginTop: 4 }}>]</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Graphic design portfolio */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        className="vsc-behance-section"
      >
        <div className="vsc-behance-header">
          <i className="fa-brands fa-behance" style={{ color: '#1769ff', fontSize: '1.2rem', marginRight: 10 }} />
          <span style={{ color: '#dcdcaa', fontFamily: 'Consolas, monospace' }}>
            <span style={{ color: '#9cdcfe' }}>graphicDesignPortfolio</span>
            <span style={{ color: '#cccccc' }}>.</span>
            <span style={{ color: '#dcdcaa' }}>behance</span>
          </span>
          <span style={{ color: '#6a9955', fontSize: '0.75rem', marginLeft: 12 }}>// via iframe embed</span>
        </div>
        <div className="vsc-behance-grid">
          {iframes.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
              className="vsc-behance-item"
            >
              <iframe
                src={src}
                allowFullScreen
                loading="lazy"
                allow="clipboard-write"
                className="vsc-behance-iframe"
                title={`Behance project ${i + 1}`}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>

    <div className="vsc-code-block">
      {closing.map((r, i) => r(i + preamble.length + 1))}
    </div>
  </div>
);

export default AboutSection;
