import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const MainText = () => {
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <motion.p variants={item} className="text-lg sm:text-xl italic font-display">
        Hi, I am a
      </motion.p>
      <motion.h1
        variants={item}
        className="font-display font-light text-5xl sm:text-7xl md:text-8xl mt-3 leading-[0.95] tracking-tightest"
      >
        Software{" "}
        <span className="italic font-medium">Developer</span>
      </motion.h1>
    </motion.div>
  );
};

export default MainText;
