import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import LaBelle from "../assets/labelle website.png";
import Kart from "../assets/shopping kart website.png";
import Todo from "../assets/todo website.png";
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
      image: LaBelle,
      title: "LaBelle '23 Website",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae accusantium fugiat esse ratione qui totam consequatur voluptas, voluptatum eaque facilis soluta itaque ullam quae voluptatibus.",
      websiteLink: "https://msahalkc.github.io/LaBelle/",
      githubLink: "https://github.com/msahalkc/LaBelle",
    },
    {
      image: Todo,
      title: "Todo Application using React",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae accusantium fugiat esse ratione qui totam consequatur voluptas, voluptatum eaque facilis soluta itaque ullam quae voluptatibus.",
      websiteLink: "https://todo-react-kc.netlify.app/",
      githubLink: "https://github.com/msahalkc/todo-react",
    },
    {
      image: Kart,
      title: "E-Commerce Website",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae accusantium fugiat esse ratione qui totam consequatur voluptas, voluptatum eaque facilis soluta itaque ullam quae voluptatibus.",
      websiteLink: "",
      githubLink:
        "https://github.com/msahalkc/E-Commerce-website-using-express-and-node.js",
    },
  ];

  return (
    <div className="sm:min-h-screen p-10 sm:px-48 pt-28" id="Works">
      <div className="text-6xl Bebas">My Works</div>
      <div className="flex justify-between mt-10 gap-10 flex-col sm:flex-row flex-wrap md:flex-nowrap">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            custom={index}
            className="w-full"
          >
            <Card
              shadow="none"
              className="p-3 border-1 border-blueee-500 dark:border-emerald-200  bg-transparent "
            >
              <CardBody>
                <Image
                  src={project.image}
                  className="w-fit"
                  
                  alt=""
                />
                <h4 className="sm:text-2xl mt-5">
                  <b>{project.title}</b>
                </h4>
              </CardBody>
              <CardFooter>
                <div className="flex flex-col gap-3">
                  <p className="text-justify">{project.description}</p>
                  <div className="flex gap-4">
                    <Button className="bg-blueee-500 dark:bg-emerald-500 text-blaq-1000  w-fit">
                      <a href={project.websiteLink} className="">
                        View Website
                      </a>
                    </Button>
                    <Button className="bg-blueee-500 dark:bg-emerald-500 text-blaq-1000  w-fit">
                      <a href={project.githubLink} className="">
                        <i className="fa-brands fa-github"></i>
                      </a>
                    </Button>
                  </div>
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
