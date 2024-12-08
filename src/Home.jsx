import React from 'react'
import Carousel from "./components/Carousel";

// import ProductDetail from "./components/DetailProduct";
import FeatureSec from "./components/FeatureSec";
import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import ProductList from "./components/ProductList";
import Services from "./components/services";
import Team from "./components/Team";
function Home() {
  return (
    <div>
        {/* <Navbar /> */}
      <Carousel/>
      <Services/>
      <FeatureSec/>
      <ProductList/>
      <Team/>
      <Offer/>
      {/* <Footer/> */}
    </div>
  )
}

export default Home
