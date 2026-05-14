import { motion } from 'framer-motion';
import LaBelle from '../../../assets/labelle website.png';
import Kart from '../../../assets/shopping kart website.png';
import Todo from '../../../assets/todo website.png';
import KTU from '../../../assets/ktu-website.png';
import Vista from '../../../assets/vista-website.png';

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

const projects = [
  {
    image: Vista,
    title: 'Vista 24 by MESSOA',
    description: 'Official website for Vista \'24, an architectural exhibition event by MES School of Architecture. Features event details, registration system, and an immersive showcase of architectural projects.',
    tech: ['React.js', 'Tailwind CSS', 'Netlify'],
    websiteLink: 'https://vistamessoa.netlify.app/',
    githubLink: 'https://github.com/msahalkc/vistamessoa',
    color: '#4ec9b0',
  },
  {
    image: KTU,
    title: 'KTU Result Viewer',
    description: 'Web application to help KTU students easily view and track their examination results. Built using React.js and integrated with KTU\'s exam results API.',
    tech: ['React.js', 'REST API', 'JavaScript'],
    websiteLink: 'https://ktu.msahalkc.me',
    githubLink: 'https://github.com/msahalkc/KTU-Result-Viewer',
    isArchived: true,
    color: '#dcdcaa',
  },
  {
    image: LaBelle,
    title: "LaBelle '23 Website",
    description: "Official website for LaBelle '23, a national-level tech fest. Features responsive design, dynamic content loading, and interactive elements.",
    tech: ['HTML', 'CSS', 'JavaScript'],
    websiteLink: 'https://msahalkc.github.io/LaBelle/',
    githubLink: 'https://github.com/msahalkc/LaBelle',
    color: '#c586c0',
  },
  {
    image: Todo,
    title: 'Todo Application',
    description: 'Modern Todo application with task management, CRUD operations, local storage persistence, and dark/light theme support.',
    tech: ['React.js', 'Tailwind CSS', 'LocalStorage'],
    websiteLink: 'https://todo-react-kc.netlify.app/',
    githubLink: 'https://github.com/msahalkc/todo-react',
    color: '#569cd6',
  },
  {
    image: Kart,
    title: 'E-Commerce Website',
    description: 'Full-stack e-commerce platform with user authentication, product catalog, and shopping cart functionality.',
    tech: ['Node.js', 'Express', 'MongoDB'],
    websiteLink: '',
    githubLink: 'https://github.com/msahalkc/E-Commerce-website-using-express-and-node.js',
    color: '#ce9178',
  },
];

const preamble = [
  (n) => <Line key={n} n={n}><C>works.tsx — Project Portfolio</C></Line>,
  (n) => <Line key={n} n={n} />,
  (n) => <Line key={n} n={n}><K>import</K> {'{ '}<T>Project</T>{' }'} <K>from</K> <S>./types</S>;</Line>,
  (n) => <Line key={n} n={n} />,
  (n) => <Line key={n} n={n}><K>const</K> <V>projects</V>: <T>Project</T>[] = [</Line>,
  (n) => <Line key={n} n={n} pad={1}>{'{ title: "Vista 24 by MESSOA", tech: ["React.js", "Tailwind CSS"] },'}</Line>,
  (n) => <Line key={n} n={n} pad={1}>{'{ title: "KTU Result Viewer", tech: ["React.js", "REST API"] },'}</Line>,
  (n) => <Line key={n} n={n} pad={1}>{'{ title: "LaBelle\'23 Website", tech: ["HTML", "CSS", "JS"] },'}</Line>,
  (n) => <Line key={n} n={n} pad={1}>{'{ title: "Todo Application", tech: ["React.js", "Tailwind CSS"] },'}</Line>,
  (n) => <Line key={n} n={n} pad={1}>{'{ title: "E-Commerce Website", tech: ["Node.js", "Express"] },'}</Line>,
  (n) => <Line key={n} n={n}>];</Line>,
  (n) => <Line key={n} n={n} />,
  (n) => <Line key={n} n={n}><K>export default function</K> <F>Works</F>() {'{'}</Line>,
  (n) => <Line key={n} n={n} pad={1}><K>return</K> (</Line>,
];

const closing = [
  (n) => <Line key={n} n={n} pad={1}>);</Line>,
  (n) => <Line key={n} n={n}>{'}'}</Line>,
];

const WorksSection = () => (
  <div className="vsc-section">
    <div className="vsc-code-block">
      {preamble.map((r, i) => r(i + 1))}
    </div>

    <div className="vsc-rendered-output">
      <div className="vsc-output-marker">
        <span style={{ color: '#6a9955', fontSize: '0.75rem' }}>{'/* ↓ rendered output ↓ */'}</span>
      </div>

      <div className="vsc-works-header">
        <span style={{ color: '#dcdcaa', fontSize: '1.8rem', fontFamily: 'Consolas, monospace', fontWeight: 'bold' }}>
          My <span style={{ color: '#4ec9b0' }}>Works</span>
          <span style={{ color: '#569cd6' }}>()</span>
        </span>
        <span style={{ color: '#6a9955', fontSize: '0.8rem', marginLeft: 16 }}>// {projects.length} projects</span>
      </div>

      <div className="vsc-works-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="vsc-project-card"
            style={{ '--card-color': project.color }}
          >
            <div className="vsc-project-img-wrap">
              <img src={project.image} alt={project.title} className="vsc-project-img" />
              {project.isArchived && (
                <div className="vsc-archived-badge">
                  <i className="fa-solid fa-archive" style={{ marginRight: 4 }} />
                  Archived
                </div>
              )}
              <div className="vsc-project-overlay">
                <div className="vsc-project-links">
                  {project.websiteLink && (
                    <a href={project.websiteLink} target="_blank" rel="noreferrer" className="vsc-project-link">
                      <i className="fa-solid fa-arrow-up-right-from-square" />
                      <span>Live</span>
                    </a>
                  )}
                  <a href={project.githubLink} target="_blank" rel="noreferrer" className="vsc-project-link">
                    <i className="fa-brands fa-github" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="vsc-project-body">
              <div className="vsc-project-title-row">
                <span style={{ color: '#6a9955', fontSize: '0.7rem', marginRight: 6 }}>const</span>
                <h3 className="vsc-project-title" style={{ color: project.color }}>
                  {project.title}
                </h3>
              </div>
              <p className="vsc-project-desc">{project.description}</p>
              <div className="vsc-project-tech">
                {project.tech.map(t => (
                  <span key={t} className="vsc-tech-tag" style={{ borderColor: project.color + '44', color: project.color }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    <div className="vsc-code-block">
      {closing.map((r, i) => r(i + preamble.length + 1))}
    </div>
  </div>
);

export default WorksSection;
