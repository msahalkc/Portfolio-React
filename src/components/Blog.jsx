import { motion } from "framer-motion";

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
    <div id="Blog" className="flex flex-col gap-8">
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
          className="border-t border-black pt-6 grid grid-cols-12 gap-4"
        >
          <div className="col-span-12 sm:col-span-3">
            <p className="text-xs uppercase tracking-[0.25em] opacity-70">
              {String(index + 1).padStart(2, "0")} · Essay
            </p>
            <p className="text-xs uppercase tracking-[0.2em] mt-2">
              {post.date} &middot; {post.readTime}
            </p>
          </div>
          <div className="col-span-12 sm:col-span-9">
            <h3 className="font-display text-3xl sm:text-4xl tracking-tightest">
              {post.title}
            </h3>
            <p className="mt-3 max-w-3xl leading-relaxed">{post.description}</p>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="link-grow mt-4 inline-block text-xs uppercase tracking-[0.2em]"
            >
              Read on Medium ↗
            </a>
          </div>
        </motion.article>
      ))}
    </div>
  );
};

export default Blog;
