// Not Used till yet because for some reason the Home.js file is not importing this component.
const Age = ({ name, age }) => {
  return (
    <div className="display-age">
      <p>
        {name} is {age} years old!
      </p>
    </div>
  );
};

export default Age;

/**
 * This is a simple Age component that displays the age of a person.
 * It uses destructuring to get the name and age from the Home.js file.
 * >> The component is designed to be used in conjunction with the Home component.
 * >> It displays the age of the person in a paragraph element.
 */
