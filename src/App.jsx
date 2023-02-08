import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Edit from "./pages/Edit";
import Index from "./pages/Index";
import Show from "./pages/Show";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route paht="/" element={<Welcome />} />
          <Route paht="/index" element={<Index />} />
          <Route paht="/show" element={<Show />} />
          <Route paht="/edit" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
