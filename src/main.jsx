import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import "./index.css";
import Gallery from "./Gallery";
import Feedback from "./Feedback";
import CatgComp from "./components/catgComp";
import ContactUs from "./ContactUs";
import About from "./About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Eachproductpage from "./components/eachproductpage";
import Reviews from "./Reviews";
import DetailDesignStyle from "./components/detailDesignStyle";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/feedback" element={<Feedback />}></Route>
        <Route path="/catg/:catg" element={<CatgComp />}></Route>
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/detailPage/:catg/:id" element={<Eachproductpage />} />
        {/* <Route path="/demoDetail" element={<Eachproductpage/>}/> */}
        <Route path="/review" element={<Reviews />}></Route>
        <Route path="/designStyle/:catg" element={<DetailDesignStyle />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
