import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Products.css";
import img from "../assets/images/background/17.jpg";
import "./Each-product.css";

const CatgComp = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("name"); // Default sort by name
  const { catg } = useParams();

  useEffect(() => {
    fetch(`/${catg}.json`)
      .then((response) => response.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [catg]);

  // Filter products based on search term
  const filteredProducts = data.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortOption === "price") {
      return a.price - b.price;
    }
    return 0;
  });

  return (
    <div>
      <section
        className="page-title servicecon"
        style={{
          background: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="auto-container">
          <div className="inner-container clearfix">
            <div className="title-box">
              <h1>Service Detail</h1>
              <span className="title">
                "Expert solutions, personalized for your perfect space."
              </span>
            </div>
            <ul className="bread-crumb clearfix">
              <li>
                <Link to="/">Products</Link>
              </li>
              <li>Service Detail</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="search-sort-container">
        <label>SEARCH:</label>
        <input
          type="text"
          placeholder="Search products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="name">Sort by Name</option>
          <option value="price">Sort by Price</option>
        </select>
      </div>

      <div className="product-list">
        {Array.isArray(sortedProducts) &&
          sortedProducts.map((product) => (
            <div key={product.id} className="product-card" style={{ textAlign: "center" }}>
              <img src={product.image} alt={product.name} className="product-image" />
              <h2>{product.name}</h2>
              <p className="product-info">{product.description}</p>
              <p>${product.price.toFixed(2)}</p>
              <Link className="product-button" to={`/detailPage/${catg}/${product.id}`}>
                View Details
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CatgComp;
