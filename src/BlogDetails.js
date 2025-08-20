import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();

  return (
    <div class="blog-details">
      <h2>Blog Details of {id}</h2>
    </div>
  );
};

export default BlogDetails;
