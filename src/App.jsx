import Navbar from "./Components/Navbar";
import Registration from "./Components/Registration";
import { Outlet, useLocation } from "react-router-dom"; // import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <Outlet />
      {location.pathname !== "/login" && "/registeration" && <Footer />}
    </>
  );
}

export default App;
