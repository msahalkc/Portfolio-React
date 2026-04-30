import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const PosterModal = ({ open, title, onClose, children }) => {
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
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 sm:px-12 py-4 border-b border-black bg-cream/90 backdrop-blur-sm">
              <span className="text-xs uppercase tracking-[0.25em]">
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
            {children}
            <div className="flex justify-center py-10">
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
