import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.6 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const SubTexts = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-7 mt-6 max-w-3xl text-base sm:text-lg leading-relaxed"
    >
      <motion.div variants={item}>
        <h2 className="font-display text-2xl sm:text-3xl italic">So who am I?</h2>
        <p className="mt-2">
          I&apos;m <span className="font-semibold">Muhammed Sahal K C</span>, a
          Software Developer at FantaCode based in Kozhikode, Kerala. With
          expertise in Full Stack Development, UI/UX Design, and Graphic Design,
          I bring creative solutions to technical challenges.
        </p>
      </motion.div>
      <motion.div variants={item}>
        <h2 className="font-display text-2xl sm:text-3xl italic">What do I do?</h2>
        <p className="mt-2">
          I specialize in ASP.NET and AngularJS development while maintaining a
          strong foundation in React.js. With a keen eye for design and
          technical proficiency, I create seamless, user-centric digital
          solutions that make a difference.
        </p>
      </motion.div>
      <motion.div variants={item}>
        <a href="#Contact" className="link-grow font-semibold inline-block">
          Get in Touch &rarr;
        </a>
      </motion.div>
    </motion.div>
  );
};

export default SubTexts;
