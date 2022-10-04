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
  let [margin, setMargin] = useState("");
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
    if (products.length > 0) {
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
  useEffect(() => {
    if (cheapestCost && expensiveCost) {
      setMargin(expensiveCost - cheapestCost);
    }
  }, [cheapestCost, expensiveCost])
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
      <div className="filter-show" style={{ marginLeft: "5px" }}>
        <h4 className="top-search-result">{products.length} result for <span className='impo'>"{props.match.params.category}"</span></h4>
        <span className='dd'>
          <i
            className="bi bi-funnel-fill"
            id="top-item"

          ></i>
          Filter
        </span>
      </div>
      <div className='grid-display'>
        <div className="filter">
          <b>  <h2>Cost FIlter</h2></b>
          <form>
            <p>
              <input name='costFilter' id='one' type="radio" value={`${Math.round(cheapestCost)}-${Math.round(0.25 * margin + cheapestCost)}`} onChange={(e) => costFilter(e.target.value)} />
              <label className='marginTh' htmlFor="one">{`${Math.round(cheapestCost)} - ${Math.round(0.25 * margin + cheapestCost)}`}</label>
            </p>
            <p>
              <input name='costFilter' id='two' type="radio" value={`${Math.round(cheapestCost + 0.25 * margin)}-${Math.round(0.5 * margin + cheapestCost)}`} onChange={(e) => costFilter(e.target.value)} />
              <label className='marginTh' htmlFor="two">{`${Math.round(cheapestCost + 0.25 * margin)} - ${Math.round(0.5 * margin + cheapestCost)}`}</label>
            </p>
            <p>
              <input name='costFilter' id='three' type="radio" value={`${Math.round(cheapestCost + 0.5 * margin)}-${Math.round(0.75 * margin + cheapestCost)}`} onChange={(e) => costFilter(e.target.value)} />
              <label className='marginTh' htmlFor="three">{`${Math.round(cheapestCost + 0.5 * margin)} - ${Math.round(0.75 * margin + cheapestCost)}`}</label>
            </p>
            <p>
              <input name='costFilter' id='four' type="radio" value={`${Math.round(cheapestCost + 0.75 * margin)}-${Math.round(margin + cheapestCost)}`} onChange={(e) => costFilter(e.target.value)} />
              <label className='marginTh' htmlFor="four">{`${Math.round(cheapestCost + 0.75 * margin)} - ${Math.round(margin + cheapestCost)}+`}</label>
            </p>
            <p>
              <input name='costFilter' id='nofilter' type="radio" value='nofilter' onChange={(e) => noFilter(e.target.value)} />
              <label className='marginTh' htmlFor="nofilter">no filter</label>
            </p>
          </form>
          <b><h2>Custmor Rating</h2></b>
          <div>
            <p><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></p>
          </div>
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