import { Routes, Route } from "react-router-dom";
import Header from "./components/Navbar";
import Home from "./components/Rockets/Home";
import Missions from "./components/Missions/Missions";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/missions" element={<Missions />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
