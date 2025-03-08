import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import LaBelle from "../assets/labelle website.png";
import Kart from "../assets/shopping kart website.png";
import Todo from "../assets/todo website.png";
import KTU from "../assets/ktu-website.png";
import Vista from "../assets/vista-website.png";
import { Button, Card, Image, CardBody, CardFooter } from "@nextui-org/react";

const Works = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const controls = useAnimation();

  useEffect(() => {
    if (isVisible) {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 1, delay: i * 0.3 }, // Add a delay to each card based on its index
      }));
    }
  }, [isVisible, controls]);

  const projects = [
    {
      image: Vista,
      title: "Vista 24 by MESSOA",
      description:
        "Designed and developed the official website for Vista '24, an architectural exhibition event by MES School of Architecture. Built with modern web technologies, featuring event details, registration system, and an immersive showcase of architectural projects.",
      websiteLink: "https://vistamessoa.netlify.app/",
      githubLink: "https://github.com/msahalkc/vistamessoa",
    },
    {
      image: KTU,
      title: "KTU Result Viewer",
      description:
        "Developed a web application to help KTU students easily view and track their examination results. Built using React.js and integrated with KTU's exam results API. (Currently archived due to API endpoint changes by KTU)",
      websiteLink: "https://ktu.msahalkc.me",
      githubLink: "https://github.com/msahalkc/KTU-Result-Viewer",
      isArchived: true,
    },
    {
      image: LaBelle,
      title: "LaBelle '23 Website",
      description:
        "Designed and developed the official website for LaBelle '23, a national-level tech fest. Built using HTML, CSS, and JavaScript, featuring responsive design, dynamic content loading, and interactive elements to showcase event details and registration information.",
      websiteLink: "https://msahalkc.github.io/LaBelle/",
      githubLink: "https://github.com/msahalkc/LaBelle",
    },
    {
      image: Todo,
      title: "Todo Application using React",
      description:
        "A modern Todo application built with React.js and styled with Tailwind CSS. Features include task management with CRUD operations, local storage persistence, and a clean, intuitive user interface with dark/light theme support.",
      websiteLink: "https://todo-react-kc.netlify.app/",
      githubLink: "https://github.com/msahalkc/todo-react",
    },
    {
      image: Kart,
      title: "E-Commerce Website",
      description:
        "Developed a full-stack e-commerce platform using Node.js, Express, and MongoDB. Implemented features like user authentication, product catalog, shopping cart functionality.",
      websiteLink: "",
      githubLink:
        "https://github.com/msahalkc/E-Commerce-website-using-express-and-node.js",
    },
  ];

  return (
    <div className="sm:min-h-screen p-10 sm:px-48 pt-28" id="Works">
      <div className="text-6xl Bebas">My Works</div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            custom={index}
            className="w-full"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <Card
              shadow="none"
              className={`h-[500px] border-1 border-blueee-500 dark:border-emerald-200 p-3 bg-transparent hover:shadow-lg hover:shadow-blueee-500/20 dark:hover:shadow-emerald-500/20 transition-all duration-300 ${
                project.isArchived ? "opacity-75" : ""
              }`}
            >
              <CardBody className="p-0">
                <div className="w-full h-[250px] overflow-hidden rounded-lg">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    removeWrapper
                    classNames={{
                      img: "w-full h-full object-cover"
                    }}
                  />
                </div>
                <div className="flex flex-col items-center gap-2 mt-5">
                  <div className="flex gap-2 items-center w-full justify-between">
                  <h4 className="sm:text-2xl">
                    <b>{project.title}</b>
                  </h4>
                  {project.isArchived && (
                    <span className="text-xs px-2 py-1 rounded-full bg-yellow-500/20 border-1 border-yellow-500 text-yellow-500">
                      Archived
                    </span>
                  )}
                  </div>
                <p className="text-justify text-sm">{project.description}</p>
                </div>
              </CardBody>
              <CardFooter className="flex flex-col items-start gap-4 overflow-y-auto max-h-[180px]">
                <div className="flex gap-4 mt-auto">
                  <Button
                    href={project.websiteLink}
                    as="a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blueee-500 dark:bg-emerald-500 text-blaq-1000 w-fit"
                  >
                    View Website
                  </Button>
                  <Button 
                    href={project.githubLink}
                    as="a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blueee-500 dark:bg-emerald-500 text-blaq-1000 w-fit"
                  >
                    <i className="fa-brands fa-github"></i>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Works;
