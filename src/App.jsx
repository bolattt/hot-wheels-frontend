import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import New from "./pages/New";
import Welcome from "./pages/Welcome";
import EditCar from "./pages/EditCar";
import ShowCar from "./pages/ShowCar";
import NotFound from "./pages/NotFound";
import SignupLogin from "./pages/SignupLogin";
import EditCollection from "./pages/EditCollection";
import ShowCollection from "./pages/ShowCollection";
import PrivateRoutes from "./components/PrivateRoutes";
import "./assets/blank-script.otf";

function App() {
  return (
    // <div className="App bg-gradient-to-r from-purple-500 to-pink-500 w-full min-h-screen ">
    <div className="App min-h-screen w-full">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/index" element={<Index />} exact />
            <Route path="/new" element={<New />} />
            <Route path="/cars/:id" element={<ShowCar />} />
            <Route path="/cars/:id/edit" element={<EditCar />} />
            <Route path="/collections/:id" element={<ShowCollection />} />
            <Route path="/collections/:id/edit" element={<EditCollection />} />
          </Route>

          <Route path="/auth" element={<SignupLogin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
