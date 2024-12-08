import React from 'react'
import backgroundImage from './assets/images/background/2.jpg'
import img1 from './assets/images/resource/alphabet-image.png'
import img2 from'./assets/images/resource/image-1.jpg'
import img3 from'./assets/images/background/3.jpg'
import img4 from'./assets/images/background/6.jpg'
import img5 from './assets/images/icons/feat-icon3.png'
import img6 from './assets/images/icons/feat-icon2.png'
import img7 from './assets/images/icons/decor-feat.png'
 const About = () => {
  return (
    <>
  <section className="page-title" style={{backgroundImage: `url(${backgroundImage})`}}>
  <div className="auto-container">
    <div className="inner-container clearfix">
      <div className="title-box">
        <h1>About Us</h1>
        <span className="title">Your Vision, Our Design </span>
      </div>
      <ul className="bread-crumb clearfix">
        <li><a href="index-2.html">Home</a></li>
        <li>About Us</li>
      </ul>
    </div>
  </div>
</section>
<section className="about-section" style={{backgroundImage: `url(${img1})`}}>
  <div className="auto-container">
    <div className="row no-gutters">
      {/* Image Column */}
      <div className="image-column col-lg-6 col-md-12 col-sm-12">
        <div className="inner-column">
          <div className="title-box wow fadeInLeft" data-wow-delay="1200ms">
            <h2>ABOUT <br /> US</h2>
          </div>
          <div className="image-box wow fadeInRight" data-wow-delay="600ms">
            {/* <figure className="alphabet-img"><img src={img1} alt /></figure> */}
            <figure className="image"><img src={img2} alt /></figure>
          </div>
        </div>
      </div>
      {/* Content Column */}
      <div className="content-column col-lg-6 col-md-12 col-sm-12">
        <div className="inner-column wow fadeInLeft">
          <div className="content-box">
            <div className="title">
              <h2>Bringing beauty<br />to every corner</h2>
            </div>
            <div className="text">Welcome to Home Styler, where we believe that every home tells a story. With a passion for design and a keen eye for detail, we specialize in creating beautiful, functional spaces that reflect your unique style. Our team is dedicated to transforming your vision into reality, ensuring that your home is not just a place to live, but a sanctuary to thrive.<br />Let us help you bring your dream home to life!</div>
            <div className="link-box"><a href="about.html" className="theme-btn btn-style-one">About Us</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="fun-fact-and-features alternate" style={{backgroundImage:`url(${img3})`}}>
  <div className="outer-box">
    {/* Features */}
  
    <div className="features">
      <div className="row">
        {/* Feature Block */}
        <div className="feature-block col-lg-4 col-md-6 col-sm-12">
          <div className="inner-box">
            <div className="icon-box"><img src={img7} alt="" /></div>
            <h3><a href="">Perfect Design</a></h3>
            <div className="text">Perfect design harmonizes beauty and function, creating inspiring spaces that reflect your unique style. Thoughtful choices in color, texture, and furnishings transform your home into a welcoming sanctuary.</div>
            <div className="link-box"><a href="">Read More</a></div>
          </div>
        </div>
        {/* Feature Block */}
        <div className="feature-block col-lg-4 col-md-6 col-sm-12">
          <div className="inner-box">
            <div className="icon-box"><img src={img6} alt="" /></div>
            <h3><a href="">Carefully Planned</a></h3>
            <div className="text">Carefully planned interior decor transforms Every is thoughtfully considered to comfort. This approach creates an inviting atmosphere that truly reflects your unique style.</div>
            <div className="link-box"><a href="">Read More</a></div>
          </div>
        </div>
        {/* Feature Block */}
        <div className="feature-block col-lg-4 col-md-6 col-sm-12">
          <div className="inner-box">
            <div className="icon-box"><img src={img5} alt="" /></div>
            <h3><a href="">Smartly Execute</a></h3>
            <div className="text">Smartly executed interior decor combines beauty optimized each space for style. Thoughtful layouts and versatile furnishings enhance everyday living, creating an inviting atmosphere that reflects your unique vision.</div>
            <div className="link-box"><a href="">Read More</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

       
{/* Process Section */}
<section className="process-section" >
  <div className="auto-container">
    <div className="sec-title light">
      <span className="float-text">HOW WE WORK</span>
      <h2>Proven Process</h2>
    </div>
    <div className="row">
      {/* Process Block */}
      <div className="process-block col-lg-3 col-md-6 col-sm-12">
        <div className="inner-box">
          <span className="count">01</span>
          <h4><a href="">Concept</a></h4>
          <div className="text">Home Styler helps you create stylish, personalized spaces with curated decor and design inspiration.</div>
          <div className="link-box"><a href="">Read More</a></div>
        </div>
      </div>
      {/* Process Block */}
      <div className="process-block col-lg-3 col-md-6 col-sm-12">
        <div className="inner-box">
          <span className="count">02</span>
          <h4><a href="">Idea</a></h4>
          <div className="text">Home Styler is your go-to platform for transforming homes with curated design solutions and stylish decor inspiration.</div>
          <div className="link-box"><a href="">Read More</a></div>
        </div>
      </div>
      {/* Process Block */}
      <div className="process-block col-lg-3 col-md-6 col-sm-12">
        <div className="inner-box">
          <span className="count">03</span>
          <h4><a href="">Design</a></h4>
          <div className="text">Home Styler features a sleek, minimalist design with curated decor collections and personalized styling tools.</div>
          <div className="link-box"><a href="">Read More</a></div>
        </div>
      </div>
      {/* Process Block */}
      <div className="process-block col-lg-3 col-md-6 col-sm-12">
        <div className="inner-box">
          <span className="count">04</span>
          <h4><a href="service-detail.html">excecution</a></h4>
          <div className="text">Home Styler executes with a clean interface, seamlessly integrating product showcases, and easy shopping functionality.</div>
          <div className="link-box"><a href="">Read More</a></div>
        </div>
      </div>
    </div>
  </div>
</section>
{/*End Process Section */}

{/* Offer Section */}
<section className="offer-section" style={{backgroundImage:`url(${img4})`}}>
  <div className="auto-container">
    <div className="row">
      <div className="content-column col-lg-6 col-md-12 col-sm-12">
        <div className="inner-column">
          <span className="title">Special Offer</span>
          <h2><span>How to save </span> <br />of money on repairs</h2>
          <span className="discount">50%</span>
          <div className="text">Fill out the form to download a book with 10 tips<br /> on how to save your money</div>
        </div>
      </div> 
      <div className="form-column order-last col-lg-6 col-md-12 col-sm-12">
        <div className="inner-column">
          <div className="discount-form">
            {/*Comment Form*/}
            <form method="post" action="#">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                  <input type="text" name="username" placeholder="Name" required />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                  <input type="email" name="email" placeholder="Email" required />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                  <input type="text" name="phone" placeholder="Phone" required />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                  <textarea name="message" placeholder="Massage" defaultValue={""} />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 form-group text-center">
                  <button className="theme-btn btn-style-one" type="submit" name="submit-form">send Now</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div> 
    </div>
  </div>
</section>
{/*End Offer Section */}





    </>
  )
}
export default About;
