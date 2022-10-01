import { param } from 'jquery';
import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './ShowResult.css';
const url = 'https://amazoncloneserver.herokuapp.com/products_match';
function SearchResult(props) {
  let [products, setProducts] = useState("");
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
               in place of 'smooth' */
    });
  };
  useEffect(() => {
    scrollToTop();
  }, []);
  useEffect(() => {
    fetch(`${url}/${props.match.params.category}`, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [props.match.params]);
  return (
    <>
      <h1 className="top-search-result">{products.length} result for {props.match.params.category}</h1>
      <div className="container">
        {products.length === 0 ? (
          <h1>No match found</h1>
        ) : (
          products.map((item, i) => (
            <div className="imgCard" key={i}>
              <img src={item.images.img1.link} alt="img" className="imgInCard" />
              <h2 className="dis">{item.name}</h2>
              <div className="rating">
                Rating: {item.rating}{" "}
                <i className="bi bi-star-fill colorGold"></i>
              </div>
              <div className="price">Price : ₹ {item.cost}</div>
            </div>
          ))
        )}
      </div>
    </>
  )
}
export default withRouter(SearchResult);