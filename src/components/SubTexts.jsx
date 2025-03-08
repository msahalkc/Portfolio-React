import { motion } from 'framer-motion';
import { Button } from "@nextui-org/react";

const SubTexts = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Initial animation properties
      animate={{ opacity: 1, y: 0 }} // Animation properties when component is mounted
      transition={{ duration: 1 }} // Transition duration
      className="flex sm:items-center sm:px-24 md:px-48 px-10 mt-5 sm:mt-10 flex-col sm:flex-row gap-5 text-sm sm:text-lg"
    >
      <div className="">
        <h6 className='Brittany text-3xl bg-blueee-500 dark:bg-emerald-500 w-fit text-blaq-1000 rounded-lg'>So who am I<span className='font-[Urbanist]'> ?</span></h6>
        <p className="text-balance">
          I&apos;m <b>Muhammed Sahal K C</b>, a Software Developer at FantaCode based in Kozhikode, Kerala. With expertise in Full Stack Development, UI/UX Design, and Graphic Design, I bring creative solutions to technical challenges. 🎓
        </p>
      </div>
      <div className="">
      <h6 className='Brittany text-3xl bg-blueee-500 dark:bg-emerald-500 w-fit text-blaq-1000 rounded-lg'>What do I do<span className='font-[Urbanist]'> ?</span></h6>
        <p className="text-balance">
          🔭 I specialize in ASP.NET and AngularJS development while maintaining a strong foundation in React.js. With a keen eye for design and technical proficiency, I create seamless, user-centric digital solutions that make a difference.
        </p>
      </div>
      <div className="">
        <Button as="a" href="#Contact" className="bg-blueee-500 dark:bg-emerald-500 text-blaq-1000 font-semibold ">Get in Touch</Button>
      </div>
    </motion.div>
  );
};

export default SubTexts;
