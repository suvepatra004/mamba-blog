import React, { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Select Author");

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form action="">
        {/* Form fields for creating a new blog */}
        <label for="title">Blog Title:</label>
        <input
          name="title"
          id="create-blog-title"
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Textarea for blog body */}
        <label for="body">Blog body: </label>
        <textarea
          name="body"
          id="create-blog-body"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        {/* Input for blog author */}
        <label for="select">Blog Author:</label>
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
        <button>Submit</button>

        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
};

export default Create;
