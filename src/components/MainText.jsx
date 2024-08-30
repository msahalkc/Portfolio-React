import { motion } from "framer-motion";

const MainText = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }} // Initial animation properties
      animate={{ opacity: 1, y: 0 }} // Animation properties when component is mounted
      transition={{ duration: 1 }} // Transition duration
      className="text-center relative"
    >
      <h6 className="Brittany z-50 text-2xl sm:text-4xl pt-5">Hi, I am a</h6>
      <h1 className="text-4xl sm:text-5xl md:text-9xl Bebas">
        {"{"}Front End Developer{"}"}
      </h1>
    </motion.div>
  );
};

export default MainText;
