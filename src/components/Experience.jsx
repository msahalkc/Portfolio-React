const Experience = () => {
  const experiences = [
    {
      title: "Software Developer",
      company: "FantaCode",
      location: "Kozhikode, Kerala, India",
      duration: "June 2024 - Present",
      description:
        "Working as a Software Developer at FantaCode, focused on developing innovative solutions.",
      skills: ["ASP.NET", "AngularJS", "GitHub", "Full Stack Development"],
    },
    {
      title: "Chief Technical Officer",
      company: "IEDC MESCE",
      location: "Malappuram, Kerala, India",
      duration: "July 2023 - June 2024",
      description:
        "Led technical initiatives and teams at IEDC MESCE, overseeing project development and implementation.",
      skills: ["Technical Leadership", "Project Management", "Team Management"],
    },
    {
      title: "React Developer Intern",
      company: "Tecnavis Web Solutions Pvt Ltd",
      location: "Kerala, India",
      duration: "March 2024 - May 2024",
      description:
        "Worked on React.js based web applications, contributing to frontend development and user interface design.",
      skills: ["React.js", "Frontend Development", "UI/UX Design"],
    },
    {
      title: "Graphic Designer",
      company: "Applied Knowledge Sciences, Inc.",
      location: "Virginia, United States (Remote)",
      duration: "October 2023 - January 2024",
      description:
        "Created visual content and design solutions for an international client base.",
      skills: ["Graphic Design", "Visual Communication", "Adobe Creative Suite"],
    },
    {
      title: "Freelance Graphic Designer",
      company: "Self-employed",
      location: "Malappuram, Kerala, India",
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
    <div id="Experience" className="p-10 sm:px-48 pt-20">
      <h2 className="text-4xl sm:text-5xl font-bold">Experience</h2>
      <div className="flex flex-col gap-10 mt-8">
        {experiences.map((exp, index) => (
          <article key={index} className="border-t border-black pt-6">
            <h3 className="text-2xl font-semibold">{exp.title}</h3>
            <p className="text-lg font-medium mt-1">{exp.company}</p>
            <p className="text-sm">
              {exp.location} &middot; {exp.duration}
            </p>
            <p className="mt-2 max-w-3xl">{exp.description}</p>
            <p className="mt-2 text-sm">
              <span className="font-semibold">Skills:</span>{" "}
              {exp.skills.join(", ")}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Experience;
