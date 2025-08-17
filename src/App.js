import Navbar from "./Navbar";
import Home from "./Home";
import SecondaryHome from "./SecondaryHome";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/secondary" element={<SecondaryHome />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
