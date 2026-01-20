import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Agents from "./pages/Agents";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/agents" element={<Agents />} />
    </Routes>
  );
}

export default App;
