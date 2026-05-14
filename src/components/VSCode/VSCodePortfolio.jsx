import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HomeSection from './sections/HomeSection';
import WorksSection from './sections/WorksSection';
import ExperienceSection from './sections/ExperienceSection';
import BlogSection from './sections/BlogSection';
import AboutSection from './sections/AboutSection';
import ContactSection from './sections/ContactSection';

const FILES = [
  { id: 'home', name: 'home.tsx', type: 'tsx', label: 'Home', component: HomeSection },
  { id: 'works', name: 'works.tsx', type: 'tsx', label: 'Works', component: WorksSection },
  { id: 'experience', name: 'experience.json', type: 'json', label: 'Experience', component: ExperienceSection },
  { id: 'blog', name: 'blog.md', type: 'md', label: 'Blog', component: BlogSection },
  { id: 'about', name: 'about.tsx', type: 'tsx', label: 'About', component: AboutSection },
  { id: 'contact', name: 'contact.tsx', type: 'tsx', label: 'Contact', component: ContactSection },
];

const FOLDERS = [
  {
    name: 'src',
    files: ['home', 'works', 'experience', 'blog', 'about', 'contact'],
  },
];

const EXTRA_FILES = [
  { id: 'readme', name: 'README.md', type: 'md' },
  { id: 'pkg', name: 'package.json', type: 'json' },
];

const FileIcon = ({ type, size = 'sm' }) => {
  const s = size === 'sm' ? 'text-xs' : 'text-sm';
  if (type === 'tsx') return <span className={`${s} font-bold`} style={{ color: '#61dafb' }}>⚛</span>;
  if (type === 'json') return <span className={`${s} font-bold`} style={{ color: '#dcdcaa' }}>{'{ }'}</span>;
  if (type === 'md') return <span className={`${s} font-bold`} style={{ color: '#519aba' }}>M↓</span>;
  return <span className={`${s}`} style={{ color: '#cccccc' }}>📄</span>;
};

const TitleBar = ({ filename }) => (
  <div className="vsc-titlebar">
    <div className="vsc-traffic-lights">
      <span className="vsc-tl vsc-tl-close" title="Close" />
      <span className="vsc-tl vsc-tl-min" title="Minimize" />
      <span className="vsc-tl vsc-tl-max" title="Maximize" />
    </div>
    <div className="vsc-menubar">
      {['File', 'Edit', 'Selection', 'View', 'Go', 'Run', 'Terminal', 'Help'].map(m => (
        <span key={m} className="vsc-menu-item">{m}</span>
      ))}
    </div>
    <div className="vsc-title-center">
      {filename ? `${filename} — msahalkc — Visual Studio Code` : 'Visual Studio Code'}
    </div>
    <div className="vsc-win-controls">
      <span className="vsc-win-btn">─</span>
      <span className="vsc-win-btn">□</span>
      <span className="vsc-win-btn vsc-win-close">✕</span>
    </div>
  </div>
);

const ActivityBar = ({ active, onSelect }) => {
  const items = [
    { id: 'explorer', icon: 'fa-regular fa-copy', title: 'Explorer' },
    { id: 'search', icon: 'fa-solid fa-magnifying-glass', title: 'Search' },
    { id: 'git', icon: 'fa-solid fa-code-branch', title: 'Source Control' },
    { id: 'extensions', icon: 'fa-solid fa-puzzle-piece', title: 'Extensions' },
  ];
  return (
    <div className="vsc-activitybar">
      <div className="vsc-activity-top">
        {items.map(item => (
          <button
            key={item.id}
            className={`vsc-activity-btn ${active === item.id ? 'vsc-activity-active' : ''}`}
            onClick={() => onSelect(item.id)}
            title={item.title}
          >
            <i className={item.icon} />
          </button>
        ))}
      </div>
      <div className="vsc-activity-bottom">
        <button className="vsc-activity-btn" title="Settings">
          <i className="fa-solid fa-gear" />
        </button>
        <button className="vsc-activity-btn" title="Account">
          <i className="fa-solid fa-circle-user" />
        </button>
      </div>
    </div>
  );
};

