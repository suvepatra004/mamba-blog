import { useState, useEffect } from "react";
import Age from "./Age"; // Importing the Age component
import Blogs from "./Blogs"; // Importing the Blogs component

const Home = () => {
  // Properly initialized blogs state as an array of objects
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

  // State for author name
  const [author, setAuthor] = useState("mario");

  // Function for handling button clicks
  const handleClick = () => {
    console.log("Check Mate!");
  };

  // Function for handling new click with a dynamic name
  // This function can be used to greet a user or perform an action based on the name
  const handleNewClick = (name) => {
    console.log(`Hello ${name}, welcome to the Rative Blog!`);
  };

  // Function for using "useState" hook
  const [name, setName] = useState("Rative");
  const [age, setAge] = useState(25);

  const changeName = () => {
    setName("Suvendu");
    setAge(50);
  };

  // Function for Deleting a Blog from the list
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  // Using useEffect to log the blogs state whenever it changes
  // After every render, this function will trigger and log the current blogs state
  // If I add a 'dependency' then it will only run when that dependency changes
  useEffect(() => {
    console.log("useEffect re-renders.");
    console.log(author);
  }, [author]);

  // ----------------- Components Returns -----------------
  return (
    <div>
      <div className="container">
        <h1>Welcome to the Rative Blog</h1>

        {/* Buttons to be used Later */}
        {/* <button onClick={handleClick} className="home-btn">
          Click Here
        </button>
        <button onClick={() => handleNewClick("Suvendu")} className="home-btn">
          New Click
        </button> */}

        {/* Using the 'useState' hook for changing the name after clicking the button. */}
        {/* <button onClick={changeName} className="home-btn">
          Change Details
        </button> */}
      </div>
      <div className="container">{/* <Age name={name} age={age} /> */}</div>
      <div className="container">
        {/* Displaying the Age component with dynamic values */}
        <Blogs
          blogs={blogs}
          title="All Blogs Lists"
          handleDelete={handleDelete}
        />

        {/* Filtering blogs by author 'mario' and passing to Blogs component */}
        <Blogs
          blogs={blogs.filter((blogs) => blogs.author === "mario")}
          title="Mario's Blogs Lists"
        />
      </div>
    </div>
  );
};

export default Home;

/**
 * This is a simple Home component that displays a welcome message and a button.
 * When the button is clicked, it logs a message to the console.
 *
 * >> When I used the dynamic value in OnClick event as 'handleClick' then it would display the message in console after clicking the button.
 * >> If I used the static value 'handleClick()' then it would display the message in console immediately after rendering the component.
 */
