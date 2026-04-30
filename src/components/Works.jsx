import { motion } from "framer-motion";

const Works = () => {
  const projects = [
    {
      title: "Vista 24 by MESSOA",
      description:
        "Designed and developed the official website for Vista '24, an architectural exhibition event by MES School of Architecture. Built with modern web technologies, featuring event details, registration system, and an immersive showcase of architectural projects.",
      websiteLink: "https://vistamessoa.netlify.app/",
      githubLink: "https://github.com/msahalkc/vistamessoa",
    },
    {
      title: "KTU Result Viewer",
      description:
        "Developed a web application to help KTU students easily view and track their examination results. Built using React.js and integrated with KTU's exam results API. (Currently archived due to API endpoint changes by KTU)",
      websiteLink: "https://ktu.msahalkc.me",
      githubLink: "https://github.com/msahalkc/KTU-Result-Viewer",
      isArchived: true,
    },
    {
      title: "LaBelle '23 Website",
      description:
        "Designed and developed the official website for LaBelle '23, a national-level tech fest. Built using HTML, CSS, and JavaScript, featuring responsive design, dynamic content loading, and interactive elements to showcase event details and registration information.",
      websiteLink: "https://msahalkc.github.io/LaBelle/",
      githubLink: "https://github.com/msahalkc/LaBelle",
    },
    {
      title: "Todo Application using React",
      description:
        "A modern Todo application built with React.js and styled with Tailwind CSS. Features include task management with CRUD operations, local storage persistence, and a clean, intuitive user interface with dark/light theme support.",
      websiteLink: "https://todo-react-kc.netlify.app/",
      githubLink: "https://github.com/msahalkc/todo-react",
    },
    {
      title: "E-Commerce Website",
      description:
        "Developed a full-stack e-commerce platform using Node.js, Express, and MongoDB. Implemented features like user authentication, product catalog, shopping cart functionality.",
      websiteLink: "",
      githubLink:
        "https://github.com/msahalkc/E-Commerce-website-using-express-and-node.js",
    },
  ];

  return (
    <div className="flex flex-col gap-8" id="Works">
      {projects.map((project, index) => (
        <motion.article
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.7,
            delay: index * 0.08,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="border-t border-black pt-6 grid grid-cols-12 gap-4"
        >
          <span className="col-span-12 sm:col-span-2 text-xs uppercase tracking-[0.25em] opacity-70 pt-2">
            {String(index + 1).padStart(2, "0")} · Project
          </span>
          <div className="col-span-12 sm:col-span-10">
            <div className="flex items-baseline gap-3 flex-wrap">
              <h3 className="font-display text-3xl sm:text-4xl tracking-tightest">
                {project.title}
              </h3>
              {project.isArchived && (
                <span className="text-sm italic opacity-70">(Archived)</span>
              )}
            </div>
            <p className="mt-3 max-w-3xl leading-relaxed">
              {project.description}
            </p>
            <div className="flex gap-6 mt-4 text-xs uppercase tracking-[0.2em]">
              {project.websiteLink && (
                <a
                  href={project.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-grow"
                >
                  View Website ↗
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-grow"
                >
                  Source Code ↗
                </a>
              )}
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
};

export default Works;
