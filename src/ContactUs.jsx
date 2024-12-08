import React, { useState } from 'react';
import backgroundImage from "./assets/images/background/19.jpg"

const ContactUs = () => {
    const [formData, setFormData] = useState({
        username: '',
        phone: '',
        company: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };

    return (
        <>
            {/*Page Title*/}
            <section className="page-title" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="auto-container">
                    <div className="inner-container clearfix">
                        <div className="title-box">
                            <h1>Contact Us</h1>
                            <span className="title">"Reach Out - We're Here To Help You"</span>
                        </div>
                        <ul className="bread-crumb clearfix">
                            <li><a href="index-2.html">Home</a></li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
            </section>
            {/*End Page Title*/}


            <section className="contact-page-section">
                <div className="auto-container">
                    <div className="row">
                        {/* Form Column */}
                        <div className="form-column ">
                            <div className="inner-column">
                                <div className="">
                                    <h2>Contact Us</h2>
                                </div>
                                <div className="contact-form row" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <form onSubmit={handleSubmit} className='col-sm-7' id="contact-form">
                                        <div className="row">
                                            <div className="form-group col-lg-6 col-md-12 col-sm-12">
                                                <input
                                                    type="text"
                                                    name="username"
                                                    placeholder="Name"
                                                    pattern='[^[A-Za-z\s\.]+$]'
                                                    required
                                                    value={formData.username}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="form-group col-lg-6 col-md-12 col-sm-12">
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    placeholder="Phone"
                                                    required
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="form-group col-lg-6 col-md-12 col-sm-12">
                                                <input
                                                    type="text"
                                                    name="company"
                                                    placeholder="Company"
                                                    value={formData.company}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="form-group col-lg-6 col-md-12 col-sm-12">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                <textarea
                                                    name="message"
                                                    placeholder="Message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                ></textarea>
                                            </div>

                                            <div className="form-group col-lg-12 col-md-12 col-sm-12">
                                                <button className="theme-btn btn-style-three" type="submit">
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="iframe col-sm-5">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14477.256537922056!2d67.1518249!3d24.8872643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339999415e0c3%3A0x36742eee0fd9c291!2sAptech%20Metro%20Star%20Gate!5e0!3m2!1sen!2s!4v1726731836522!5m2!1sen!2s" width={"100%"} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                    </div>
                                </div>

                                <div className="contact-info">
                                    <div className="row">
                                        <div className="info-block col-lg-4 col-md-4 col-sm-12">
                                            <div className="inner">
                                                <h4>Location</h4>
                                                <p>Aptech Metro Star Gate, Shah Faisal Colony Flyover, Faisal Cantonment, Karachi City, Sindh</p>
                                            </div>
                                        </div>

                                        <div className="info-block col-lg-4 col-md-4 col-sm-12">
                                            <div className="inner">
                                                <h4>Call Us</h4>
                                                <p>+92 165 358 5678</p>
                                                <p>+92 165 358 5678</p>
                                            </div>
                                        </div>

                                        <div className="info-block col-lg-4 col-md-4 col-sm-12">
                                            <div className="inner">
                                                <h4>Email</h4>
                                                <p><a href="mailto:support@Homestyler.com">support@Homestyler.com</a></p>
                                                <p><a href="mailto:info@Homestyler.com">info@Homestyler.com</a></p>
                                            </div>
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default ContactUs;
