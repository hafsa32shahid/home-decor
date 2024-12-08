import React from "react";
import bgImg from "./assets/images/background/14.jpg";
import img1 from "./assets/images/resource/team-1.jpg"
import img2 from "./assets/images/resource/team-2.jpg"
import img3 from "./assets/images/resource/team-3.jpg"
import img4 from "./assets/images/resource/team-4.jpg"
import img5 from './assets/images/resource/team-5.jpg'

function Reviews() {
  return (
    <div>
<div>
  {/*Page Title*/}
  <section className="page-title" style={{backgroundImage: `url(${bgImg})`}}>
    <div className="auto-container">
      <div className="inner-container clearfix">
        <div className="title-box">
          <h1>User Reviews</h1>
          <span className="title">The Interior speak for themselves</span>
        </div>
        <ul className="bread-crumb clearfix">
          <li><a href="index-2.html">Home</a></li>
          <li>User Reviews</li>
        </ul>
      </div>
    </div>
  </section>
  {/*End Page Title*/}
  {/* Team Section */}
  <section className="team-section">
    <div className="auto-container">
      <div className="row clearfix">
        {/* Team Block */}
        <div className="team-block col-lg-4 col-md-6 col-sm-12">
          <div className="inner-box">
            <div className="image-box">
              <div className="image"><a href=""><img src={img1} alt /></a></div>
              {/* <ul class="social-links">
                          <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                          <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                          <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                          <li><a href="#"><i class="fa fa-whatsapp"></i></a></li>
                      </ul> */}
              <h3 className="name"><a href="">Scott Grey</a></h3>
            </div>
            <span className="designation m-auto">
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
            </span>
            <span>I couldn’t be happier with my new living room! HomeStyler made it so easy to find exactly what I was looking for. The furniture is top-notch, and the customer service was excellent. Highly recommended!</span>
          </div>
        </div>
        {/* Team Block */}
        <div className="team-block col-lg-4 col-md-6 col-sm-12">
          <div className="inner-box">
            <div className="image-box">
              <div className="image"><a href=""><img src={img2} alt /></a></div>
              {/* <ul class="social-links">
                          <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                          <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                          <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                          <li><a href="#"><i class="fa fa-whatsapp"></i></a></li>
                      </ul> */}
              <h3 className="name"><a href="">Russel Reed</a></h3>
            </div>
            <span className="designation m-auto">
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
            </span>
            <span>The kitchen collection from HomeStyler is simply amazing! I transformed my entire kitchen with their modern cabinets and countertops. The quality is exceptional, and the design looks straight out of a magazine!</span>
          </div>
        </div>
        {/* Team Block */}
        <div className="team-block col-lg-4 col-md-6 col-sm-12">
          <div className="inner-box">
            <div className="image-box">
              <div className="image"><a href="team.html"><img src={img3} alt /></a></div>
              {/* <ul class="social-links">
                          <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                          <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                          <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                          <li><a href="#"><i class="fa fa-whatsapp"></i></a></li>
                      </ul> */}
              <h3 className="name"><a href="">Cheryl Ray</a></h3>
            </div>
            <span className="designation m-auto">
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
            </span>
            <span>HomeStyler's decor selection is perfect for anyone looking to add a unique touch to their space. I found some beautiful vases and wall art that really brought my living room to life. I’ll definitely be back for more!</span>
          </div>
        </div>
        {/* Team Block */}
        <div className="team-block col-lg-4 col-md-6 col-sm-12">
          <div className="inner-box">
            <div className="image-box">
              <div className="image"><a href=""><img src={img3} alt /></a></div>
              {/* <ul class="social-links">
                          <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                          <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                          <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                          <li><a href="#"><i class="fa fa-whatsapp"></i></a></li>
                      </ul> */}
              <h3 className="name"><a href="">Scott Grey</a></h3>
            </div>
            <span className="designation m-auto">
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star" />
            </span>
            <span>I was blown away by the lighting options at HomeStyler! The chandelier I purchased adds so much elegance to my dining room. The installation was a breeze, and it completely changed the mood of the space.</span>
          </div>
        </div>
        {/* Team Block */}
        <div className="team-block col-lg-4 col-md-6 col-sm-12">
          <div className="inner-box">
            <div className="image-box">
              <div className="image"><a href=""><img src={img4} alt /></a></div>
              {/* <ul class="social-links">
                          <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                          <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                          <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                          <li><a href="#"><i class="fa fa-whatsapp"></i></a></li>
                      </ul> */}
              <h3 className="name"><a href="">Russel Reed</a></h3>
            </div>
            <span className="designation m-auto">
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star" />
            </span>
            <span>HomeStyler helped me design the perfect bathroom. The vanity and mirror I got are stunning, and the quality exceeded my expectations. Now, my bathroom feels like a luxury spa. I can’t wait to remodel other areas of my home!</span>
          </div>
        </div>
        {/* Team Block */}
        <div className="team-block col-lg-4 col-md-6 col-sm-12">
          <div className="inner-box">
            <div className="image-box">
              <div className="image"><a href=""><img src={img5} alt /></a></div>
              {/* <ul class="social-links">
                          <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                          <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                          <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                          <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                          <li><a href="#"><i class="fa fa-whatsapp"></i></a></li>
                      </ul> */}
              <h3 className="name"><a href="">Cheryl Ray</a></h3>
            </div>
            <span className="designation m-auto">
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star checked" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
            </span>
            <span>I’ve been searching for the right furniture for months, and HomeStyler had everything I needed in one place! The delivery was fast, and the pieces are beautiful and comfortable. My home looks stylish and inviting thanks to HomeStyler!</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*End Team Section */}
</div>

    </div>
 
  );
}

export default Reviews;
