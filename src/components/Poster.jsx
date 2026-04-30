import { motion } from "framer-motion";

const Poster = ({
  index,
  title,
  subtitle,
  meta,
  tilt = 0,
  span = "",
  aspectClass = "aspect-[3/4]",
  paddingClass = "p-6 sm:p-8",
  onClick,
}) => {
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 60, rotate: tilt }}
      whileInView={{ opacity: 1, y: 0, rotate: tilt }}
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ rotate: 0, scale: 1.025, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={`group relative border-2 border-black ${paddingClass} flex flex-col justify-between text-left bg-cream hover:bg-black hover:text-cream transition-colors duration-300 cursor-pointer ${aspectClass} ${span}`}
    >
      <span className="absolute -top-2.5 left-3 sm:left-4 text-[9px] sm:text-[10px] uppercase tracking-[0.25em] bg-cream px-1.5 group-hover:bg-black group-hover:text-cream transition-colors">
        Poster · {number}
      </span>
      <div className="flex items-start justify-between text-[9px] sm:text-[10px] uppercase tracking-[0.25em]">
        <span>{meta || "Section"}</span>
        <span className="text-base leading-none transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
          ↗
        </span>
      </div>
      <div className="flex flex-col gap-1.5">
        <h3 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl leading-[0.9] tracking-tightest">
          {title}
        </h3>
        {subtitle && (
          <p className="italic text-[11px] sm:text-xs leading-snug opacity-80">
            {subtitle}
          </p>
        )}
      </div>
      <div className="flex items-center justify-between text-[9px] sm:text-[10px] uppercase tracking-[0.25em]">
        <span className="flex items-center gap-1.5">
          <span className="spin-slow inline-block">✱</span>
          Open
        </span>
        <span className="opacity-70 group-hover:opacity-100">View</span>
      </div>
    </motion.button>
  );
};

export default Poster;
