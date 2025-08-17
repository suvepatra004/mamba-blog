import Blogs from "./Blogs";
import { useState, useEffect } from "react";

const SecondaryHome = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // npx json-server --watch data/ds.json --port 8010 => This command starts a JSON server to serve the data from ds.json file
    setTimeout(() => {
      fetch("http://localhost:8010/blogs")
        .then((res) => {
          if (!res.ok) {
            throw Error("!! Could not fetch the data from the server");
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000); // Simulating a delay of 1 second before fetching data
  }, []);

  return (
    <div className="home container">
      {error && <div className="error-message">{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <Blogs blogs={blogs} title="Newly Added Blogs" />}
    </div>
  );
};

export default SecondaryHome;
