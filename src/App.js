import Navbar from "./Navbar";
import Home from "./Home";
import SecondaryHome from "./SecondaryHome";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <div className="content">
          <Home />
          <SecondaryHome />
        </div>
      </div>
    </div>
  );
}

export default App;
