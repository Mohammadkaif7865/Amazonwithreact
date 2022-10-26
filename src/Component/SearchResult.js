import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './ShowResult.css';
import '../myCss.css';
const url = 'https://amazoncloneserver.herokuapp.com/products_match';
const url2 = 'https://amazoncloneserver.herokuapp.com/products_match_with_sort';
function SearchResult(props) {
  let [products, setProducts] = useState("");
  let [toDisplay, setToDisplay] = useState("");
  let [cheapestCost, setCheapestCost] = useState("");
  let [expensiveCost, setExpensiveCost] = useState("");
  let [margin, setMargin] = useState("");
  let [filterShow, setFilterShow] = useState("none");
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
  function ratingFilter(value) {
    let newProducts = products.filter((item) => {
      return item.rating >= value;
    })
    setToDisplay(newProducts);
  }
  // # for no filter function
  function noFilter(value) {
    fetch(`${url}/${props.match.params.category}`, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setToDisplay(data);
      });
    return value;
  }

  function changeOrder(value) {
    fetch(`${url2}/${props.match.params.category}/${value}`, { method: 'GET' })
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setToDisplay(data);
      });
  }
  return (
    <>
      <div className="filter-show" style={{ marginLeft: "5px" }}>
        <h5 className="top-search-result">{products.length} result for <span className='impo'>"{props.match.params.category}"</span></h5>
        <span className='dd cursorP' onClick={() => setFilterShow("block")}>
          <i
            className="bi bi-funnel-fill"
            id="top-item"
          ></i>
          Filter
        </span>
      </div>
      <div className='grid-display'>
        <div className="filter">
          <b>  <h4>Cost FIlter</h4></b>
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
          <b><h4>Custmor Rating</h4></b>
          <div>
            <p className='cursorP' onClick={() => ratingFilter(4)}><i className="bi bi-star-fill colorGold"></i><i className="bi bi-star-fill colorGold"></i><i className="bi bi-star-fill colorGold"></i><i className="bi bi-star-fill colorGold"></i><i className="bi bi-star colorGold"></i> & Up</p>
            <p className='cursorP' onClick={() => ratingFilter(3)}><i className="bi bi-star-fill colorGold"></i><i className="bi bi-star-fill colorGold"></i><i className="bi bi-star-fill colorGold"></i><i className="bi bi-star colorGold"></i><i className="bi bi-star colorGold"></i> & Up</p>
            <p className='cursorP' onClick={() => ratingFilter(2)}><i className="bi bi-star-fill colorGold"></i><i className="bi bi-star-fill colorGold"></i><i className="bi bi-star colorGold"></i><i className="bi bi-star colorGold"></i><i className="bi bi-star colorGold"></i> & Up</p>
            <p className='cursorP' onClick={() => ratingFilter(1)}><i className="bi bi-star-fill colorGold"></i><i className="bi bi-star colorGold"></i><i className="bi bi-star colorGold"></i><i className="bi bi-star colorGold"></i><i className="bi bi-star colorGold"></i> & Up</p>
          </div>
          <b><h4>Sorted by</h4></b>
          <div>
            <p className="cursorP" onClick={() => changeOrder(1)}>Price low to high <i className="bi bi-arrow-up"></i></p>
            <p className="cursorP" onClick={() => changeOrder(-1)}>Price high to low <i className="bi bi-arrow-down"></i></p>
          </div>
        </div>
        <div className='hiddenFilter' style={{ display: filterShow }}>
          <i className="bi bi-x-lg" style={{ float: "right", fontSize: "40px", cursor: "pointer" }} onClick={() => setFilterShow("none")}></i>
          <h2>Filter</h2>
          <b>  <h4>Cost FIlter</h4></b>
          <form>
            <p>
              <input name='costFilter2' id='2one' type="radio" value={`${Math.round(cheapestCost)}-${Math.round(0.25 * margin + cheapestCost)}`} onChange={(e) => costFilter(e.target.value)} />
              <label className='marginTh cursorP' onClick={() => setFilterShow("none")} htmlFor="2one">{`${Math.round(cheapestCost)} - ${Math.round(0.25 * margin + cheapestCost)}`}</label>
            </p>
            <p>
              <input name='costFilter2' id='2two' type="radio" value={`${Math.round(cheapestCost + 0.25 * margin)}-${Math.round(0.5 * margin + cheapestCost)}`} onChange={(e) => costFilter(e.target.value)} />
              <label className='marginTh cursorP' onClick={() => setFilterShow("none")} htmlFor="2two">{`${Math.round(cheapestCost + 0.25 * margin)} - ${Math.round(0.5 * margin + cheapestCost)}`}</label>
            </p>
            <p>
              <input name='costFilter2' id='2three' type="radio" value={`${Math.round(cheapestCost + 0.5 * margin)}-${Math.round(0.75 * margin + cheapestCost)}`} onChange={(e) => costFilter(e.target.value)} />
              <label className='marginTh cursorP' onClick={() => setFilterShow("none")} htmlFor="2three">{`${Math.round(cheapestCost + 0.5 * margin)} - ${Math.round(0.75 * margin + cheapestCost)}`}</label>
            </p>
            <p>
              <input name='costFilter2' id='2four' type="radio" value={`${Math.round(cheapestCost + 0.75 * margin)}-${Math.round(margin + cheapestCost)}`} onChange={(e) => costFilter(e.target.value)} />
              <label className='marginTh cursorP' onClick={() => setFilterShow("none")} htmlFor="2four">{`${Math.round(cheapestCost + 0.75 * margin)} - ${Math.round(margin + cheapestCost)}+`}</label>
            </p>
            <p>
              <input name='costFilter2' id='2nofilter' type="radio" value='nofilter' onChange={(e) => noFilter(e.target.value)} />
              <label className='marginTh cursorP' onClick={() => setFilterShow("none")} htmlFor="2nofilter">no filter</label>
            </p>
          </form>
          <b><h4>Custmor Rating</h4></b>
          <div>
            <p className='cursorP' onClick={() => { ratingFilter(4); setFilterShow("none"); }}><i className="bi bi-star-fill colorGold"></i><i className="bi bi-star-fill colorGold"></i><i className="bi bi-star-fill colorGold"></i><i className="bi bi-star-fill colorGold"></i><i className="bi bi-star colorGold"></i> & Up</p>
            <p className='cursorP' onClick={() => { ratingFilter(3); setFilterShow("none"); }}><i className="bi bi-star-fill colorGold"></i><i className="bi bi-star-fill colorGold"></i><i className="bi bi-star-fill colorGold"></i><i className="bi bi-star colorGold"></i><i className="bi bi-star colorGold"></i> & Up</p>
            <p className='cursorP' onClick={() => { ratingFilter(2); setFilterShow("none"); }}><i className="bi bi-star-fill colorGold"></i><i className="bi bi-star-fill colorGold"></i><i className="bi bi-star colorGold"></i><i className="bi bi-star colorGold"></i><i className="bi bi-star colorGold"></i> & Up</p>
            <p className='cursorP' onClick={() => { ratingFilter(1); setFilterShow("none"); }}><i className="bi bi-star-fill colorGold"></i><i className="bi bi-star colorGold"></i><i className="bi bi-star colorGold"></i><i className="bi bi-star colorGold"></i><i className="bi bi-star colorGold"></i> & Up</p>
          </div>
          <b><h4>Sorted by</h4></b>
          <div>
            <p className="cursorP" onClick={() => { changeOrder(1); setFilterShow("none"); }}>Price low to high <i className="bi bi-arrow-up"></i></p>
            <p className="cursorP" onClick={() => { changeOrder(-1); setFilterShow("none"); }}>Price high to low <i className="bi bi-arrow-down"></i></p>
          </div>
        </div>
        <div className="products-display">
          {toDisplay.length === 0 ? (
            <h3>No match found</h3>
          ) : (
            toDisplay.map((item, i) => (
              <Link to={`/details/${item.id}`} key={i}>
                <div className="imgCard" >
                  <img src={item.images.img1.link} alt="img" className="imgInCard" />
                  <h5 className="dis">{item.name}</h5>
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