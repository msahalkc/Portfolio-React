import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`,
        {
          method: "POST",
          body: new FormData(e.target),
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
        e.target.reset();
      } else {
        alert("Oops! There was a problem submitting your form");
      }
    } catch (error) {
      alert("Oops! There was a problem submitting your form");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full bg-transparent border-b border-black py-2 outline-none placeholder:text-black/50 focus:border-b-2 transition-all";

  return (
    <div className="p-10 sm:px-48 pt-20 pb-24" id="Contact">
      <FadeIn>
        <h2 className="font-display text-5xl sm:text-6xl tracking-tightest">
          Contact Me
        </h2>
      </FadeIn>
      <div className="mt-10 flex flex-col sm:flex-row gap-12">
        <FadeIn className="sm:w-1/2 flex flex-col gap-5" delay={0.1}>
          <p className="font-display text-3xl sm:text-5xl leading-tight tracking-tightest">
            I&apos;ve been{" "}
            <span className="italic">waiting</span> for you.
          </p>
          <p className="leading-relaxed">
            Fill in the form or send a message to{" "}
            <a href="mailto:msahalkc@gmail.com" className="link-underline font-medium">
              msahalkc@gmail.com
            </a>
            .
          </p>
          <ul className="flex flex-col gap-3 mt-2">
            <li>
              <span className="text-sm uppercase tracking-wider">Phone</span>
              <span className="mx-2">&middot;</span>
              +91 9847 790 722
            </li>
            <li>
              <span className="text-sm uppercase tracking-wider">Email</span>
              <span className="mx-2">&middot;</span>
              msahalkc@gmail.com
            </li>
          </ul>
        </FadeIn>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="sm:w-1/2 flex flex-col gap-5"
        >
          <p className="font-display text-2xl">Send me a Message</p>
          {isSubmitted ? (
            <p className="border border-black p-4 italic">
              Thank you for your message. I&apos;ll get back to you soon.
            </p>
          ) : (
            <>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                disabled={isSubmitting}
                className={inputClass}
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                disabled={isSubmitting}
                className={inputClass}
              />
              <input
                type="text"
                name="subject"
                required
                placeholder="Subject"
                disabled={isSubmitting}
                className={inputClass}
              />
              <textarea
                name="message"
                required
                placeholder="Your Message"
                disabled={isSubmitting}
                rows={4}
                className={`${inputClass} resize-none`}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="border border-black px-6 py-3 w-fit uppercase tracking-wider text-sm font-medium hover:bg-black hover:text-cream transition-colors duration-300 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </>
          )}
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
