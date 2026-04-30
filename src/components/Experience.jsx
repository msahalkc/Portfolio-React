import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "FantaCode",
      duration: "June 2024 - Present",
      description:
        "Working as a Software Developer at FantaCode, focused on developing innovative solutions.",
      skills: ["ASP.NET", "AngularJS", "GitHub", "Full Stack Development"],
    },
    {
      title: "Chief Technical Officer",
      company: "IEDC MESCE",
      duration: "July 2023 - June 2024",
      description:
        "Led technical initiatives and teams at IEDC MESCE, overseeing project development and implementation.",
      skills: ["Technical Leadership", "Project Management", "Team Management"],
    },
    {
      title: "React Developer Intern",
      company: "Tecnavis Web Solutions Pvt Ltd",
      duration: "March 2024 - May 2024",
      description:
        "Worked on React.js based web applications, contributing to frontend development and user interface design.",
      skills: ["React.js", "Frontend Development", "UI/UX Design"],
    },
    {
      title: "Graphic Designer",
      company: "Applied Knowledge Sciences, Inc.",
      duration: "October 2023 - January 2024",
      description:
        "Created visual content and design solutions for an international client base.",
      skills: ["Graphic Design", "Visual Communication", "Adobe Creative Suite"],
    },
    {
      title: "Freelance Graphic Designer",
      company: "Self-employed",
      duration: "July 2021 - June 2024",
      description:
        "Provided comprehensive graphic design services for diverse clients across different industries and continents.",
      skills: [
        "Graphic Design",
        "Brand Identity",
        "Visual Design",
        "Client Management",
      ],
    },
  ];

  return (
    <div id="Experience" className="flex flex-col gap-8">
      {experiences.map((exp, index) => (
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
          <div className="col-span-12 sm:col-span-3">
            <p className="text-xs uppercase tracking-[0.25em] opacity-70">
              {String(index + 1).padStart(2, "0")} · Role
            </p>
            <p className="text-xs uppercase tracking-[0.2em] mt-2">
              {exp.duration}
            </p>
          </div>
          <div className="col-span-12 sm:col-span-9">
            <h3 className="font-display text-3xl sm:text-4xl tracking-tightest">
              {exp.title}
            </h3>
            <p className="text-lg italic mt-1">{exp.company}</p>
            <p className="mt-3 max-w-3xl leading-relaxed">{exp.description}</p>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] opacity-80">
              Skills <span className="mx-2">&middot;</span>
              <span className="normal-case tracking-normal">
                {exp.skills.join(" · ")}
              </span>
            </p>
          </div>
        </motion.article>
      ))}
    </div>
  );
};

export default Experience;
