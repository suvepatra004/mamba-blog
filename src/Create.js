import React, { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Select Author");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch("http://localhost:8010/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("New Blog Added");
      setIsPending(false);
    });
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form action="" onSubmit={handleSubmit}>
        {/* Form fields for creating a new blog */}
        <label>Blog Title:</label>
        <input
          name="title"
          id="create-blog-title"
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Textarea for blog body */}
        <label>Blog body: </label>
        <textarea
          name="body"
          id="create-blog-body"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        {/* Input for blog author */}
        <label>Blog Author:</label>
        <select
          name="select"
          id="select-author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="default">Select Author</option>
          <option value="Mario">Mario</option>
          <option value="Yoshi">Yoshi</option>
        </select>

        {/* Submit button for the form */}
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding...</button>}
      </form>
    </div>
  );
};

export default Create;
