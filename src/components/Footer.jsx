import React from 'react'
import { Link } from 'react-router-dom'
import ft1 from "../assets/images/gallery/6.jpeg"
import ft2 from "../assets/images/gallery/7.jpeg"
import ft3 from "../assets/images/gallery/8.jpeg"
import ft4 from "../assets/images/gallery/9.jpeg"
import ft5 from "../assets/images/gallery/10.jpeg"
import ft6 from "../assets/images/gallery/5.jpg"


function Footer() {
  return (
    <div>
      {/* Main Footer */}
<footer className="main-footer alternate">
  <div className="auto-container">
    {/*Widgets Section*/}
    <div className="widgets-section">
      <div className="row">
        {/*Big Column*/}
        <div className="big-column col-xl-7 col-lg-12 col-md-12 col-sm-12">
          <div className="row">
            {/*Footer Column*/}
            <div className="footer-column col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div className="footer-widget about-widget">
                <div className="footer-logo">
                  
                    <Link to="/" style={{fontSize:"2rem"}}>Home Styler.</Link>
                  
                </div>
                <div className="widget-content">
                  <div className="text">At Hone Styler, we believe in transforming spaces with creativity and sophistication. From timeless designs to modern aesthetics, we are dedicated to helping you curate a home that reflects your unique style. Contact us for personalized design consultations and explore our wide range of interior décor products.</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        
     
        <div className="big-column col-xl-5 col-lg-12 col-md-12 col-sm-12">
          <div className="row clearfix">
            <div className="footer-column col-xl-5 col-lg-6 col-md-6 col-sm-12">
              <div className="footer-widget links-widget">
                <h2 className="widget-title">Useful links</h2>
                <div className="widget-content">
                  <ul className="list">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">Products</Link>
                    </li>
                    <li>
                        <Link to="/gallery">Gallery</Link>
                    </li>
                    <li>
                      <Link to="/feedback">
                       Feedback
                      </Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/*Footer Column*/}
            <div className="footer-column col-xl-7 col-lg-6 col-md-6 col-sm-12">
              <div className="footer-widget gallery-widget">
                <h2 className="widget-title">Recent Works</h2>
                <div className="widget-content">
                  <div className="outer clearfix">
                   <figure className="image">
                      <Link to="" className="lightbox-image" title="Image Title Here"><img src={ft1}/></Link>
                    </figure> 
                      <figure className="image">
                      <Link to="" className="lightbox-image" title="Image Title Here"><img src={ft2}/></Link>
                    </figure>
                    <figure className="image">
                      <Link to="" className="lightbox-image" title="Image Title Here"><img src={ft3}/></Link>
                    </figure>
                    <figure className="image">
                      <Link to="" className="lightbox-image" title="Image Title Here"><img src={ft4}/></Link>
                    </figure>
                   <figure className="image">
                      <Link to="" className="lightbox-image" title="Image Title Here"><img src={ft5}/></Link>
                    </figure>
                    <figure className="image">
                      <Link to="" className="lightbox-image" title="Image Title Here"><img src={ft6}/></Link>
                    </figure>
                  </div>
                </div>       
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*Footer Bottom*/}
  <div className="footer-bottom">
    <div className="auto-container">
      <div className="inner-container clearfix">
        <div className="social-links">
          <ul className="social-icon-two">
            <li><Link to="#"><i class="fa-brands fa-facebook"></i></Link></li>
            <li><Link to="#"><i class="fa-brands fa-twitter"></i></Link></li>
            <li><Link to="#"><i class="fa-brands fa-google"></i></Link></li>
            <li><Link to="#"><i class="fa-brands fa-instagram"></i></Link></li>
            <li><Link to="#"><i class="fa-brands fa-whatsapp"></i></Link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>
{/* End Main Footer */}

    </div>
  )
}

export default Footer
