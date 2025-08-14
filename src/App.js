import Navbar from "./Navbar";
import Home from "./Home";
import Secondary_Home from "./Secondary_Home"; // <-- Add this line

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <div className="content">
          <Home />
          <Secondary_Home />
        </div>
      </div>
    </div>
  );
}

export default App;
