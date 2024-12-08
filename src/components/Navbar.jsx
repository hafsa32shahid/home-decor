import React from "react";
import { Link } from "react-router-dom";
import logo2 from "../assets/images/Home-styler-logo.png";
const Navbar = () => {
  return (
    <div>
      <header className="main-header header-style-two">
        <div className="header-top">
          <div className="auto-container">
            <div className="inner-container clearfix">
              <div className="top-left">
                <ul className="contact-list clearfix">
                  <li>
                    <i className="fa fa-volume-control-phone"></i> Aptech Metro
                    Stargate, karachi
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i>
                    <Link to="#">syedhassanali1569@gmail.com</Link>
                  </li>
                </ul>
              </div>
              <div className="top-right">
                <ul className="social-icon-four clearfix">
                  <li>
                    <Link to="#">
                      <i class="fa-brands fa-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i class="fa-brands fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i class="fa-brands fa-google"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i class="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i class="fa-brands fa-whatsapp"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="header-lower">
          <div className="auto-container">
            <div className="main-box clearfix">
              <div className="logo-box">
                <div className="logo" id="lower-logo">
                  <Link to="/">
                    <img src={logo2} alt="" title="" />
                  </Link>
                </div>
              </div>

              <div className="nav-outer clearfix">
                <nav className="main-menu navbar-expand-md ">
                  <div className="navbar-header">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarSupportedContent"
                      aria-controls="navbarSupportedContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="icon flaticon-menu-button"></span>
                    </button>
                  </div>

                  <div
                    className="collapse navbar-collapse clearfix"
                    id="navbarSupportedContent"
                  >
                    <ul className="navigation clearfix">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li className="dropdown">
                        <Link to="">Design Style</Link>
                        <ul>
                          <li>
                            <Link to="/designStyle/livingRoom">
                              Living Room Styles{" "}
                            </Link>
                          </li>
                          <li>
                            <Link to="/designStyle/bathroom">
                              Bathroom Styles
                            </Link>
                          </li>
                          <li>
                            <Link to="/designStyle/kitchen">
                              Kithchen Styles
                            </Link>
                          </li>
                          <li>
                            <Link to="/designStyle/bedroom">
                              Bedroom Styles
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li class="dropdown has-mega-menu">
                        <Link to="#">Products</Link>
                        <li />
                        <div class="mega-menu">
                          <div class="mega-menu-bar row clearfix">
                            <div class="column col-lg-3 col-md-3 col-sm-12">
                              <h3>
                                <Link to="/catg/Furniture">Furniture</Link>
                              </h3>
                              <ul>
                                <li>
                                  <Link to="">Sofas and Couches</Link>
                                </li>
                                <li>
                                  <Link to="">Chair and Recline</Link>
                                </li>
                                <li>
                                  <Link to="">Tables</Link>
                                </li>
                                <li>
                                  <Link to="">Beds and Metresses</Link>
                                </li>
                                <li>
                                  <Link to="">Storage</Link>
                                </li>
                              </ul>
                            </div>
                            <div class="column col-lg-3 col-md-3 col-sm-12">
                              <h3>
                                <Link to="/catg/Kitchen">Kitchen</Link>
                              </h3>
                              <ul>
                                <li>
                                  <Link to="">Cabinets and Pantries</Link>
                                </li>
                                <li>
                                  <Link to="">Counter tops</Link>
                                </li>
                                <li>
                                  <Link to="">Sinks and Faucets</Link>
                                </li>
                                <li>
                                  <Link to="">Kitchen Island and Carts</Link>
                                </li>
                                <li>
                                  <Link to="">Backsplahes</Link>
                                </li>
                              </ul>
                            </div>
                            <div class="column col-lg-3 col-md-3 col-sm-12">
                              <h3>
                                <Link to="/catg/Lightings">Lightings</Link>
                              </h3>
                              <ul>
                                <li>
                                  <Link to="">Celing Lights</Link>
                                </li>
                                <li>
                                  <Link to="">Wall Lights</Link>
                                </li>
                                <li>
                                  <Link to="">Floor Lamps</Link>
                                </li>
                                <li>
                                  <Link to="">Table Lamps</Link>
                                </li>
                                <li>
                                  <Link to="">Outdoor Lighting</Link>
                                </li>
                              </ul>
                            </div>
                            <div class="column col-lg-3 col-md-3 col-sm-12">
                              <h3>
                                <Link to="/catg/Decor">Decor</Link>
                              </h3>
                              <ul>
                                <li>
                                  <Link to="">Rugs and Carpets</Link>
                                </li>
                                <li>
                                  <Link to="">Curtains and Blinds</Link>
                                </li>
                                <li>
                                  <Link to="">Wall Art and Mirrors</Link>
                                </li>
                                <li>
                                  <Link to="">Cushion and Throws</Link>
                                </li>
                                <li>
                                  <Link to="">Vases And Plant Pots</Link>
                                </li>
                              </ul>
                            </div>
                            <div class="column col-lg-3 col-md-3 col-sm-12">
                              <h3>
                                <Link to="/catg/Bathroom ">Bathroom</Link>
                              </h3>
                              <ul>
                                <li>
                                  <Link to="">Vanities and Cabinets</Link>
                                </li>
                                <li>
                                  <Link to="">Showers and Bathtubs</Link>
                                </li>
                                <li>
                                  <Link to="">Toilets and Bidets</Link>
                                </li>
                                <li>
                                  <Link to="">Bathroom Sinks</Link>
                                </li>
                                <li>
                                  <Link to="">
                                    Mirror and Medicine Cabinets
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/gallery">Gallery</Link>
                      </li>
                      <li>
                        <Link to="/review">Review</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                      <li>
                        <Link to="/feedback">Feedback</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
                {/* Outer Box*/}
                <div className="outer-box">
                  {/*Search Box*/}
                  {/* <div className="search-box-outer">
                    <div className="dropdown">
                      <button
                        className="search-box-btn dropdown-toggle"
                        type="button"
                        id="dropdownMenu3"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="fa fa-search" />
                      </button>
                      <ul
                        className="dropdown-menu pull-right search-panel"
                        aria-labelledby="dropdownMenu3"
                      >
                        <li className="panel-outer">
                          <div className="form-container">
                            <form method="post" action="#">
                              <div className="form-group">
                                <input
                                  type="search"
                                  name="field-name"
                                  defaultValue
                                  placeholder="Search Here"
                                  required
                                />
                                <button type="submit" className="search-btn">
                                  <span className="fa fa-search" />
                                </button>
                              </div>
                            </form>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky-header">
          <div className="auto-container clearfix">
            <div className="logo pull-left">
              <Link to="/" title="">
                <a href="" className="display-5 fw-bold">
                  HomeStyler.
                </a>
              </Link>
            </div>
            <div className="pull-right">
              <nav className="main-menu">
                <div className="navbar-collapse show collapse clearfix">
                  <ul className="navigation clearfix">
                    <li className="current dropdown">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="dropdown">
                      <Link to="">Design Style</Link>
                      <ul>
                          <li>
                            <Link to="/designStyle/livingRoom">
                              Living Room Styles{" "}
                            </Link>
                          </li>
                          <li>
                            <Link to="/designStyle/bathroom">
                              Bathroom Styles
                            </Link>
                          </li>
                          <li>
                            <Link to="/designStyle/kitchen">
                              Kithchen Styles
                            </Link>
                          </li>
                          <li>
                            <Link to="/designStyle/bedroom">
                              Bedroom Styles
                            </Link>
                          </li>
                        </ul>
                    </li>
                    <li class="dropdown has-mega-menu">
                      <Link to="#">Products</Link>
                      <li />
                      <div class="mega-menu">
                        <div class="mega-menu-bar row clearfix">
                          <div class="column col-lg-3 col-md-3 col-sm-12">
                            <h3>
                              <Link to="/catg/Furniture">Furniture</Link>
                            </h3>
                            <ul>
                              <li>
                                <Link to="">Sofas and Couches</Link>
                              </li>
                              <li>
                                <Link to="">Chair and Recliners</Link>
                              </li>
                              <li>
                                <Link to="">Tables</Link>
                              </li>
                              <li>
                                <Link to="">Beds and Mattresses</Link>
                              </li>
                              <li>
                                <Link to="">Storage</Link>
                              </li>
                            </ul>
                          </div>
                          <div class="column col-lg-3 col-md-3 col-sm-12">
                            <h3>
                              <Link to="/catg/Kitchen">Kitchen</Link>
                            </h3>
                            <ul>
                              <li>
                                <Link to="">Cabinets and Pantries</Link>
                              </li>
                              <li>
                                <Link to="">Counter tops</Link>
                              </li>
                              <li>
                                <Link to="">Sinks and Faucets</Link>
                              </li>
                              <li>
                                <Link to="">Kitchen Island and Carts</Link>
                              </li>
                              <li>
                                <Link to="">Backsplashes</Link>
                              </li>
                            </ul>
                          </div>
                          <div class="column col-lg-3 col-md-3 col-sm-12">
                            <h3>
                              <Link to="/catg/Lightings">Lightings</Link>
                            </h3>
                            <ul>
                              <li>
                                <Link to="">Celling Lights</Link>
                              </li>
                              <li>
                                <Link to="">Wall Lights</Link>
                              </li>
                              <li>
                                <Link to="">Floor Lamps</Link>
                              </li>
                              <li>
                                <Link to="">Table Lamps</Link>
                              </li>
                              <li>
                                <Link to="contact.html">Outdoor Lighting</Link>
                              </li>
                            </ul>
                          </div>
                          <div class="column col-lg-3 col-md-3 col-sm-12">
                            <h3>
                              <Link to="/catg/Decor">Decor</Link>
                            </h3>
                            <ul>
                              <li>
                                <Link to="">Rugs and Carpets</Link>
                              </li>
                              <li>
                                <Link to="">Curtains and Blinds</Link>
                              </li>
                              <li>
                                <Link to="">Wall Art and Mirrors</Link>
                              </li>
                              <li>
                                <Link to="">Cushion and Throws</Link>
                              </li>
                              <li>
                                <Link to="">Vases And Plant Pots</Link>
                              </li>
                            </ul>
                          </div>
                          <div class="column col-lg-3 col-md-3 col-sm-12">
                            <h3>
                              <Link to="/catg/Bathroom">Bathroom</Link>
                            </h3>
                            <ul>
                              <li>
                                <Link to="">Vanities and Cabinets</Link>
                              </li>
                              <li>
                                <Link to="">Showers and Bathtubs</Link>
                              </li>
                              <li>
                                <Link to="">Toilets and Bidets</Link>
                              </li>
                              <li>
                                <Link to="">Bathroom Sinks</Link>
                              </li>
                              <li>
                                <Link to="">Mirror and Medicine Cabinets</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/gallery">Gallery</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                      <Link to="/feedback">Feedback</Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
