import React from 'react'

function Offer() {
  return (
    <div>
       {/* Offer Section */}
<section className="offer-section" >
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

    </div>
  )
}

export default Offer
