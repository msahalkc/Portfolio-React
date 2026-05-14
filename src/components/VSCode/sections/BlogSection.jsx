import { motion } from 'framer-motion';

const blogPosts = [
  {
    title: 'My First Hackathon',
    description: 'Exploring my journey and experiences at my first hackathon event, sharing insights and learning outcomes from this exciting challenge.',
    date: '2024',
    readTime: '3 min read',
    link: 'https://medium.com/@msahalkc/my-first-hackathon-beff19e8c5aa',
    tags: ['hackathon', 'experience', 'development'],
    color: '#4ec9b0',
  },
];

const mdLines = [
  { n: 1, content: '# Blog Posts', color: '#569cd6', bold: true },
  { n: 2, content: '' },
  { n: 3, content: '> Writing about my experiences, learnings, and technical adventures.', color: '#ce9178' },
  { n: 4, content: '' },
  { n: 5, content: '---', color: '#474747' },
  { n: 6, content: '' },
  { n: 7, content: '## My First Hackathon', color: '#dcdcaa', bold: true },
  { n: 8, content: '' },
  { n: 9, content: '**Date:** 2024 &nbsp;&nbsp; **Read time:** 3 min read', color: '#cccccc' },
  { n: 10, content: '' },
  { n: 11, content: 'Exploring my journey and experiences at my first hackathon event,', color: '#cccccc' },
  { n: 12, content: 'sharing insights and learning outcomes from this exciting challenge.', color: '#cccccc' },
  { n: 13, content: '' },
  { n: 14, content: '**Tags:** `hackathon` `experience` `development`', color: '#cccccc' },
  { n: 15, content: '' },
  { n: 16, content: '[Read on Medium →](https://medium.com/@msahalkc/my-first-hackathon-beff19e8c5aa)', color: '#569cd6' },
  { n: 17, content: '' },
  { n: 18, content: '---', color: '#474747' },
  { n: 19, content: '' },
  { n: 20, content: '## More posts coming soon...', color: '#858585' },
  { n: 21, content: '' },
  { n: 22, content: '> Stay tuned for articles on React, ASP.NET, and Design.', color: '#6a9955' },
];

const renderMdLine = (line) => {
  let text = line.content;
  if (!text) return <span>&nbsp;</span>;

  text = text
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, `<code style="background:#2d2d2d;padding:1px 5px;border-radius:3px;color:#ce9178;font-family:Consolas,monospace">$1</code>`)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, `<a href="$2" target="_blank" rel="noreferrer" style="color:#569cd6;text-decoration:underline">$1</a>`);

  return (
    <span
      style={{ color: line.color || '#cccccc', fontWeight: line.bold ? 700 : 400 }}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

const BlogSection = () => (
  <div className="vsc-section">
    {/* Markdown code view */}
    <div className="vsc-code-block">
      {mdLines.map(line => (
        <div key={line.n} className="vsc-line">
          <span className="vsc-ln">{line.n}</span>
          <span className="vsc-lc">{renderMdLine(line)}</span>
        </div>
      ))}
    </div>

    {/* Rendered output */}
    <div className="vsc-rendered-output">
      <div className="vsc-output-marker">
        <span style={{ color: '#6a9955', fontSize: '0.75rem' }}>{'/* ↓ rendered output ↓ */'}</span>
      </div>

      <div className="vsc-blog-header">
        <span style={{ color: '#dcdcaa', fontSize: '1.8rem', fontFamily: 'Consolas, monospace', fontWeight: 'bold' }}>
          <span style={{ color: '#569cd6' }}>#</span>{' '}
          <span style={{ color: '#4ec9b0' }}>Blog</span>
          <span style={{ color: '#569cd6' }}>.md</span>
        </span>
        <span style={{ color: '#6a9955', fontSize: '0.8rem', marginLeft: 16 }}>// {blogPosts.length} post(s)</span>
      </div>

      <div className="vsc-blog-grid">
        {blogPosts.map((post, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="vsc-blog-card"
            style={{ '--blog-color': post.color }}
          >
            <div className="vsc-blog-card-header">
              <div className="vsc-blog-icon">
                <i className="fa-brands fa-medium" style={{ fontSize: '1.5rem', color: post.color }} />
              </div>
              <div className="vsc-blog-meta">
                <span className="vsc-blog-date">{post.date}</span>
                <span className="vsc-blog-sep">•</span>
                <span className="vsc-blog-read">{post.readTime}</span>
              </div>
            </div>

            <h3 className="vsc-blog-title" style={{ color: post.color }}>
              {post.title}
            </h3>
            <p className="vsc-blog-desc">{post.description}</p>

            <div className="vsc-blog-tags">
              {post.tags.map(tag => (
                <span key={tag} className="vsc-blog-tag">
                  <span style={{ color: post.color }}>#</span>{tag}
                </span>
              ))}
            </div>

            <a
              href={post.link}
              target="_blank"
              rel="noreferrer"
              className="vsc-blog-link"
              style={{ '--link-color': post.color }}
            >
              <i className="fa-brands fa-medium" style={{ marginRight: 8 }} />
              Read on Medium
              <i className="fa-solid fa-arrow-right" style={{ marginLeft: 8, fontSize: '0.75rem' }} />
            </a>
          </motion.div>
        ))}

        {/* Coming soon card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="vsc-blog-card vsc-blog-card-ghost"
        >
          <div className="vsc-blog-coming-soon">
            <i className="fa-solid fa-pen-to-square" style={{ fontSize: '2rem', color: '#474747', marginBottom: 12 }} />
            <p style={{ color: '#858585', fontFamily: 'Consolas, monospace', fontSize: '0.85rem' }}>
              <span style={{ color: '#6a9955' }}>// </span>
              More posts coming soon...
            </p>
            <p style={{ color: '#474747', fontSize: '0.75rem', marginTop: 8 }}>
              Articles on React, ASP.NET, UI/UX Design
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

export default BlogSection;
