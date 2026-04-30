const Marquee = ({ children, duration = 28, reverse = false, className = "" }) => {
  const items = Array.from({ length: 6 }, (_, i) => i);
  return (
    <div
      className={`overflow-hidden border-y border-black py-5 sm:py-7 ${className}`}
      aria-hidden="true"
    >
      <div
        className="marquee-track"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {items.map((i) => (
          <span
            key={i}
            className="px-6 font-display text-3xl sm:text-5xl tracking-tightest"
          >
            {children}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
