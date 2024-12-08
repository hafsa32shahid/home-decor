import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bgImg from "../assets/images/background/14.jpg";
import "./Each-product.css";
const Eachproductpage = () => {
  const [single, setSingle] = useState("");
  const a = useParams();

  useEffect(() => {
    fetch(`/${a.catg}.json`)
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        // console.log(res);
        let filterProduct = res.find((p) => {
          return p.id == a.id;
        });
        setSingle(filterProduct);
      });
  }, []);
  console.log(single);
  return (
    <>
      {/*Page Title*/}
      <section
        className="page-title"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="auto-container">
          <div className="inner-container clearfix">
            <div className="title-box">
              <h1>{single && single.category.toUpperCase()}</h1>
              <span className="title">The Interior speak for themselves</span>
            </div>
            <ul className="bread-crumb clearfix">
              <li>
                <a href="index-2.html">Home</a>
              </li>
              <li>Single Products</li>
            </ul>
          </div>
        </div>
      </section>
      {/*End Page Title*/}
      {/*Sidebar Page Container*/}
      <div className="sidebar-page-container">
        <div className="auto-container">
          <div className="row clearfix">
            {/*Content Side*/}
            <div className="content-side col-xl-9 col-lg-8 col-md-12">
              <div className="shop-single">
                <div className="product-details">
                  {/*Basic Details*/}
                  <div className="basic-details">
                    <div className="row clearfix">
                      <div className="image-column col-md-6 col-sm-12">
                        <figure className="image-box">
                          <a
                            href="images/resource/products/10.jpg"
                            className="lightbox-image"
                            title="Image Caption Here"
                          >
                            <img src={single.image} alt />
                          </a>
                        </figure>
                      </div>
                      <div className="info-column col-md-6 col-sm-12">
                        <div className="details-header">
                          <h4>{single && single.name.toUpperCase()}</h4>
                          <div className="rating">
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                          </div>
                          <a className="reviews" href="#">
                            ( 3 Customer Reviews )
                          </a>
                          <div className="item-price"></div>
                        </div>
                        <div className="text">{single.description}</div>
                        <div className="other-options clearfix">
                          <div class="input-group quantity-selector">
                            <input
                              type="number"
                              id="inputQuantitySelector"
                              class="form-control"
                              aria-live="polite"
                              data-bs-step="counter"
                              name="quantity"
                              title="quantity"
                              value="0"
                              min="0"
                              max="10"
                              step="1"
                              data-bs-round="0"
                              aria-label="Quantity selector"
                            />
                            <button
                              type="button"
                              class="btn btn-icon btn-secondary"
                              aria-describedby="inputQuantitySelector"
                              data-bs-step="down"
                            >
                              <span class="visually-hidden">Step down</span>
                            </button>
                            <button
                              type="button"
                              class="btn btn-icon btn-secondary"
                              aria-describedby="inputQuantitySelector"
                              data-bs-step="up"
                            >
                              <span class="visually-hidden">Step up</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*Basic Details*/}
                  {/*Product Info Tabs*/}
                  <div className="product-info-tabs">
                    {/*Product Tabs*/}
                    <div className="prod-tabs tabs-box">
                      {/*Tab Btns*/}
                      <div
                        className="tab-btns tab-buttons clearfix"
                        style={{ justifyContent: "space-between", gap: "10px" }}
                      >
                        <button
                          type="button"
                          className="theme-btn btn-style-one add-to-cart"
                          onClick={() => {
                            Swal.fire("Item added to cart");
                          }}
                        >
                          Add To Cart
                        </button>
                        <button
                          type="button"
                          className=" theme-btn btn-style-one"
                          onClick={() => {
                            Swal.fire("Item added to Your");
                          }}
                        >
                          Wishlist
                        </button>
                      </div>
                      {/*Tabs Container*/}
                      <div className="tabs-content">
                        {/*Tab*/}
                        <div className="tab" id="prod-details">
                          <div className="content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure
                              dolor in reprehenderit in voluptate velit esse
                              cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <p>
                              Excepteur sint occaecat cupidatat non proident,
                              sunt in culpa qui officia deserunt mollit anim id
                              est laborum consectetur adipiscing elit, sed do
                              eiusmod tempor incididunt ut labore et dolore
                              magna aliqua. Ut enim ad minim veniam, quis
                              nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure
                              dolor in reprehenderit in voluptate velit esse
                              cillum dolore eu fugiat nulla pariatur. Excepteur
                              sint occaecat cupidatat non proident, sunt in
                              culpa qui officia deserunt mollit anim id est
                              laborum
                            </p>
                          </div>
                        </div>
                        {/*Tab*/}
                        <div className="tab active-tab" id="prod-reviews">
                          <h2 className="title">3 Reviews For Patient Ninja</h2>
                          {/*Reviews Container*/}
                          <div className="comments-area style-two">
                            {/*Comment Box*/}
                            {single &&
                              single.review.map((asd) => {
                                return (
                                  <div className="comment-box">
                                    <div className="comment">
                                      <div className="author-thumb">
                                        <img
                                          src="images/resource/author-6.jpg"
                                          alt
                                        />
                                      </div>
                                      <div className="comment-inner">
                                        <div className="comment-info clearfix">
                                          {asd.name} <span>June 7’2013:</span>
                                        </div>
                                        <div className="rating">
                                          {Array.from(
                                            { length: asd.rating },
                                            (_, index) => {
                                              return (
                                                <span
                                                  key={index}
                                                  className={
                                                    index < asd.rating
                                                      ? "filled-star"
                                                      : "empty-star"
                                                  }
                                                >
                                                  ★
                                                </span>
                                              );
                                            }
                                          )}
                                          {/* <span className="fa fa-star" />
                                          <span className="fa fa-star" />
                                          <span className="fa fa-star" />
                                          <span className="fa fa-star" />
                                          <span className="fa fa-star light" /> */}
                                        </div>
                                        <div className="text">{asd.review}</div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                          </div>
                          {/* Comment Form */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*End Product Info Tabs*/}
                </div>
              </div>
            </div>
            {/*Sidebar Side*/}
          </div>
        </div>
      </div>
      {/*End Sidebar Page Container*/}
    </>
  );
};

export default Eachproductpage;
