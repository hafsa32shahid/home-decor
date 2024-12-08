import React from "react";
import img1 from "./assets/images/background/22.jpg"

function Gallery() {
  return (
    <div>
      <div>
        {/*Page Title*/}
        <section
          className="page-title"
          style={{ backgroundImage: `url(${img1})` }}
        >
          <div className="auto-container">
            <div className="inner-container clearfix">
              <div className="title-box">
                <h1>Designer Gallery</h1>
                <span className="title">The Interior speak for themselves</span>
              </div>
              <ul className="bread-crumb clearfix">
                <li>
                  <a href="index-2.html">Home</a>
                </li>
                <li>Designer Gallery</li>
              </ul>
            </div>
          </div>
        </section>
        {/*End Page Title*/}
        {/* Gallery Section */}

        <section className="gallery">
          <img src="./imgs-gallery/Designer (1).jpeg" />
          <img src="./imgs-gallery/Designer.jpeg" />
          <img src="./imgs-gallery/Designer (2).jpeg" />
          <img src="./imgs-gallery/Designer (3).jpeg" />
          <img src="./imgs-gallery/Designer (4).jpeg" />
          <img src="./imgs-gallery/Designer (5).jpeg" />
          <img src="./imgs-gallery/Designer (6).jpeg" />
          <img src="./imgs-gallery/Designer (7).jpeg" />
          <img src="./imgs-gallery/Designer (8).jpeg" />
          <img src="./imgs-gallery/Designer (9).jpeg" />
          <img src="./imgs-gallery/Designer (10).jpeg" />
          <img src="./imgs-gallery/Designer (11).jpeg" />
          <img src="./imgs-gallery/Designer (12).jpeg" />
          <img src="./imgs-gallery/Designer (13).jpeg" />
          <img src="./imgs-gallery/Designer (14).jpeg" />
          <img src="./imgs-gallery/Designer (15).jpeg" />
          <img src="./imgs-gallery/Designer (16).jpeg" />
          <img src="./imgs-gallery/Designer (17).jpeg" />
          <img src="./imgs-gallery/Designer (18).jpeg" />
          <img src="./imgs-gallery/Designer (19).jpeg" />
          <img src="./imgs-gallery/Designer (20).jpeg" />
          <img src="./imgs-gallery/Designer (21).jpeg" />
          <img src="./imgs-gallery/Designer (22).jpeg" />
          <img src="./imgs-gallery/Designer (23).jpeg" />
          <img src="./imgs-gallery/Designer (24).jpeg" />
          <img src="./imgs-gallery/Designer (25).jpeg" />
          <img src="./imgs-gallery/Designer (26).jpeg" />
          <img src="./imgs-gallery/Designer (27).jpeg" />
        </section>
      </div>

    </div>
  );
}

export default Gallery;
