import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './ShowResult.css';
import '../myCss.css';
const url = 'https://amazoncloneserver.herokuapp.com/products_match';
function SearchResult(props) {
  let [products, setProducts] = useState("");
  let [toDisplay, setToDisplay] = useState("");
  let [cheapestCost, setCheapestCost] = useState("");
  let [expensiveCost, setExpensiveCost] = useState("");
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
    if (products) {
      let sortedProducts = products;
      sortedProducts.sort((a, b) => a.cost - b.cost);
      setCheapestCost(sortedProducts[0].cost);
      setExpensiveCost(sortedProducts[sortedProducts.length - 1].cost);
    }
  }, [products]);
  useEffect(() => {
    fetch(`${url}/${props.match.params.category}`, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setToDisplay(data);
      });
  }, [props.match.params]);
  function costFilter(value) {
    let lcost = Number(value.split('-')[0]);
    let hcost = Number(value.split('-')[1]);
    let newProducts = products.filter((value) => {
      return value.cost >= lcost && value.cost <= hcost;
    })
    setToDisplay(newProducts);
  }
  function noFilter(value) {
    setToDisplay(products);
    return value;
  }
  return (
    <>
      <h4 className="top-search-result">{products.length} result for {props.match.params.category}</h4>
      <div className='grid-display'>
        <div className="filter">
          <h2>This is filter coloumns</h2>
          <form>
            <p>
              <input name='costFilter' id='200-500' type="radio" value={cheapestCost + "-" + expensiveCost} onChange={(e) => costFilter(e.target.value)} />
              <label htmlFor="200-500">{cheapestCost + " " + "-" + " " + expensiveCost}</label>
            </p>
            <p>
              <input name='costFilter' id='nofilter' type="radio" value='nofilter' onChange={(e) => noFilter(e.target.value)} />
              <label htmlFor="nofilter">no filter</label>
            </p>
          </form>
        </div>
        <div className="products-display">
          {toDisplay.length === 0 ? (
            <h1>No match found</h1>
          ) : (
            toDisplay.map((item, i) => (
              <Link to={`/details/${item.id}`} key={i}>
                <div className="imgCard" >
                  <img src={item.images.img1.link} alt="img" className="imgInCard" />
                  <h3 className="dis">{item.name}</h3>
                  <div className="rating">
                    Rating: {item.rating}{" "}
                    <i className="bi bi-star-fill colorGold"></i>
                  </div>
                  <div className="price">Price : ₹ <span className='price-tag'>{item.cost}</span> </div>
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