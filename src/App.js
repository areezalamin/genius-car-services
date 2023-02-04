import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Pages/Shared/Header/Header.js";
import Footer from "./Pages/Shared/Footer/Footer.js";
import Services from "./Pages/Home/Services/Services.js";
import About from "./Pages/About/About.js";
import Home from "./Pages/Home/Home/Home.js";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Services" element={<Services></Services>}></Route>
        <Route path="/About" element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
