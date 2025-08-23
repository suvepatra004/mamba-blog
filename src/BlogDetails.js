import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("http://localhost:8010/blogs/" + id);

  const handleDelete = () => {
    fetch("http://localhost:8010/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && (
        <div className="loading">
          <span>Loading...</span>
        </div>
      )}
      {error && <div className="error-message">{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete} className="delete-btn">
            Delete
          </button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
