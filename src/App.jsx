import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import New from "./pages/New";
import Welcome from "./pages/Welcome";
import EditCar from "./pages/EditCar";
import ShowCar from "./pages/ShowCar";
import NotFound from "./pages/NotFound";
import EditCollection from "./pages/EditCollection";
import ShowCollection from "./pages/ShowCollection";
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
          <Route path="/cars/:id" element={<ShowCar />} />
          <Route path="/cars/:id/edit" element={<EditCar />} />
          <Route path="/collections/:id" element={<ShowCollection />} />
          <Route path="/collections/:id/edit" element={<EditCollection />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
