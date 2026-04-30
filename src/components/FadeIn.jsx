import { motion } from "framer-motion";

const FadeIn = ({
  children,
  delay = 0,
  y = 24,
  duration = 0.7,
  once = true,
  className = "",
  as = "div",
}) => {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
};

export default FadeIn;
