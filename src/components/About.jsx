import { motion, useAnimation, useScroll } from 'framer-motion';
import { useEffect, useRef } from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/react";

const About = () => {
  const controls = useAnimation();
  const aboutRef = useRef(null);
  const { scrollY } = useScroll();

  useEffect(() => {
    const updateOpacity = () => {
      if (aboutRef.current && scrollY.current > aboutRef.current.offsetTop - window.innerHeight / 2) {
        controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 1 }
        });
      }
    };

    updateOpacity();

    return scrollY.onChange(updateOpacity);
  }, [controls, scrollY]);

  const sections = [
    {
      title: "Front End Development",
      description: "Experienced in modern web development with React.js, proficient in HTML5, CSS3, JavaScript (ES6+), and Tailwind CSS. I specialize in building responsive, user-friendly web applications with a focus on performance and best practices. Skilled in state management, component architecture, and integrating RESTful APIs."
    },
    {
      title: "UI/UX Design",
      description: "Passionate about creating intuitive and engaging user experiences. Proficient in Figma and Adobe XD for wireframing, prototyping, and design systems. I focus on user-centered design principles, ensuring both aesthetics and functionality work together seamlessly."
    },
    {
      title: "Graphic Design",
      description: "Creative graphic designer skilled in Adobe Creative Suite (Photoshop, Illustrator, InDesign) and Canva. Experienced in creating visual content for digital and print media, including logos, branding materials, social media graphics, and marketing collateral. Strong eye for typography, color theory, and composition."
    }
  ];

  const iframes = [
    "https://www.behance.net/embed/project/164402949?ilo0=1",
    "https://www.behance.net/embed/project/164400157?ilo0=1",
    "https://www.behance.net/embed/project/164402641?ilo0=1"
  ];

  return (
    <div id="About" className="sm:min-h-screen p-10 sm:px-48 pt-28" ref={aboutRef}>
      <div className="text-6xl Bebas">ABOUT ME</div>
      <div className="flex justify-between mt-10 gap-10 flex-col sm:flex-row flex-wrap md:flex-nowrap">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 1, delay: index * 0.3 }}
            className="w-full"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <Card shadow='none' className={`border-1 border-blueee-500 dark:border-emerald-200 p-3 bg-transparent hover:shadow-lg hover:shadow-blueee-500/20 dark:hover:shadow-emerald-500/20 transition-all duration-300`}>
              <CardBody>
                <h5 className={`Bebas text-3xl bg-blueee-500 dark:bg-emerald-500 text-blaq-1000 w-fit px-2 rounded-lg`}>
                  {section.title}
                </h5>
              </CardBody>
              <CardFooter>
                <p className="text-justify">
                  {section.description}
                </p>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="mt-10 border-1 border-blueee-500 dark:border-emerald-200 p-5 rounded-lg hover:shadow-lg hover:shadow-blueee-500/20 dark:hover:shadow-emerald-500/20 transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        whileHover={{ 
          scale: 1.02,
          transition: { duration: 0.2 }
        }}
      >
        <h5 className="Bebas text-3xl bg-blueee-500 dark:bg-emerald-500 text-blaq-1000 w-fit px-2 rounded-lg">
          Graphic Design Portfolio
        </h5>
        <div className="flex justify-between mt-5 flex-col sm:flex-row gap-10 flex-wrap md:flex-nowrap">
          {iframes.map((iframe, index) => (
            <iframe
              key={index}
              src={iframe}
              allowFullScreen
              loading="lazy"
              allow="clipboard-write"
              className="w-full md:w-[30%] h-[300px] overflow-hidden rounded-lg"
              height={'300px'}
            ></iframe>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
