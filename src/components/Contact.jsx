import { motion, useAnimation, useScroll } from 'framer-motion';
import { Input, Textarea, Button } from "@nextui-org/react";
import { useEffect, useState } from "react";

const Contact = () => {
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const updateOpacity = () => {
      const section = document.getElementById('Contact');
      if (section) {
        const rect = section.getBoundingClientRect();
        const triggerOffset = window.innerHeight * 0.6; // Adjust this value as needed
        if (rect.top < triggerOffset) {
          controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: 'easeOut' }
          });
        }
      }
    };

    updateOpacity();

    return scrollY.onChange(updateOpacity);
  }, [controls, scrollY]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`, {
        method: "POST",
        body: new FormData(e.target),
        headers: {
          'Accept': 'application/json'
        }
      });

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

  return (
    <div className="sm:min-h-screen p-10 sm:px-48 pt-28 flex flex-col" id="Contact">
      <div className="text-6xl Bebas">Contact Me</div>
      <div className="flex-1 flex flex-col sm:flex-row">
        <motion.div
          className="sm:w-[50%] flex flex-col justify-center mt-10 sm:mt-0"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
        >
          <span className="text-3xl sm:text-6xl">
            I&apos;ve been <br />
          </span>
          <span className="text-3xl sm:text-6xl text-blueee-500 dark:text-emerald-500">waiting for you.</span>
          <p className="mt-4">
            Fill in the form or{" "}
            <a href="">
              <b>
                <u>Send us an email</u>
              </b>
            </a>
          </p>
          <div className="flex flex-col gap-5 mt-5">
            <div className="flex gap-3 sm:gap-5 items-center">
              <div className="bg-blueee-500 dark:bg-emerald-800 rounded-full">
                <i className="fa-solid fa-mobile p-3 sm:p-5"></i>
              </div>
              <div className="">
                <p>+91 9847 790 722</p>
              </div>
            </div>
            <div className="flex gap-3 sm:gap-5 items-center">
              <div className="bg-blueee-500 dark:bg-emerald-800 rounded-full">
                <i className="fa-solid fa-envelope p-3 sm:p-5"></i>
              </div>
              <div className="">
                <p>msahalkc@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-3 sm:gap-5 items-center">
              <div className="bg-blueee-500 dark:bg-emerald-800 rounded-full">
                <i className="fa-solid fa-location-arrow p-3 sm:p-5"></i>
              </div>
              <div className="">
                <p>MES College of Engineering, Kuttippuram</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.form
          onSubmit={handleSubmit}
          className="sm:w-[50%] flex flex-col justify-center gap-5 mt-10 sm:mt-0"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
        >
          <div className="text-2xl">
            <b>Send me a Message</b>
          </div>
          {isSubmitted ? (
            <div className="bg-emerald-500/10 p-4 rounded-lg border border-emerald-500">
              <p className="text-emerald-500">Thank you for your message! I'll get back to you soon.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              <Input
                type="text"
                name="name"
                required
                placeholder="Enter Your Name"
                variant="bordered"
                disabled={isSubmitting}
              />
              <Input
                type="email"
                name="email"
                required
                placeholder="Enter Your Email"
                variant="bordered"
                disabled={isSubmitting}
              />
              <Input
                type="text"
                name="subject"
                required
                placeholder="Enter the Subject"
                variant="bordered"
                disabled={isSubmitting}
              />
              <Textarea
                name="message"
                required
                placeholder="Enter your Message"
                variant="bordered"
                disabled={isSubmitting}
                minRows={4}
              />
              <Button 
                type="submit" 
                className="bg-blueee-500 dark:bg-emerald-800 text-emerald-50 font-semibold"
                isLoading={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </Button>
            </div>
          )}
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
