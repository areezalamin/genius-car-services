import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Pages/Shared/Header/Header.js";
import Footer from "./Pages/Shared/Footer/Footer.js";
import Services from "./Pages/Home/Services/Services.js";
import About from "./Pages/About/About.js";
import Home from "./Pages/Home/Home/Home.js";
import Login from "./Pages/Login/Login";
import ServiceDetail from "./Pages/Home/ServiceDetail/ServiceDetail";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Register from "./Pages/Register/Register";
import RequireAuth from "./Pages/Shared/RequireAuth/RequireAuth";
import Experts from "./Pages/Home/Experts/Experts";
import CheckOut from "./Pages/Home/CheckOut/CheckOut";
import AddService from "./Pages/AddService/AddService";
import ManageService from "./Pages/ManageService/ManageService";
import { ToastContainer } from "react-toastify";
import Order from "./Pages/Order/Order";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route path="/Services" element={<Services></Services>}></Route>
        <Route
          path="/Service/:ServiceId"
          element={
            <RequireAuth>
              <ServiceDetail></ServiceDetail>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/About"
          element={
            <RequireAuth>
              <About></About>
            </RequireAuth>
          }
        ></Route>

        <Route path="/CheckOut/:ServiceId" element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>

        <Route path="/AddService" element={
          <RequireAuth>
            <AddService></AddService>
          </RequireAuth>
        }></Route>

        <Route path="/ManageService" element={
          <RequireAuth>
            <ManageService></ManageService>
          </RequireAuth>
        }></Route>
        
        <Route path="/order" element={
          <RequireAuth>
            <Order></Order>
          </RequireAuth>
        }></Route>

        <Route path="/Experts" element={<Experts></Experts>}></Route>
        <Route path="/Login" element={<Login></Login>}></Route>
        <Route path="/Register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