const Sidebar = ({ files, activeFile, onFileClick }) => {
  const [srcOpen, setSrcOpen] = useState(true);
  const [rootOpen, setRootOpen] = useState(true);

  const getFile = (id) => files.find(f => f.id === id);

  return (
    <div className="vsc-sidebar">
      <div className="vsc-sidebar-header">EXPLORER</div>
      <div className="vsc-sidebar-section">
        <div className="vsc-sidebar-title">MSAHALKC</div>
        <div className="vsc-file-tree">
          {/* src/ folder */}
          <div
            className="vsc-folder-row"
            onClick={() => setSrcOpen(!srcOpen)}
          >
            <i className={`fa-solid fa-chevron-${srcOpen ? 'down' : 'right'} vsc-chevron`} />
            <i className="fa-solid fa-folder vsc-folder-icon" />
            <span className="vsc-folder-name">src</span>
          </div>
          {srcOpen && (
            <div className="vsc-folder-children">
              {FOLDERS[0].files.map(id => {
                const file = getFile(id);
                if (!file) return null;
                return (
                  <div
                    key={id}
                    className={`vsc-file-row ${activeFile === id ? 'vsc-file-active' : ''}`}
                    onClick={() => onFileClick(id)}
                  >
                    <FileIcon type={file.type} />
                    <span className="vsc-file-name">{file.name}</span>
                  </div>
                );
              })}
            </div>
          )}
          {/* Root files */}
          {EXTRA_FILES.map(file => (
            <div key={file.id} className="vsc-file-row vsc-file-root">
              <FileIcon type={file.type} />
              <span className="vsc-file-name">{file.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Outline panel */}
      <div className="vsc-sidebar-outline">
        <div className="vsc-sidebar-title">OUTLINE</div>
        <div className="vsc-outline-items">
          {files.map(f => (
            <div
              key={f.id}
              className={`vsc-outline-row ${activeFile === f.id ? 'vsc-outline-active' : ''}`}
              onClick={() => onFileClick(f.id)}
            >
              <span style={{ color: '#4ec9b0', fontSize: '0.65rem', marginRight: 4 }}>ƒ</span>
              <span>{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TabBar = ({ tabs, activeTab, onTabClick, onTabClose }) => (
  <div className="vsc-tabbar">
    <div className="vsc-tabs">
      {tabs.map(tab => (
        <div
          key={tab.id}
          className={`vsc-tab ${activeTab === tab.id ? 'vsc-tab-active' : ''}`}
          onClick={() => onTabClick(tab.id)}
        >
          <FileIcon type={tab.type} />
          <span className="vsc-tab-name">{tab.name}</span>
          <button
            className="vsc-tab-close"
            onClick={(e) => onTabClose(tab.id, e)}
            title="Close"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  </div>
);

const Breadcrumb = ({ file }) => (
  <div className="vsc-breadcrumb">
    <span className="vsc-breadcrumb-item">msahalkc</span>
    <span className="vsc-breadcrumb-sep">›</span>
    {file?.id !== 'readme' && file?.id !== 'pkg' && (
      <>
        <span className="vsc-breadcrumb-item">src</span>
        <span className="vsc-breadcrumb-sep">›</span>
      </>
    )}
    <span className="vsc-breadcrumb-item vsc-breadcrumb-active">{file?.name}</span>
  </div>
);

const StatusBar = ({ file }) => (
  <div className="vsc-statusbar">
    <div className="vsc-statusbar-left">
      <span className="vsc-status-item">
        <i className="fa-solid fa-code-branch" style={{ fontSize: '0.65rem' }} />
        &nbsp;main
      </span>
      <span className="vsc-status-item">
        <i className="fa-solid fa-circle-check" style={{ fontSize: '0.65rem' }} />
        &nbsp;0 errors
      </span>
    </div>
    <div className="vsc-statusbar-right">
      <span className="vsc-status-item">
        {file?.type === 'tsx' ? 'TypeScript React' : file?.type === 'json' ? 'JSON' : 'Markdown'}
      </span>
      <span className="vsc-status-item">UTF-8</span>
      <span className="vsc-status-item">Prettier</span>
      <span className="vsc-status-item">
        <i className="fa-solid fa-bell" style={{ fontSize: '0.65rem' }} />
      </span>
    </div>
  </div>
);

const SearchPanel = ({ files, onFileClick }) => (
  <div className="vsc-sidebar">
    <div className="vsc-sidebar-header">SEARCH</div>
    <div className="vsc-search-box">
      <input className="vsc-search-input" placeholder="Search..." />
    </div>
    <div className="vsc-sidebar-section" style={{ padding: '8px 12px' }}>
      {files.map(f => (
        <div key={f.id} className="vsc-file-row" onClick={() => onFileClick(f.id)}>
          <FileIcon type={f.type} />
          <span className="vsc-file-name">{f.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const GitPanel = () => (
  <div className="vsc-sidebar">
    <div className="vsc-sidebar-header">SOURCE CONTROL</div>
    <div style={{ padding: '12px', color: '#858585', fontSize: '0.8rem' }}>
      <div style={{ marginBottom: 8 }}>
        <span style={{ color: '#4ec9b0' }}>Branch:</span> main
      </div>
      <div style={{ marginBottom: 8 }}>
        <span style={{ color: '#4ec9b0' }}>Commits:</span> 42
      </div>
      <div>
        <span style={{ color: '#4ec9b0' }}>Status:</span> Clean
      </div>
    </div>
  </div>
);

const ExtPanel = () => (
  <div className="vsc-sidebar">
    <div className="vsc-sidebar-header">EXTENSIONS</div>
    <div style={{ padding: '8px 12px' }}>
      {['Prettier', 'ESLint', 'Tailwind CSS IntelliSense', 'GitLens', 'Auto Rename Tag'].map(ext => (
        <div key={ext} className="vsc-file-row" style={{ cursor: 'default' }}>
          <span style={{ color: '#007acc', fontSize: '0.7rem', marginRight: 6 }}>■</span>
          <span style={{ fontSize: '0.8rem' }}>{ext}</span>
        </div>
      ))}
    </div>
  </div>
);

const WelcomeScreen = ({ files, onFileClick }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="vsc-welcome"
  >
    <div className="vsc-welcome-inner">
      <div className="vsc-welcome-logo">
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
          <path d="M74.7 7.3L50 31.9 25.3 7.3 7.3 25.3 31.9 50 7.3 74.7 25.3 92.7 50 68.1l24.7 24.6 18-18L68.1 50l24.6-24.7-18-18z" fill="#007acc"/>
        </svg>
      </div>
      <h1 className="vsc-welcome-title">Visual Studio Code</h1>
      <p className="vsc-welcome-sub">msahalkc / Portfolio</p>
      <div className="vsc-welcome-grid">
        <div>
          <p className="vsc-welcome-section-title">Start</p>
          {files.map(f => (
            <div key={f.id} className="vsc-welcome-link" onClick={() => onFileClick(f.id)}>
              <FileIcon type={f.type} />
              <span>{f.name}</span>
            </div>
          ))}
        </div>
        <div>
          <p className="vsc-welcome-section-title">Recent</p>
          <div className="vsc-welcome-link" style={{ opacity: 0.6, cursor: 'default' }}>
            <span style={{ color: '#858585', fontSize: '0.8rem' }}>msahalkc/portfolio-react</span>
          </div>
        </div>
        <div>
          <p className="vsc-welcome-section-title">Connect</p>
          <a href="https://github.com/msahalkc" target="_blank" rel="noreferrer" className="vsc-welcome-link">
            <i className="fa-brands fa-github" style={{ color: '#cccccc', width: 16 }} />
            <span>GitHub</span>
          </a>
          <a href="https://linkedin.com/in/msahalkc" target="_blank" rel="noreferrer" className="vsc-welcome-link">
            <i className="fa-brands fa-linkedin" style={{ color: '#0077b5', width: 16 }} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  </motion.div>
);

const VSCodePortfolio = () => {
  const [activeFile, setActiveFile] = useState(null);
  const [openTabs, setOpenTabs] = useState([]);
  const [sidebarPanel, setSidebarPanel] = useState('explorer');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const openFile = (id) => {
    if (!openTabs.includes(id)) {
      setOpenTabs(prev => [...prev, id]);
    }
    setActiveFile(id);
    if (isMobile) setSidebarOpen(false);
  };

  const closeTab = (id, e) => {
    e.stopPropagation();
    const idx = openTabs.indexOf(id);
    const newTabs = openTabs.filter(t => t !== id);
    setOpenTabs(newTabs);
    if (activeFile === id) {
      setActiveFile(newTabs.length > 0 ? newTabs[Math.max(0, idx - 1)] : null);
    }
  };

  const handleActivitySelect = (panel) => {
    if (panel === sidebarPanel && sidebarOpen) {
      setSidebarOpen(false);
    } else {
      setSidebarPanel(panel);
      setSidebarOpen(true);
    }
  };

  const currentFile = FILES.find(f => f.id === activeFile);
  const openTabFiles = openTabs.map(id => FILES.find(f => f.id === id)).filter(Boolean);

  const renderSidebarPanel = () => {
    switch (sidebarPanel) {
      case 'search': return <SearchPanel files={FILES} onFileClick={openFile} />;
      case 'git': return <GitPanel />;
      case 'extensions': return <ExtPanel />;
      default: return <Sidebar files={FILES} activeFile={activeFile} onFileClick={openFile} />;
    }
  };

  const renderEditor = () => {
    if (!activeFile || !currentFile) {
      return <WelcomeScreen files={FILES} onFileClick={openFile} />;
    }
    const Section = currentFile.component;
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFile}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="vsc-editor-content"
        >
          <Section onNavigate={openFile} />
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <div className="vsc-root">
      {!isMobile && <TitleBar filename={currentFile?.name} />}

      <div className="vsc-workspace">
        <ActivityBar active={sidebarPanel} onSelect={handleActivitySelect} />

        {sidebarOpen && !isMobile && renderSidebarPanel()}

        <div className="vsc-editor-column">
          {openTabFiles.length > 0 && (
            <TabBar
              tabs={openTabFiles}
              activeTab={activeFile}
              onTabClick={setActiveFile}
              onTabClose={closeTab}
            />
          )}
          {currentFile && <Breadcrumb file={currentFile} />}

          <div className="vsc-editor-scroll">
            {renderEditor()}
          </div>
        </div>
      </div>

      {/* Mobile bottom nav */}
      {isMobile && (
        <div className="vsc-mobile-nav">
          {FILES.map(f => (
            <button
              key={f.id}
              className={`vsc-mobile-nav-btn ${activeFile === f.id ? 'vsc-mobile-nav-active' : ''}`}
              onClick={() => openFile(f.id)}
            >
              <FileIcon type={f.type} size="sm" />
              <span>{f.label}</span>
            </button>
          ))}
        </div>
      )}

      <StatusBar file={currentFile} />
    </div>
  );
};

export default VSCodePortfolio;
