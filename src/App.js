import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Salo from "./Salo";
import Service from "./Service";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Salo />} />
          <Route path="services/:service" element={<Service />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
