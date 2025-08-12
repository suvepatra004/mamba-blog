import Navbar from "./Navbar";
import Home from "./Home";
import Blogs from "./Blogs";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <div className="content">
          <Home />
          <Blogs />
        </div>
      </div>
    </div>
  );
}

export default App;
