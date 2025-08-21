const Create = () => {
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form action="">
        {/* Form fields for creating a new blog */}
        <label for="title">Blog Title:</label>
        <input name="title" id="create-blog-title" type="text" required />

        {/* Textarea for blog body */}
        <label for="body">Blog body: </label>
        <textarea name="body" id="create-blog-body" required></textarea>

        {/* Input for blog author */}
        <label for="select">Blog Author:</label>
        <select name="select" id="select-author">
          <option value="default">Select Author</option>
          <option value="Mario">Mario</option>
          <option value="Yoshi">Yoshi</option>
        </select>

        {/* Submit button for the form */}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Create;
