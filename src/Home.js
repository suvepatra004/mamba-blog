import { useState } from "react";
import Age from "./Age"; // Importing the Age component
import Blogs from "./Blogs"; // Importing the Blogs component

const Home = () => {
  // Properly initialized blogs state as an array of objects
  const [blogs] = useState([
    { id: 1, title: "My new website", body: "lorem ipsum...", author: "mario" },
    { id: 2, title: "Welcome party!", body: "lorem ipsum...", author: "yoshi" },
    {
      id: 3,
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
    },
  ]);

  const handleClick = () => {
    console.log("Check Mate!");
  };

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

  return (
    <div>
      <div className="container-1">
        <h1>Welcome to the Rative Blog</h1>
        <button onClick={handleClick} className="home-btn">
          Click Here
        </button>
        <button onClick={() => handleNewClick("Suvendu")} className="home-btn">
          New Click
        </button>

        {/* Using the 'useState' hook for changing the name after clicking the button. */}
        <button onClick={changeName} className="home-btn">
          Change Details
        </button>
      </div>
      <div className="container-2">
        <Age name={name} age={age} />
      </div>
      <div className="container-3">
        <Blogs blogs={blogs} title="All Blogs Lists" />

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
