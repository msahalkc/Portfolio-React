import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Software Developer',
    company: 'FantaCode',
    logo: '/company-logos/fantacode.png',
    location: 'Kozhikode, Kerala, India',
    duration: 'June 2024 - Present',
    type: 'Full-time',
    description: 'Working as a Software Developer at FantaCode, focused on developing innovative solutions.',
    skills: ['ASP.NET', 'AngularJS', 'GitHub', 'Full Stack Development'],
    color: '#4ec9b0',
  },
  {
    title: 'Chief Technical Officer',
    company: 'IEDC MESCE',
    logo: '/company-logos/iedc-mesce.png',
    location: 'Malappuram, Kerala, India',
    duration: 'July 2023 - June 2024',
    type: 'Leadership',
    description: 'Led technical initiatives and teams at IEDC MESCE, overseeing project development and implementation.',
    skills: ['Technical Leadership', 'Project Management', 'Team Management'],
    color: '#dcdcaa',
  },
  {
    title: 'React Developer Intern',
    company: 'Tecnavis Web Solutions Pvt Ltd',
    logo: '/company-logos/tecnavis.png',
    location: 'Kerala, India',
    duration: 'March 2024 - May 2024',
    type: 'Internship',
    description: 'Worked on React.js based web applications, contributing to frontend development and user interface design.',
    skills: ['React.js', 'Frontend Development', 'UI/UX Design'],
    color: '#61dafb',
  },
  {
    title: 'Graphic Designer',
    company: 'Applied Knowledge Sciences, Inc.',
    logo: '/company-logos/aks.png',
    location: 'Virginia, United States (Remote)',
    duration: 'October 2023 - January 2024',
    type: 'Contract',
    description: 'Created visual content and design solutions for an international client base.',
    skills: ['Graphic Design', 'Visual Communication', 'Adobe Creative Suite'],
    color: '#c586c0',
  },
  {
    title: 'Freelance Graphic Designer',
    company: 'Self-employed',
    location: 'Malappuram, Kerala, India',
    duration: 'July 2021 - June 2024',
    type: 'Freelance',
    description: 'Provided comprehensive graphic design services for diverse clients across different industries.',
    skills: ['Graphic Design', 'Brand Identity', 'Visual Design', 'Client Management'],
    color: '#ce9178',
  },
];

const typeColor = (t) => {
  const map = { 'Full-time': '#4ec9b0', 'Leadership': '#dcdcaa', 'Internship': '#61dafb', 'Contract': '#c586c0', 'Freelance': '#ce9178' };
  return map[t] || '#cccccc';
};

const ExperienceSection = () => {
  const json = JSON.stringify(
    experiences.map(e => ({
      title: e.title,
      company: e.company,
      duration: e.duration,
      type: e.type,
      skills: e.skills,
    })),
    null,
    2
  );

  const jsonLines = json.split('\n');

  const colorizeJson = (line) => {
    line = line
      .replace(/"([^"]+)":/g, (_, k) => `<span style="color:#9cdcfe">"${k}"</span>:`)
      .replace(/: "([^"]+)"/g, (_, v) => `: <span style="color:#ce9178">"${v}"</span>`)
      .replace(/: (\d+)/g, (_, v) => `: <span style="color:#b5cea8">${v}</span>`)
      .replace(/true|false|null/g, m => `<span style="color:#569cd6">${m}</span>`);
    return line;
  };

  return (
    <div className="vsc-section">
      {/* JSON file header */}
      <div className="vsc-code-block">
        <div className="vsc-line">
          <span className="vsc-ln">1</span>
          <span className="vsc-lc" style={{ color: '#6a9955' }}>// experience.json — Work History</span>
        </div>
        <div className="vsc-line">
          <span className="vsc-ln">2</span>
          <span className="vsc-lc" style={{ color: '#6a9955' }}>// Muhammed Sahal K C — 5 positions across 4+ years</span>
        </div>
        <div className="vsc-line">
          <span className="vsc-ln">3</span>
          <span className="vsc-lc"> </span>
        </div>
        {jsonLines.map((line, i) => (
          <div key={i} className="vsc-line">
            <span className="vsc-ln">{i + 4}</span>
            <span
              className="vsc-lc"
              dangerouslySetInnerHTML={{ __html: colorizeJson(line) }}
            />
          </div>
        ))}
      </div>

      {/* Rendered view */}
      <div className="vsc-rendered-output">
        <div className="vsc-output-marker">
          <span style={{ color: '#6a9955', fontSize: '0.75rem' }}>{'/* ↓ rendered output ↓ */'}</span>
        </div>

        <div className="vsc-exp-header">
          <span style={{ color: '#dcdcaa', fontSize: '1.8rem', fontFamily: 'Consolas, monospace', fontWeight: 'bold' }}>
            <span style={{ color: '#4ec9b0' }}>Experience</span>
            <span style={{ color: '#569cd6' }}>.json</span>
          </span>
          <span style={{ color: '#6a9955', fontSize: '0.8rem', marginLeft: 16 }}>// {experiences.length} positions</span>
        </div>

        <div className="vsc-timeline">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="vsc-timeline-item"
            >
              <div className="vsc-timeline-line" style={{ '--line-color': exp.color }} />
              <div className="vsc-timeline-dot" style={{ background: exp.color }} />

              <div className="vsc-exp-card" style={{ '--exp-color': exp.color }}>
                <div className="vsc-exp-card-header">
                  <div className="vsc-exp-title-row">
                    {exp.logo && (
                      <div className="vsc-exp-logo-wrap">
                        <img src={exp.logo} alt={exp.company} className="vsc-exp-logo" />
                      </div>
                    )}
                    <div>
                      <div className="vsc-exp-title" style={{ color: exp.color }}>{exp.title}</div>
                      <div className="vsc-exp-company">{exp.company}</div>
                    </div>
                    <span className="vsc-exp-type-badge" style={{ color: typeColor(exp.type), borderColor: typeColor(exp.type) + '44' }}>
                      {exp.type}
                    </span>
                  </div>
                  <div className="vsc-exp-meta">
                    <span><i className="fa-solid fa-location-dot" style={{ marginRight: 4, color: '#858585' }} />{exp.location}</span>
                    <span><i className="fa-regular fa-calendar" style={{ marginRight: 4, color: '#858585' }} />{exp.duration}</span>
                  </div>
                </div>
                <p className="vsc-exp-desc">{exp.description}</p>
                <div className="vsc-exp-skills">
                  {exp.skills.map(skill => (
                    <span key={skill} className="vsc-skill-tag" style={{ borderColor: exp.color + '55', color: exp.color }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
