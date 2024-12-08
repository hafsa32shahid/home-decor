import React from 'react'
import tea1 from "../assets/images/background/team-1.webp"
import tea2 from "../assets/images/background/team2.jpg"
import tea3 from "../assets/images/background/team3.jpg"
function Team() {
  return (
    <div>
 {/* Team Section */}
<section className="team-section">
  <div className="auto-container">
    <div className="sec-title">
      <span className="float-text">Our Team</span>
      <h2>Profect Expert</h2>
    </div>
    <div className="row clearfix">
      {/* Team Block */}
      <div className="team-block col-lg-4 col-md-6 col-sm-12">
        <div className="inner-box">
          <div className="image-box">
            <div className="image"><a href="team.html"><img src={tea1} alt /></a></div>
            <ul className="social-links">
              <li><a href="#"><i className="fa fa-facebook" /></a></li>
              <li><a href="#"><i className="fa fa-twitter" /></a></li>
              <li><a href="#"><i className="fa fa-google-plus" /></a></li>
              <li><a href="#"><i className="fa fa-instagram" /></a></li>
              <li><a href="#"><i className="fa fa-whatsapp" /></a></li>
            </ul>
            <h3 className="name"><a href="team.html">Scott Grey</a></h3>
          </div>
          <span className="designation">Interior Designer</span>
        </div>
      </div>
      {/* Team Block */}
      <div className="team-block col-lg-4 col-md-6 col-sm-12">
        <div className="inner-box">
          <div className="image-box">
            <div className="image"><a href="team.html"><img src={tea2} alt /></a></div>
            <ul className="social-links">
              <li><a href="#"><i className="fa fa-facebook" /></a></li>
              <li><a href="#"><i className="fa fa-twitter" /></a></li>
              <li><a href="#"><i className="fa fa-google-plus" /></a></li>
              <li><a href="#"><i className="fa fa-instagram" /></a></li>
              <li><a href="#"><i className="fa fa-whatsapp" /></a></li>
            </ul>
            <h3 className="name"><a href="team.html">Russel Reed</a></h3>
          </div>
          <span className="designatiion">Project Manager</span>
        </div>
      </div>
      {/* Team Block */}
      <div className="team-block col-lg-4 col-md-6 col-sm-12">
        <div className="inner-box">
          <div className="image-box">
            <div className="image"><a href="team.html"><img src={tea3} alt /></a></div>
            <ul className="social-links">
              <li><a href="#"><i className="fa fa-facebook" /></a></li>
              <li><a href="#"><i className="fa fa-twitter" /></a></li>
              <li><a href="#"><i className="fa fa-google-plus" /></a></li>
              <li><a href="#"><i className="fa fa-instagram" /></a></li>
              <li><a href="#"><i className="fa fa-whatsapp" /></a></li>
            </ul>
            <h3 className="name"><a href="team.html">Cheryl Ray</a></h3>
          </div>
          <span className="designatiion">Interior Designer</span>
        </div>
      </div>
    </div>
  </div>
</section>
{/*End Team Section */}

    </div>
  )
}

export default Team
