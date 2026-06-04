import React from "react";
import "./App.css";
import DrawerAppBar from "./Components/DrawerAppBar.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Contact from "./Pages/Contact.jsx";
import About from "./Pages/About.jsx";
import Product from "./Pages/Product/Product.jsx";
import Men from "./Pages/Product/Men.jsx";
import Women from "./Pages/Product/Women.jsx";
import Kids from "./Pages/Product/Kids.jsx";
import NotFound from "./Pages/NotFound.jsx";
import Courses from "./Pages/Courses.jsx";
import CourseDetail from "./Pages/CourseDetail.jsx";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer.jsx";

const App = () => {
  return (
    <div>
      <DrawerAppBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />}>
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="kids" element={<Kids />} />
        </Route>
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
