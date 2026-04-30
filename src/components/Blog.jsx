import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

const Blog = () => {
  const blogPosts = [
    {
      title: "My First Hackathon",
      description:
        "Exploring my journey and experiences at my first hackathon event, sharing insights and learning outcomes from this exciting challenge.",
      date: "2024",
      link: "https://medium.com/@msahalkc/my-first-hackathon-beff19e8c5aa",
      readTime: "3 min read",
    },
  ];

  return (
    <div id="Blog" className="p-10 sm:px-48 pt-20">
      <FadeIn>
        <h2 className="font-display text-5xl sm:text-6xl tracking-tightest">
          Blog Posts
        </h2>
      </FadeIn>
      <div className="flex flex-col gap-10 mt-10">
        {blogPosts.map((post, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.7,
              delay: index * 0.08,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="border-t border-black pt-6"
          >
            <h3 className="font-display text-2xl sm:text-3xl">{post.title}</h3>
            <p className="text-sm uppercase tracking-wider mt-1">
              {post.date} &middot; {post.readTime}
            </p>
            <p className="mt-3 max-w-3xl leading-relaxed">{post.description}</p>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="link-grow mt-4 inline-block text-sm uppercase tracking-wider"
            >
              Read on Medium &rarr;
            </a>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
