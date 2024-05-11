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
      color: "#f3d306",
      description: "In Front End Development, I specialize in creating engaging and responsive web interfaces using React, HTML, CSS, JavaScript, and Bootstrap. With these technologies, I ensure that websites are not only visually appealing but also functional and user-friendly, enhancing the overall user experience."
    },
    {
      title: "UI/UX Design",
      color: "#ec3d64",
      description: "My expertise in UI/UX Design revolves around crafting intuitive user experiences and visually appealing designs. I proficiently use Figma and Adobe XD to translate ideas into prototypes and wireframes, refining user flows and visual aesthetics to create seamless and captivating designs."
    },
    {
      title: "Graphic Designing",
      color: "#a4db73",
      description: "In Graphic Design, I leverage Adobe Illustrator, Photoshop, InDesign, and Canva to create impactful visuals for both digital and print media. Whether it's designing vector graphics, manipulating images, or laying out print materials, I bring creativity and technical proficiency to deliver polished and professional results that resonate with audiences."
    }
  ];

  const iframes = [
    "https://www.behance.net/embed/project/164402949?ilo0=1",
    "https://www.behance.net/embed/project/164400157?ilo0=1",
    "https://www.behance.net/embed/project/164402641?ilo0=1"
  ];

  return (
    <div id="About" className="md:min-h-screen p-10 md:px-48 pt-28" ref={aboutRef}>
      <div className="text-6xl Bebas">ABOUT ME</div>
      <div className="flex justify-between mt-10 gap-10 flex-col md:flex-row">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 1, delay: index * 0.3 }}
            className="w-full"
          >
            <Card shadow='none' className={`border-1 border-[#eee5e0] p-3 rounded-none bg-transparent text-[#eee5e0]`}>
              <CardBody>
                <h5 className={`Bebas text-3xl bg-[${section.color}] !text-[#0a0a0a] w-fit px-2 font-[Kanit]`}>
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
        className="mt-10 border-1 border-[#eee5e0] p-5"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
      >
        <h5 className="Bebas text-3xl bg-[#ec3d64] text-[#eee5e0] w-fit px-2">
          Graphic Design Portfolio
        </h5>
        <div className="flex justify-between mt-5 flex-col md:flex-row gap-10">
          {iframes.map((iframe, index) => (
            <iframe
              key={index}
              src={iframe}
              allowFullScreen
              loading="lazy"
              allow="clipboard-write"
              className="md:w-[30%] h-[300px] overflow-hidden"
              height={'300px'}
            ></iframe>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
