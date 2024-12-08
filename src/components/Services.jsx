import React from 'react'
import SerImg1 from"../assets/images/resource/service-7.jpg"
import SerImg2 from"../assets/images/resource/service-5.jpg"
import SerImg3 from"../assets/images/resource/service-6.jpg"
import SerImg4 from"../assets/images/resource/service-8.jpg"
function Services() {
    const services = [
        {
          title: "INTERIOR DESIGN",
          img: SerImg2, 
          link: "#"
        },
        {
          title: "COMMERCIAL DESIGN",
          img: SerImg3,
          link: "#"
        },
        {
          title: "LANDSCAPE DESIGN",
          img: SerImg1,
          link: "#"
        },
        {
          title: "KITCHEN DESIGN",
          img: SerImg4,
          link: "#"
        }
      ];
  return (
    <div>
      {/* Specialize Section */}
<section className="specialize-section">
  <div className="auto-container">
    <div className="sec-title">
      <span className="float-text">Services</span>
      <h2>Our Specialization</h2>
    </div>



    <div className="services-container">
      {services.map((service, index) => (
        <div className="service-card" key={index}>
          <img src={service.img} alt={service.title} />
          <h3>{service.title}</h3>
          <a href={service.link}>Read More &raquo;</a>
        </div>
      ))}
    </div>

  </div>
</section>
{/* End Specialize Section */}

    </div>
  )
}

export default Services
