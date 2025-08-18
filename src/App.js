import Navbar from "./Navbar";
import Home from "./Home";
import SecondaryHome from "./SecondaryHome";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from "./Create";

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      {/* Using future features of v7 of React Router to eliminate the warning in browser console*/}
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/secondary" element={<SecondaryHome />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
