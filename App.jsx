import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Book from "./pages/Book";

export default function App() {
  return (
    <>
      <h1>This could be a navbar</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/product/:productID" element={<Product />} />
        <Route path="/book/:bookID" element={<Book />} />
      </Routes>
    </>
  );
}
