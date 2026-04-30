import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const About = () => {
  const sections = [
    {
      title: "Front End Development",
      description:
        "Experienced in modern web development with React.js, proficient in HTML5, CSS3, JavaScript (ES6+), and Tailwind CSS. I specialize in building responsive, user-friendly web applications with a focus on performance and best practices. Skilled in state management, component architecture, and integrating RESTful APIs.",
    },
    {
      title: "UI/UX Design",
      description:
        "Passionate about creating intuitive and engaging user experiences. Proficient in Figma and Adobe XD for wireframing, prototyping, and design systems. I focus on user-centered design principles, ensuring both aesthetics and functionality work together seamlessly.",
    },
    {
      title: "Graphic Design",
      description:
        "Creative graphic designer skilled in Adobe Creative Suite (Photoshop, Illustrator, InDesign) and Canva. Experienced in creating visual content for digital and print media, including logos, branding materials, social media graphics, and marketing collateral. Strong eye for typography, color theory, and composition.",
    },
  ];

  return (
    <div id="About" className="p-10 sm:px-48 pt-20">
      <FadeIn>
        <h2 className="font-display text-5xl sm:text-6xl tracking-tightest">
          About Me
        </h2>
      </FadeIn>
      <div className="flex flex-col gap-10 mt-10">
        {sections.map((section, index) => (
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
            className="border-t border-black pt-6"
          >
            <h3 className="font-display text-2xl sm:text-3xl italic">
              {section.title}
            </h3>
            <p className="mt-3 max-w-3xl leading-relaxed">
              {section.description}
            </p>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default About;
