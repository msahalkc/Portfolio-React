import { motion } from "framer-motion";

const SectionHeading = ({ children, label }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex items-center gap-4"
    >
      <span className="spin-slow text-3xl sm:text-4xl select-none" aria-hidden="true">
        ✱
      </span>
      <div className="flex flex-col">
        {label && (
          <span className="text-xs uppercase tracking-[0.25em] opacity-70">
            {label}
          </span>
        )}
        <h2 className="font-display text-5xl sm:text-6xl tracking-tightest leading-none">
          {children}
        </h2>
      </div>
    </motion.div>
  );
};

export default SectionHeading;
