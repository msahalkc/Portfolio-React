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
      description: "In Front End Development, I specialize in creating engaging and responsive web interfaces using React, HTML, CSS, JavaScript, and Bootstrap. With these technologies, I ensure that websites are not only visually appealing but also functional and user-friendly, enhancing the overall user experience."
    },
    {
      title: "UI/UX Design",
      description: "My expertise in UI/UX Design revolves around crafting intuitive user experiences and visually appealing designs. I proficiently use Figma and Adobe XD to translate ideas into prototypes and wireframes, refining user flows and visual aesthetics to create seamless and captivating designs."
    },
    {
      title: "Graphic Designing",
      description: "In Graphic Design, I leverage Adobe Illustrator, Photoshop, InDesign, and Canva to create impactful visuals for both digital and print media. Whether it's designing vector graphics, manipulating images, or laying out print materials, I bring creativity and technical proficiency to deliver polished and professional results that resonate with audiences."
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
          >
            <Card shadow='none' className={`border-1 border-blueee-500 dark:border-emerald-200 p-3  bg-transparent `}>
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
        className="mt-10 border-1 border-blueee-500 dark:border-emerald-200 p-5 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
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
