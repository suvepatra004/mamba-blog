import { useState } from "react";

const Home = () => {
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
        <button onClick={handleNewClick("Suvendu")} className="home-btn">
          New Click
        </button>

        {/* Using the 'useState' hook for changing the name after clicking the button. */}
        <button onClick={changeName} className="home-btn">
          Change Details
        </button>
      </div>
      <div className="container-2">
        <p>
          {name} is {age} years old!
        </p>
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
