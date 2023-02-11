import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Edit from "./pages/Edit";
import Index from "./pages/Index";
import Show from "./pages/Show";
import New from "./pages/New";
import Welcome from "./pages/Welcome";
import EditCar from "./pages/EditCar";
import EditCollection from "./pages/EditCollection";
import "./assets/blank-script.otf";

function App() {
  return (
    // <div className="App bg-gradient-to-r from-purple-500 to-pink-500 w-full min-h-screen ">
    <div className="App w-full min-h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/index" element={<Index />} />
          <Route path="/new" element={<New />} />
          <Route path="/show/:id" element={<Show />} />
          <Route path="/cars/:id/edit" element={<EditCar />} />
          <Route path="/collections/:id/edit" element={<EditCollection />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
