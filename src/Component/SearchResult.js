import { param } from 'jquery';
import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './ShowResult.css';
import '../myCss.css';
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
      <h4 className="top-search-result">{products.length} result for {props.match.params.category}</h4>
      <div className='grid-display'>
        <div className="filter">
          <h2>This is filter coloumns</h2>
        </div>
        <div className="products-display">
          {products.length === 0 ? (
            <h1>No match found</h1>
          ) : (
            products.map((item, i) => (
              <Link to={`/details/:${item.id}`}>
                <div className="imgCard" key={i}>
                  <img src={item.images.img1.link} alt="img" className="imgInCard" />
                  <h3 className="dis">{item.name}</h3>
                  <div className="rating">
                    Rating: {item.rating}{" "}
                    <i className="bi bi-star-fill colorGold"></i>
                  </div>
                  <div className="price">Price : ₹ {item.cost}</div>
                </div>
              </Link>
            ))
          )}
        </div>

      </div>
    </>
  )
}
export default withRouter(SearchResult);