import Blogs from "./Blogs";
import { useState, useEffect } from "react"; // Importing React hooks

const Secondary_Home = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    // npx json-server --watch data/ds.json --port 8010 => This command starts a JSON server to serve the data from ds.json file
    fetch("http://localhost:8010/blogs")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  return (
    <div className="home container">
      {blogs && <Blogs blogs={blogs} title="Newly Added Blogs" />}
    </div>
  );
};

export default Secondary_Home;
