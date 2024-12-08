import React from 'react'
import icon1 from "../assets/images/icons/decor-feat.png"
import icon2 from "../assets/images/icons/feat-icon2.png"
import icon3 from "../assets/images/icons/feat-icon3.png"
function FeatureSec() {
  return (
    <>
   {/* Fun Fact And Features */}
<section className="fun-fact-and-features" >
  <div className="outer-box">
    <div className="auto-container">
      {/* Fact Counter */}
      <div className="fact-counter">
        <div className="row">
          {/*Column*/}
          <div className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp">
            <div className="count-box">
              <div className="count"><span className="count-text" data-speed={5000} data-stop={14}>14</span></div>
              <h4 className="counter-title">Years of <br />Experience</h4>
            </div>
          </div>
          {/*Column*/}
          <div className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
            <div className="count-box">
              <div className="count"><span className="count-text" data-speed={5000} data-stop={237}>237</span></div>
              <h4 className="counter-title">Project <br />Taken</h4>
            </div>
          </div>
          {/*Column*/}
          <div className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="800ms">
            <div className="count-box">
              <div className="count"><span className="count-text" data-speed={5000} data-stop={11}>11</span>K</div>
              <h4 className="counter-title">Twitter <br /> Follower</h4>
            </div>
          </div>
          {/*Column*/}
          <div className="counter-column col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="1200ms">
            <div className="count-box">
              <div className="count"><span className="count-text" data-speed={5000} data-stop={12}>12</span></div>
              <h4 className="counter-title">Awards<br />won</h4>
            </div>
          </div>
        </div>
      </div>
      {/* Features */}
      <div className="features">
        <div className="row">
          {/* Feature Block */}
          <div className="feature-block col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box">
              <div className="icon-box"><img src={icon1} alt="" /></div>
              <h3><a href="service-detail.html">Perfect Design</a></h3>
              <div className="text">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</div>
              <div className="link-box"><a href="service-detail.html">Read More</a></div>
            </div>
          </div>
          {/* Feature Block */}
          <div className="feature-block col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box">
              <div className="icon-box"><img src={icon2} alt="" /></div>
              <h3><a href="service-detail.html">Carefully Planned</a></h3>
              <div className="text">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</div>
              <div className="link-box"><a href="service-detail.html">Read More</a></div>
            </div>
          </div>
          {/* Feature Block */}
          <div className="feature-block col-lg-4 col-md-6 col-sm-12">
            <div className="inner-box">
              <div className="icon-box"><img src={icon3} alt="" /></div>
              <h3><a href="service-detail.html">Smartly Execute</a></h3>
              <div className="text">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.</div>
              <div className="link-box"><a href="service-detail.html">Read More</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/*End Fun Fact Section */}

    </>
  )
}

export default FeatureSec
