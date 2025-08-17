import Blogs from "./Blogs";
// import { useState, useEffect } from "react";
import useFetch from "./useFetch";

const SecondaryHome = () => {
  // Fetching blogs data from useFetch hook
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8010/blogs");

  return (
    <div className="home container">
      {error && <div className="error-message">{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <Blogs blogs={blogs} title="Newly Added Blogs" />}
    </div>
  );
};

export default SecondaryHome;
