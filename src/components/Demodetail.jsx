import React from 'react'
import bgImg from "../assets/images/background/14.jpg"
function Demodetail() {
  return (
    <div>
<div>
  {/*Page Title*/}
  <section className="page-title" style={{backgroundImage: `url(${bgImg})`}}>
    <div className="auto-container">
      <div className="inner-container clearfix">
        <div className="title-box">
          <h1>Shop Single</h1>
          <span className="title">The Interior speak for themselves</span>
        </div>
        <ul className="bread-crumb clearfix">
          <li><a href="index-2.html">Home</a></li>
          <li>{name}</li>
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
                    <figure className="image-box"><a href="images/resource/products/10.jpg" className="lightbox-image" title="Image Caption Here"><img src="images/resource/products/10.jpg" alt /></a></figure>
                  </div>
                  <div className="info-column col-md-6 col-sm-12">
                    <div className="details-header">
                      <h4>Patient Ninja</h4>
                      <div className="rating">
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                      </div>
                      <a className="reviews" href="#">( 3 Customer Reviews )</a>
                      <div className="item-price">$35.00</div>
                    </div>
                    <div className="text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing</div>
                    <div className="other-options clearfix">
                      <div className="item-quantity"><input className="quantity-spinner" type="text" defaultValue={2} name="quantity" /></div>
                      <button type="button" className="theme-btn btn-style-one add-to-cart">Add To Cart</button>
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
                  <ul className="tab-btns tab-buttons clearfix">
                    <li data-tab="#prod-details" className="tab-btn">Descripton</li>
                    <li data-tab="#prod-reviews" className="tab-btn active-btn">Review (3)</li>
                  </ul>
                  {/*Tabs Container*/}
                  <div className="tabs-content">
                    {/*Tab*/}
                    <div className="tab" id="prod-details">
                      <div className="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                      </div>
                    </div>
                    {/*Tab*/}
                    <div className="tab active-tab" id="prod-reviews">
                      <h2 className="title">3 Reviews For Patient Ninja</h2>
                      {/*Reviews Container*/}
                      <div className="comments-area style-two">
                        {/*Comment Box*/}
                        <div className="comment-box">
                          <div className="comment">
                            <div className="author-thumb"><img src="images/resource/author-6.jpg" alt /></div>
                            <div className="comment-inner">
                              <div className="comment-info clearfix">James Koster <span>June 7’2013:</span></div>
                              <div className="rating">
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                <span className="fa fa-star light" />
                              </div>
                              <div className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</div>
                            </div>
                          </div>
                        </div>
                        {/*Comment Box*/}
                        <div className="comment-box reply-comment">
                          <div className="comment">
                            <div className="author-thumb"><img src="images/resource/author-7.jpg" alt /></div>
                            <div className="comment-inner">
                              <div className="comment-info clearfix">Cobus Besten <span>June 7’2013:</span></div>
                              <div className="rating">
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                              </div>
                              <div className="text">Lorem Ipsum is simply dummy text of the printing </div>
                            </div>
                          </div>
                        </div>
                        {/*Comment Box*/}
                        <div className="comment-box">
                          <div className="comment">
                            <div className="author-thumb"><img src="images/resource/author-8.jpg" alt /></div>
                            <div className="comment-inner">
                              <div className="comment-info clearfix">Magnus <span>June 7’2013:</span></div>
                              <div className="rating">
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                                <span className="fa fa-star" />
                              </div>
                              <div className="text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Comment Form */}
                      <div className="shop-comment-form"> 
                        <h2>Add A REVIEW</h2>
                        <div className="mail-text"><span className="theme_color">Your email address will not be published.</span> Required fields are marked*</div>
                        <div className="rating-box">
                          <div className="text"> Your Rating:</div>
                          <div className="rating">
                            <a href="#"><span className="fa fa-star" /></a>
                          </div>
                          <div className="rating">
                            <a href="#"><span className="fa fa-star" /><span className="fa fa-star" /></a>
                            <a href="#" />
                          </div>
                          <div className="rating">
                            <a href="#"><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /></a>
                          </div>
                          <div className="rating">
                            <a href="#"><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /></a>
                          </div>
                          <div className="rating">
                            <a href="#"><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /></a>
                          </div>
                        </div>
                        <form method="post" action="#">
                          <div className="form-group">
                            <label>Your Review*</label>
                            <textarea name="message" placeholder defaultValue={""} />
                          </div>
                          <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="username" placeholder required />
                          </div>
                          <div className="form-group">
                            <label>Email</label>
                            <input type="text" name="number" placeholder required />
                          </div>
                          <div className="form-group">
                            <button className="theme-btn btn-style-one" type="submit" name="submit-form">SUBMIT</button>
                          </div>
                        </form>  
                      </div>
                    </div>  
                  </div>
                </div>
              </div>
              {/*End Product Info Tabs*/}
            </div>
          </div>
        </div>
        {/*Sidebar Side*/}
        <div className="sidebar-side col-xl-3 col-lg-4 col-md-12">
          <aside className="sidebar">
            {/* Search */}
            <div className="sidebar-widget search-box">
              <form method="post" action="#">
                <div className="form-group">
                  <input type="search" name="search-field" defaultValue placeholder="Search ..." required />
                  <button type="submit"><span className="icon fa fa-search" /></button>
                </div>
              </form>
            </div>
            {/*Blog Category Widget*/}
            <div className="sidebar-widget sidebar-blog-category">
              <div className="sidebar-title">
                <h2>Categories</h2>
                <div className="separater" />
              </div>
              <ul className="cat-list">
                <li className="clearfix"><a href="#">Chemical <span>15</span></a></li>
                <li className="clearfix"><a href="#">Energy <span>23</span></a></li>
                <li className="clearfix active"><a href="#">Industry <span>49</span></a></li>
                <li className="clearfix"><a href="#">Manufacturing <span>32</span></a></li>
                <li className="clearfix"><a href="#">Materials <span>44</span></a></li>
                <li className="clearfix"><a href="#">Uncategorized <span>05</span></a></li>
              </ul>
            </div>
            {/* Price Filters */}
            <div className="sidebar-widget price-filters rangeslider-widget">
              <div className="sidebar-title">
                <h2>Filter By Price</h2>
                <div className="separater" />
              </div>
              <div className="range-slider-one clearfix">
                <div className="price-range-slider" />
                <div className="clearfix">
                  <div className="pull-left">
                    <a href="#" className="theme-btn btn-style-one">Filtter</a>
                  </div>
                  <div className="pull-right">
                    <div className="title">Price:</div>
                    <div className="input"><input type="text" className="property-amount" name="field-name" readOnly /></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Top Related Posts */}
            <div className="sidebar-widget related-posts">
              <div className="sidebar-title">
                <h2>Popular Products</h2>
                <div className="separater" />
              </div>
              <div className="post">
                <figure className="post-thumb"><a href="shop-single.html"><img src="images/resource/products/prod-thumb-1.jpg" alt /></a></figure>
                <h4><a href="shop-single.html">Woo Album #4</a></h4>
                <div className="rating"><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /></div>
                <div className="price">$9.00</div>
              </div>
              <div className="post">
                <figure className="post-thumb"><a href="shop-single.html"><img src="images/resource/products/prod-thumb-2.jpg" alt /></a></figure>
                <h4><a href="shop-single.html">Happy Ninja</a></h4>
                <div className="rating"><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /></div>
                <div className="price">$ 18.00</div>
              </div>
              <div className="post">
                <figure className="post-thumb"><a href="shop-single.html"><img src="images/resource/products/prod-thumb-3.jpg" alt /></a></figure>
                <h4><a href="shop-single.html">Ninja Silhouette</a></h4>
                <div className="rating"><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /><span className="fa fa-star" /></div>
                <div className="price">$20.00</div>
              </div>
            </div>  
          </aside>
        </div>
      </div>
    </div>
  </div>
  {/*End Sidebar Page Container*/}
</div>


    </div>
  )
}

export default Demodetail
