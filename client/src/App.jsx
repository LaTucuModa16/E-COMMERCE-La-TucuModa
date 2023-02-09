import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import Detail from "./components/Details/Detail.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About/About";
import Contact from "./components/Contactos/Contact";
import Login from "./components/Auth/Login";

import CreateForm from "./components/CreateForm/CreateForm";

import Register from "./components/Auth/Register.jsx";
import CartShop from "./components/CartShop/CartShop";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/cart" element={<CartShop />} />

          <Route path="/form" element={<CreateForm />} />

          <Route path="/register" element={<Register />} />

          <Route path="/login" element={<Login />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
