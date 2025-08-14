import Blogs from "./Blogs";
import { useState, useEffect } from "react"; // Importing React hooks

const Secondary_Home = () => {
  const [blogs, setBlogs] = useState([
    { id: 1, title: "My new website", body: "lorem ipsum...", author: "mario" },
    { id: 2, title: "Welcome party!", body: "lorem ipsum...", author: "yoshi" },
    {
      id: 3,
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
    },
  ]);

  useEffect(() => {
    console.log("Secondary Home component mounted.");
  }, []);

  // Function for Deleting a Blog from the list
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      <Blogs blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
    </div>
  );
};

export default Secondary_Home;
