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
      <h2 className="text-4xl sm:text-5xl font-bold">Blog Posts</h2>
      <div className="flex flex-col gap-10 mt-8">
        {blogPosts.map((post, index) => (
          <article key={index} className="border-t border-black pt-6">
            <h3 className="text-2xl font-semibold">{post.title}</h3>
            <p className="text-sm mt-1">
              {post.date} &middot; {post.readTime}
            </p>
            <p className="mt-2 max-w-3xl">{post.description}</p>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="underline mt-3 inline-block"
            >
              Read on Medium
            </a>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
