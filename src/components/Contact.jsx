import { motion, useAnimation, useScroll } from 'framer-motion';
import { Input, Textarea, Button } from "@nextui-org/react";
import { useEffect } from "react";

const Contact = () => {
  const controls = useAnimation();
  const { scrollY } = useScroll();

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
          className="sm:w-[50%] flex flex-col justify-center gap-5 mt-10 sm:mt-0"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
        >
          <div className="text-2xl">
            <b>Send me a Message</b>
          </div>
          <div className="flex flex-col gap-5">
            <Input
              type="text"
              id="name"
              name="name"
              className=""
              required
              placeholder="Enter Your Name"
              variant="bordered"
              
            />
            <Input
              type="email"
              id="email"
              name="email"
              className=""
              required
              placeholder="Enter Your Email"
              variant="bordered"
              
            />
            <Input
              type="text"
              id="subject"
              name="subject"
              className=""
              required
              placeholder="Enter the Subject"
              variant="bordered"
              
            />
            <Textarea
              id="message"
              name="message"
              className=""
              required
              placeholder="Enter you Message"
              variant="bordered"
              
            ></Textarea>
            <Button type="submit" className="bg-blueee-500 dark:bg-emerald-800 text-emerald-50 font-semibold" >
              Submit
            </Button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
