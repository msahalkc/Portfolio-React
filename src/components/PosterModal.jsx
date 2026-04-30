import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const PosterModal = ({
  open,
  index = 0,
  title,
  subtitle,
  meta,
  onClose,
  children,
}) => {
  useEffect(() => {
    if (!open) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, onClose]);

  const number = String((index ?? 0) + 1).padStart(2, "0");

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="poster-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[150] bg-cream overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label={title}
        >
          <div className="sticky top-0 z-20 flex items-center justify-between gap-3 px-4 sm:px-8 lg:px-12 py-3 sm:py-4 border-b border-black bg-cream/90 backdrop-blur-sm">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] flex items-center min-w-0">
              <span className="spin-slow inline-block mr-2 flex-shrink-0">✱</span>
              <span className="truncate">
                <span className="hidden sm:inline">Now viewing · </span>
                {title}
              </span>
            </span>
            <button
              type="button"
              onClick={onClose}
              className="border border-black px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] hover:bg-black hover:text-cream transition-colors flex-shrink-0"
              aria-label="Close"
            >
              Close ✕
            </button>
          </div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
            className="px-3 sm:px-8 lg:px-12 py-6 sm:py-10 lg:py-14"
          >
            <article className="relative max-w-5xl mx-auto border-2 border-black bg-cream shadow-[6px_6px_0_0_rgba(0,0,0,0.08)] sm:shadow-[8px_8px_0_0_rgba(0,0,0,0.08)]">
              <span className="absolute -top-3 left-3 sm:left-10 bg-cream px-2 text-[9px] sm:text-xs uppercase tracking-[0.3em]">
                No. {number}
              </span>
              <span className="absolute -top-3 right-3 sm:right-10 bg-cream px-2 text-[9px] sm:text-xs uppercase tracking-[0.3em]">
                Edition · 2026
              </span>

              <header className="border-b-2 border-black p-5 sm:p-10 lg:p-16">
                <div className="flex items-center justify-between text-[9px] sm:text-xs uppercase tracking-[0.3em] mb-5 sm:mb-8 opacity-70 gap-2">
                  <span className="truncate">{meta || "Section"}</span>
                  <span className="flex-shrink-0">Folio · M. Sahal</span>
                </div>

                <h1 className="font-display font-light text-4xl sm:text-7xl lg:text-9xl leading-[0.85] tracking-tightest break-words">
                  <span className="opacity-40">{"{"}</span>
                  <span className="italic font-medium">{title}</span>
                  <span className="opacity-40">{"}"}</span>
                </h1>

                {subtitle && (
                  <p className="mt-4 sm:mt-6 italic font-display text-base sm:text-2xl lg:text-3xl max-w-2xl leading-snug">
                    {subtitle}
                  </p>
                )}

                <div className="mt-6 sm:mt-10 flex items-center gap-3 sm:gap-4 text-[9px] sm:text-xs uppercase tracking-[0.3em]">
                  <span>No. {number}</span>
                  <span className="dotted-rule flex-1" aria-hidden="true" />
                  <span className="hidden sm:inline">Tap ✕ to close</span>
                  <span className="sm:hidden">Close ✕</span>
                </div>
              </header>

              <div className="p-5 sm:p-10 lg:p-16">{children}</div>

              <footer className="border-t-2 border-black px-5 sm:px-10 lg:px-16 py-4 sm:py-5 flex items-center justify-between text-[9px] sm:text-xs uppercase tracking-[0.3em] gap-2">
                <span className="flex items-center gap-2 min-w-0">
                  <span className="spin-slow inline-block flex-shrink-0">✱</span>
                  <span className="truncate">End · No. {number}</span>
                </span>
                <span className="hidden md:inline">
                  Muhammed Sahal K C · Portfolio
                </span>
                <span className="flex-shrink-0">2026</span>
              </footer>
            </article>

            <div className="flex justify-center mt-6 sm:mt-10">
              <button
                type="button"
                onClick={onClose}
                className="link-grow text-[10px] sm:text-xs uppercase tracking-[0.25em]"
              >
                ← Back to the wall
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PosterModal;
