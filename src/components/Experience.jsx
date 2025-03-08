import { motion, useAnimation, useScroll } from 'framer-motion';
import { useEffect, useRef } from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/react";

const Experience = () => {
  const controls = useAnimation();
  const expRef = useRef(null);
  const { scrollY } = useScroll();

  useEffect(() => {
    const updateOpacity = () => {
      if (expRef.current && scrollY.current > expRef.current.offsetTop - window.innerHeight / 2) {
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

  const experiences = [
    {
      title: "Software Developer",
      company: "FantaCode",
      logo: "./src/assets/company-logos/fantacode.png",
      location: "Kozhikode, Kerala, India",
      duration: "June 2024 - Present",
      description: "Working as a Software Developer at FantaCode, focused on developing innovative solutions.",
      skills: ["ASP.NET", "AngularJS", "GitHub", "Full Stack Development"]
    },
    {
      title: "Chief Technical Officer",
      company: "IEDC MESCE",
      logo: "./src/assets/company-logos/iedc-mesce.png",
      location: "Malappuram, Kerala, India",
      duration: "July 2023 - June 2024",
      description: "Led technical initiatives and teams at IEDC MESCE, overseeing project development and implementation.",
      skills: ["Technical Leadership", "Project Management", "Team Management"]
    },
    {
      title: "React Developer Intern",
      company: "Tecnavis Web Solutions Pvt Ltd",
      logo: "./src/assets/company-logos/tecnavis.png",
      location: "Kerala, India",
      duration: "March 2024 - May 2024",
      description: "Worked on React.js based web applications, contributing to frontend development and user interface design.",
      skills: ["React.js", "Frontend Development", "UI/UX Design"]
    },
    {
      title: "Graphic Designer",
      company: "Applied Knowledge Sciences, Inc.",
      logo: "./src/assets/company-logos/aks.png",
      location: "Virginia, United States (Remote)",
      duration: "October 2023 - January 2024",
      description: "Created visual content and design solutions for an international client base.",
      skills: ["Graphic Design", "Visual Communication", "Adobe Creative Suite"]
    },
    {
      title: "Freelance Graphic Designer",
      company: "Self-employed",
      location: "Malappuram, Kerala, India",
      duration: "July 2021 - June 2024",
      description: "Provided comprehensive graphic design services for diverse clients across different industries and continents.",
      skills: ["Graphic Design", "Brand Identity", "Visual Design", "Client Management"]
    }
  ];

  return (
    <div id="Experience" className="sm:min-h-screen p-10 sm:px-48 pt-28" ref={expRef}>
      <div className="text-6xl Bebas">Experience</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 1, delay: index * 0.2 }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <Card shadow='none' className="border-1 border-blueee-500 dark:border-emerald-200 p-3 bg-transparent h-full hover:shadow-lg hover:shadow-blueee-500/20 dark:hover:shadow-emerald-500/20 transition-all duration-300">
              <CardBody className="flex-none">
                <div className="flex items-center gap-2">
                  {exp.logo && (
                    <img 
                      src={exp.logo} 
                      alt={`${exp.company} logo`} 
                      className="w-20 h-10 object-contain rounded-lg bg-white p-1 border-2 border-blueee-500 dark:border-emerald-200"
                    />
                  )}
                  <h5 className="Bebas text-2xl bg-blueee-500 dark:bg-emerald-500 text-blaq-1000 w-fit px-2 rounded-lg">
                    {exp.title}
                  </h5>
                </div>
                <div className="mt-4">
                  <p className="text-lg font-bold">{exp.company}</p>
                  <p className="text-sm opacity-70">{exp.location}</p>
                  <p className="text-sm opacity-70">{exp.duration}</p>
                </div>
              </CardBody>
              <CardFooter className="flex flex-col items-start gap-4 flex-1">
                <p className="text-sm text-justify">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-2 py-1 text-xs rounded-full bg-blueee-500/10 dark:bg-emerald-500/10 border-1 border-blueee-500 dark:border-emerald-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
