const Home = () => {

    const handleClick = () => {
        console.log('Check Mate!');
    };

    return ( 
        <div>
            <h1>Welcome to the Rative Blog</h1>
            <button onClick={handleClick}>Click...</button>
        </div>
    );
}
    
export default Home;

/**
 * This is a simple Home component that displays a welcome message and a button.
 * When the button is clicked, it logs a message to the console.
 * 
 * >> When I used the dynamic value in OnClick event as 'handleClick' then it would display the message in console after clicking the button.
 * >> If I used the static value 'handleClick()' then it would display the message in console immediately after rendering the component.
 */