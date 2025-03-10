import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Landseite from "./pages/Landseite";
import RezeptDetail from "./pages/RezeptDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/land/:land" element={<Landseite />} />
        <Route path="/rezept/:id" element={<RezeptDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
