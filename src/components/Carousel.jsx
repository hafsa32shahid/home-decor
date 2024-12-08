import React from "react";
import slide1 from "../assets/images/background/21.jpg";
import slide2 from "../assets/images/background/23.jpg";
import slide4 from "../assets/images/background/22.jpg";
import Button from "./Button";

const Carousel = () => {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={slide4} className="d-block w-100" alt="..." style={{background:"transparent"}} />
      {/* <div className="carousel-caption d-none d-md-block">
        <h3>"Bringing Your Vision to Life Through Inspired Interior Design"</h3>
        <p>"At the heart of every beautifully designed home is a unique story. At Hone Styler, we are dedicated to crafting interiors that speak to your individual taste, lifestyle, and aspirations. Whether you're looking for a modern, minimalist aesthetic or a warm, eclectic space, our team of expert designers will work with you to transform your ideas into a living environment that feels both functional and inspiring. Let us help you create a space that not only looks beautiful but truly feels like home."</p>
        <Button/>
      </div> */}
    </div>
    <div className="carousel-item">
      <img src={slide1} className="d-block w-100" alt="..."/>
      {/* <div className="carousel-caption d-none d-md-block">
        <h3>"Bringing Your Vision to Life Through Inspired Interior Design"</h3>
        <p>"At the heart of every beautifully designed home is a unique story. At Hone Styler, we are dedicated to crafting interiors that speak to your individual taste, lifestyle, and aspirations. Whether you're looking for a modern, minimalist aesthetic or a warm, eclectic space, our team of expert designers will work with you to transform your ideas into a living environment that feels both functional and inspiring. Let us help you create a space that not only looks beautiful but truly feels like home."</p>
        <Button/>
      </div> */}
    </div>
    <div className="carousel-item">
      <img src={slide2} className="d-block w-100" alt="..."/>
      {/* <div className="carousel-caption d-none d-md-block">
        <h3>"Bringing Your Vision to Life Through Inspired Interior Design"</h3>
        <p>"At the heart of every beautifully designed home is a unique story. At Hone Styler, we are dedicated to crafting interiors that speak to your individual taste, lifestyle, and aspirations. Whether you're looking for a modern, minimalist aesthetic or a warm, eclectic space, our team of expert designers will work with you to transform your ideas into a living environment that feels both functional and inspiring. Let us help you create a space that not only looks beautiful but truly feels like home."</p>
        <Button/>
      </div> */}
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  );
};

export default Carousel;
