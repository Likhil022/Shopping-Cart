import Navbar from "./Components/Navbar/Navbar";
import SideNav from "./Components/SideNav/SideNav";
import Men from "./Pages/Men.jsx";
import Women from "./Pages/Women.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
function App() {
  return (
    <>
      <Navbar />
      <SideNav />
      <div className="px-[10%] mt-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
