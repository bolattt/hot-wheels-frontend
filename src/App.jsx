import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Edit from "./pages/Edit";
import Index from "./pages/Index";
import Show from "./pages/Show";
import New from "./pages/New";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <div className="App bg-gradient-to-r from-purple-500 to-pink-500 w-full min-h-screen ">
      {/* px-16 pt-36 pb-24 */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/index" element={<Index />} />
          <Route path="/show" element={<Show />} />
          <Route path="/new" element={<New />} />
          <Route path="/cars/edit" element={<Edit />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
