// import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// const Blog = () => {
//   const [blogPosts, setBlogPosts] = useState([]);

//   useEffect(() => {
//     fetchBlogPosts();
//   }, []);

//   const fetchBlogPosts = async () => {
//     try {
//       const response = await axios.get('/api/blogposts');
//       setBlogPosts(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h1>Blog</h1>
//       {blogPosts.map((post) => (
//         <div key={post._id}>
//           <h2>{post.title}</h2>
//           <p>{post.content}</p>
//           <p>Author: {post.author}</p>
//           <p>Date: {post.createdAt}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Blog;
