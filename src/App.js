import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import Registration from "./components/register/Registration";
import Login from "./components/login/Login";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Registration />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
