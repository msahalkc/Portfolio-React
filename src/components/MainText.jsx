import { motion } from 'framer-motion';

const MainText = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }} // Initial animation properties
      animate={{ opacity: 1, y: 0 }} // Animation properties when component is mounted
      transition={{ duration: 1 }} // Transition duration
      className="text-center text-4xl md:text-9xl text-[#eee5e0] Bebas"
    >
      <h1>
        {"{"}Front End Developer{"}"}
      </h1>
    </motion.div>
  );
};

export default MainText;
