import { motion, useAnimation, useScroll } from 'framer-motion';
import { useEffect, useRef } from "react";
import { Card, CardBody, CardFooter, Button } from "@nextui-org/react";

const Blog = () => {
  const controls = useAnimation();
  const blogRef = useRef(null);
  const { scrollY } = useScroll();

  useEffect(() => {
    const updateOpacity = () => {
      if (blogRef.current && scrollY.current > blogRef.current.offsetTop - window.innerHeight / 2) {
        controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 1 }
        });
      }
    };

    updateOpacity();
    return scrollY.onChange(updateOpacity);
  }, [controls, scrollY]);

  const blogPosts = [
    {
      title: "My First Hackathon",
      description: "Exploring my journey and experiences at my first hackathon event, sharing insights and learning outcomes from this exciting challenge.",
      date: "2024",
      link: "https://medium.com/@msahalkc/my-first-hackathon-beff19e8c5aa",
      readTime: "3 min read"
    }
  ];

  return (
    <div id="Blog" className="sm:min-h-screen p-10 sm:px-48 pt-28" ref={blogRef}>
      <div className="text-6xl Bebas">Blog Posts</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-10">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 1, delay: index * 0.2 }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
          >
            <Card shadow='none' className="border-1 border-blueee-500 dark:border-emerald-200 p-3 bg-transparent h-full hover:shadow-lg hover:shadow-blueee-500/20 dark:hover:shadow-emerald-500/20 transition-all duration-300">
              <CardBody>
                <h5 className="Bebas text-2xl bg-blueee-500 dark:bg-emerald-500 text-blaq-1000 w-fit px-2 rounded-lg">
                  {post.title}
                </h5>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-sm opacity-70">{post.date}</span>
                  <span className="text-sm opacity-70">•</span>
                  <span className="text-sm opacity-70">{post.readTime}</span>
                </div>
              </CardBody>
              <CardFooter className="flex flex-col items-start gap-4">
                <p className="text-sm text-justify">{post.description}</p>
                <Button 
                  className="bg-blueee-500 dark:bg-emerald-500 text-blaq-1000 w-fit"
                  as="a"
                  href={post.link}
                  target="_blank"
                >
                  Read on Medium <i className="fa-brands fa-medium ml-2"></i>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
