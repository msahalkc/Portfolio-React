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
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 sm:px-12 py-4 border-b border-black bg-cream/90 backdrop-blur-sm">
            <span className="text-xs uppercase tracking-[0.25em] flex items-center">
              <span className="spin-slow inline-block mr-2">✱</span>
              Now viewing · {title}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="border border-black px-4 py-2 text-xs uppercase tracking-[0.2em] hover:bg-black hover:text-cream transition-colors"
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
            className="px-4 sm:px-8 lg:px-12 py-10 sm:py-14"
          >
            <article className="relative max-w-5xl mx-auto border-2 border-black bg-cream shadow-[8px_8px_0_0_rgba(0,0,0,0.08)]">
              <span className="absolute -top-3 left-6 sm:left-10 bg-cream px-2 text-[10px] sm:text-xs uppercase tracking-[0.3em]">
                Poster · {number}
              </span>
              <span className="absolute -top-3 right-6 sm:right-10 bg-cream px-2 text-[10px] sm:text-xs uppercase tracking-[0.3em]">
                Edition · 2026
              </span>

              <header className="border-b-2 border-black p-8 sm:p-12 lg:p-16">
                <div className="flex items-center justify-between text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-8 opacity-70">
                  <span>{meta || "Section"}</span>
                  <span>Folio · M. Sahal</span>
                </div>

                <h1 className="font-display font-light text-6xl sm:text-8xl lg:text-9xl leading-[0.85] tracking-tightest">
                  <span className="opacity-40">{"{"}</span>
                  <span className="italic font-medium">{title}</span>
                  <span className="opacity-40">{"}"}</span>
                </h1>

                {subtitle && (
                  <p className="mt-6 italic font-display text-xl sm:text-2xl lg:text-3xl max-w-2xl leading-snug">
                    {subtitle}
                  </p>
                )}

                <div className="mt-10 flex items-center gap-4 text-[10px] sm:text-xs uppercase tracking-[0.3em]">
                  <span>No. {number}</span>
                  <span className="dotted-rule flex-1" aria-hidden="true" />
                  <span>Tap ✕ to close</span>
                </div>
              </header>

              <div className="p-8 sm:p-12 lg:p-16">{children}</div>

              <footer className="border-t-2 border-black px-8 sm:px-12 lg:px-16 py-5 flex items-center justify-between text-[10px] sm:text-xs uppercase tracking-[0.3em]">
                <span className="flex items-center gap-2">
                  <span className="spin-slow inline-block">✱</span>
                  End of Poster · {number}
                </span>
                <span className="hidden sm:inline">
                  Muhammed Sahal K C · Portfolio
                </span>
                <span>2026</span>
              </footer>
            </article>

            <div className="flex justify-center mt-10">
              <button
                type="button"
                onClick={onClose}
                className="link-grow text-xs uppercase tracking-[0.25em]"
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
