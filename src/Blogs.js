const Blogs = ({ blogs = [] }) => {
  return (
    <div>
      {/* Blog Preview Pannel: To see the lists of blogs */}
      <div className="blog-list">
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
/**
 * This is a simple Blogs component that displays a list of blogs.
 * Each blog has a title, body, author, and an ID.
 *
 * >> The blogs are stored in the state using the 'useState' hook.
 * >> The blogs are mapped to display each blog's title and author.
 */
// --- IGNORE ---
// import { useState } from "react"; --- IGNORE ---
// const Blogs = () => { --- IGNORE ---
//   // Sample data for blog-preview --- IGNORE ---
//   const [blogs, setBlogs] = useState([ --- IGNORE ---
//     { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 }, --- IGNORE ---
//     { title: "<Welcome></Welcome>
//     { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 }, --- IGNORE ---
//     { title: "Web dev top tips", body: "lorem ipsum...", author: "mario", id: 3 }, --- IGNORE ---
//   ]); --- IGNORE ---
//   return ( --- IGNORE ---
//     <div> --- IGNORE ---
//       {/* Blog Preview Pannel: To see the lists of blogs */} --- IGNORE
//       <div> --- IGNORE ---
//         {blogs.map((blog) => { --- IGNORE ---
//           <div className="blog-preview" key={blog.id}> --- IGNORE ---
//             <h2>{blog.title}</h2> --- IGNORE ---
//             <p>Written by {blog.author}</p> --- IGNORE ---
//           </div>; --- IGNORE ---
//         })} --- IGNORE ---
//       </div> --- IGNORE ---
//     </div> --- IGNORE ---
//   ); --- IGNORE ---
// }; --- IGNORE ---
// export default Blogs; --- IGNORE ---
// /** * This is a simple Blogs component that displays a list of blogs. --- IGNORE ---
//  * Each blog has a title, body, author, and an ID. --- IGNORE ---
//  * >> The blogs are stored in the state using the 'useState' hook. --- IGNORE ---
//  * >> The blogs are mapped to display each blog's title and author. --- IGNORE ---
//  */ --- IGNORE ---
// --- IGNORE ---
