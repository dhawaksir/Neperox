import React from 'react';
import './blog.css'; // Import the CSS file

const BlogPage = () => {
  // Placeholder data for blog posts
  const blogPosts = [
    {
      title: "HyperX Fury 8GB 3000MHz DDR4 Price in Nepal",
      image: "hyperx-fury.jpg",
      content: "HyperX Fury 8GB DDR4 features an updated heat spreader and speeds up to 3466MHz for a stylish performance boost. FURY DDR4’s XMP-ready and available in 2400MHz–3466MHz speeds, CL15–16 latencies, 8GB and 16GB single module capacities, and 16GB–64GB...",
      date: "May 30, 2022",
      category: "PC Components, RAM"
    },
    {
      title: "HONOR Magic Watch Reviews and Price in Nepal",
      image: "honor-magic-watch.jpg",
      content: "HONOR MAGIC WATCH is the luxurious craftsmanship smartwatch that is designed and developed by Honor company. The release date of MAGIC WATCH was in November 2018 by HONOR company in the market of smartwatches. now, let’s walk...",
      date: "May 30, 2022",
      category: "HONOR, SMARTWATCH"
    },
    // Add more blog posts here...
  ];

  return (
    <section className="blog-page">
      <div className="container">
        <h2>Latest Blog Posts</h2>

        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <div className="blog-post" key={index}>
              <div className="blog-post-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-post-details">
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                <div className="blog-post-meta">
                  <span className="blog-post-date">{post.date}</span>
                  <span className="blog-post-category">{post.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogPage;
