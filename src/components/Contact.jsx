import { useState } from "react";

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
    "w-full bg-transparent border-b border-black py-2 outline-none placeholder:text-black/60";

  return (
    <div className="p-10 sm:px-48 pt-20" id="Contact">
      <h2 className="text-4xl sm:text-5xl font-bold">Contact Me</h2>
      <div className="mt-8 flex flex-col sm:flex-row gap-10">
        <div className="sm:w-1/2 flex flex-col gap-4">
          <p className="text-2xl sm:text-4xl">
            I&apos;ve been waiting for you.
          </p>
          <p>
            Fill in the form or send a message to{" "}
            <a href="mailto:msahalkc@gmail.com" className="underline">
              msahalkc@gmail.com
            </a>
            .
          </p>
          <ul className="flex flex-col gap-2 mt-2">
            <li>
              <span className="font-semibold">Phone:</span> +91 9847 790 722
            </li>
            <li>
              <span className="font-semibold">Email:</span> msahalkc@gmail.com
            </li>
            <li>
              <span className="font-semibold">Location:</span> MES College of
              Engineering, Kuttippuram
            </li>
          </ul>
        </div>
        <form
          onSubmit={handleSubmit}
          className="sm:w-1/2 flex flex-col gap-5"
        >
          <p className="text-xl font-semibold">Send me a Message</p>
          {isSubmitted ? (
            <p className="border border-black p-4">
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
                className="border border-black px-4 py-2 w-fit font-semibold disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
