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

/**
 * ========================= BlogDetails Component ==============
 * This is a simple BlogDetails component that displays the details of a single blog.
 * It fetches the blog data from a given URL using the 'useFetch' custom hook.
 * The blog ID is obtained from the URL parameters using the 'useParams' hook from 'react-router-dom'.
 * The component also provides a delete button to remove the blog, which sends a DELETE request to the server.
 *
 * ========================= Feature Points ==============
 * >> The component uses the 'useFetch' custom hook to fetch the blog data.
 * >> The 'useParams' hook is used to extract the blog ID from the URL.
 * >> The component handles loading and error states while fetching the data.
 * >> The 'handleDelete' function allows the user to delete the blog, sending a DELETE request to the server and navigating back to the home page upon success.
 * >> The 'useNavigate' hook from 'react-router-dom' is used for programmatic navigation.
 */
