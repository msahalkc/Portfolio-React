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
      <h2 className="text-4xl sm:text-5xl font-bold">About Me</h2>
      <div className="flex flex-col gap-10 mt-8">
        {sections.map((section, index) => (
          <article key={index} className="border-t border-black pt-6">
            <h3 className="text-2xl font-semibold">{section.title}</h3>
            <p className="mt-2 max-w-3xl">{section.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default About;
