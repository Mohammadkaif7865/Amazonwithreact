import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import "./myCss.css";
const catUrl = "https://amazoncloneserver.herokuapp.com/category";
const cartUrl = "https://amazoncloneserver.herokuapp.com/cart";
function Header(props) {
  let [temp, setTemp] = useState("");
  let [city, setCity] = useState("");
  let [src, setSrc] = useState("");
  let [cat, setCat] = useState("");
  let [search, setSearch] = useState("");
  let [cartCount, setCartCount] = useState(0);
  navigator.geolocation.getCurrentPosition(position);
  async function position(data) {
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${data.coords.latitude}&lon=${data.coords.longitude}&mode=json&units=metric&cnt=1&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
    let response = await fetch(`${url}`);
    let info = await response.json();
    setTemp(info.list[0].temp.day);
    setCity(info.city.name);
    setSrc(
      "http://openweathermap.org/img/w/" + info.list[0].weather[0].icon + ".png"
    );
  }
  function catShow() {
    if (cat) {
      return cat.map((data) => {
        return <option value={data.category} key={data._id}>{data.category}</option>
      })
    }
  }

  function handleChange(value) {
    props.history.push(`/search_result/${value}`);
  }
  function inputChange(e) {
    e.preventDefault();
    props.history.push(`/search_result/${search}`);

  }
  useEffect(() => {
    fetch(catUrl, { method: "GET" }).then((response) => response.json()).then((data) => setCat(data));
  }, []);
  useEffect(() => {
    if (props.nameAuth) {
      console.log('called');
      fetch(`${cartUrl}/${sessionStorage.getItem("email")}`, { method: "GET" }).then((response) => response.json()).then((data) => setCartCount(data.length))
    }
  }, [props.nameAuth, props.refresh]);
  function logOut() {
    sessionStorage.clear();
    props.setNameAuth("");
    setCartCount(0);
    props.history.push("/");
  }
  console.log(cartCount);
  return (
    <header className="navbar-my">
      <div className="nav-belt-my">
        <button
          id="po-po"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#demo"
        >
          <i
            className="bi bi-list"
            style={{ fontSize: "32px", margin: "5px" }}
          ></i>
        </button>
        <div
          className="offcanvas offcanvas-start"
          id="demo"
          style={{ width: "70vw" }}
          data-bs-scroll="true"
          tabIndex="-1"
        >
          <div
            className="offcanvas-header"
            style={{
              backgroundColor: "#232f3e",
              display: "flex",
              justifyContent: "right",
            }}
          >
            <div
              className="off-cav-head"
              style={{ padding: "10px", margin: "10px", fontSize: "30px" }}
            >

              <span>

                {
                  props.nameAuth ? <Link to="/userInfo">
                    <p className="nameAuth" data-bs-dismiss="offcanvas">Hi ! {props.nameAuth} <i className="bi bi-person-circle"></i></p>
                  </Link> : <Link to="/login">
                    <p style={{ color: "#959fa9" }} className="nameAuth" data-bs-dismiss="offcanvas"> Login first <i className="bi bi-person-circle"></i></p>
                  </Link>
                }
              </span>

            </div>
            <button
              type="button"
              id="cancel-offcanvas"
              data-bs-dismiss="offcanvas"
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
          <div
            className="hl-hl"
            style={{
              color: "white",
              padding: "10px",
              backgroundColor: "#232f3e",
            }}
          >
            <h2>
              <b>Browse</b>
            </h2>
            <h1>Amazon</h1>
          </div>
          <div className="offcanvas-body">
            <Link to="/">
              <h2 data-bs-dismiss="offcanvas">
                <b>Amazon Home</b>
                <i className="bi bi-house-door" style={{ float: "right" }}></i>
              </h2>
            </Link>
            <Link to="/">
              <h3>
                Change language & country
                <span className="glyphicon glyphicon-chevron-right"></span>
                <img
                  src="https://img.icons8.com/color/25/000000/india.png"
                  alt="img"
                />
              </h3>
            </Link>
            <Link to="/">
              <h3>
                Orders and returns
                <span className="glyphicon glyphicon-chevron-right"></span>
              </h3>
            </Link>
            <Link to="/">
              <h3>
                Accounts
                <span className="glyphicon glyphicon-chevron-right"></span>
              </h3>
            </Link>
            <Link to="/">
              <h3>
                Help <span className="glyphicon glyphicon-chevron-right"></span>
              </h3>
            </Link>
            <Link to="/">
              <h3>
                Cart <span className="glyphicon glyphicon-chevron-right"></span>
              </h3>
            </Link>
            <div style={{ textAlign: "center", margin: "20px" }}>

              <h2>
                {
                  props.nameAuth ? <span className="cursorP" onClick={() => logOut()} data-bs-dismiss="offcanvas">Logout <i className="bi bi-box-arrow-in-right"></i></span> : <Link to="/register">
                    <span data-bs-dismiss="offcanvas">Register</span>
                  </Link>
                }
              </h2>

            </div>
          </div>
        </div>

        <div className="logo-my">
          <Link to="/">
            <img
              src="https://i.ibb.co/YTryjzf/amazon.png"
              alt="amazon"
              className="amazon-logo-my"
              id="amazon-logo"
            />
            <span id="in-in">.in</span>
          </Link>
        </div>
        <Link to="/" style={{ display: "contents" }}>
          <div className="address-my">
            <div id="imG-container">
              <img src={src} alt="" id="imG" />
            </div>
            <span id="temperature-here">
              <span className="temp-display"></span>
              {temp}&deg; C
            </span>

            <span id="address-me">
              <i className="bi bi-geo-alt-fill"></i>
              {city}
            </span>
          </div>
        </Link>
        <div className="quick-search-my">
          <form onSubmit={inputChange} className="form-search-my">
            <div className="select-cat-my nav-search-my">
              <select name="category" id="select-category" onChange={(e) => handleChange(e.target.value)}>
                <option value="----">category</option>
                {catShow()}
              </select>
            </div>
            <div className="input-text-my nav-search-my">
              <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <button type="submit" className="search-submit-my">
              <i className="bi bi-search" style={{ fontSize: "23px" }}></i>
            </button>
          </form>
        </div>
        <div className="region-my" id="region-country">
          <Link to="/">
            <div className="national-flag-my">
              <img
                src="https://img.icons8.com/color/25/000000/india.png"
                alt="img"
              />
              <i
                className="bi bi-caret-down-fill"
                style={{ color: "#959fa9", fontSize: "8px" }}
              ></i>
            </div>
          </Link>
          <div className="dropdown-region-lan-menu-my">
            <i
              className="bi bi-caret-up-fill"
              style={{
                fontSize: "50px",
                color: "white",
                position: "absolute",
                top: "-35px",
                left: "13px",
              }}
            ></i>
            <div className="language">
              <input
                type="radio"
                name="language"
                id="English"
                value="English"
              />
              <label htmlFor="English">English</label>
            </div>
            <div className="language">
              <input type="radio" name="language" id="Hindi" value="Hindi" />
              <label htmlFor="Hindi">Hindi</label>
            </div>
            <div className="language">
              <input
                type="radio"
                name="language"
                id="Marathi"
                value="Marathi"
              />
              <label htmlFor="Marathi">Marathi</label>
            </div>
            <div className="language">
              <input type="radio" name="language" id="Tamil" value="Tamil" />
              <label htmlFor="Tamil">Tamil</label>
            </div>
            <div className="language">
              <input
                type="radio"
                name="language"
                id="Bangoli"
                value="Bangoli"
              />
              <label htmlFor="Bangoli">Bangoli</label>
            </div>
            <div className="language">
              <input type="radio" name="language" id="kannad" value="kannad" />
              <label htmlFor="kannad">Kannada</label>
            </div>
            <div className="language">
              <input type="radio" name="language" id="Urdu" value="Urdu" />
              <label htmlFor="Urdu">Urdu</label>
            </div>
            <div className="language">
              <input type="radio" name="language" id="Arabic" value="Arabic" />
              <label htmlFor="Arabic">Arabic</label>
            </div>
            <div className="language">
              <input
                type="radio"
                name="language"
                id="Malyali"
                value="Malyali"
              />
              <label htmlFor="Malyali">Malyali</label>
            </div>
            <div
              className="language-my"
              style={{ borderBottom: "2px solid rgb(189, 169, 169)" }}
            >
              <input
                type="radio"
                name="language"
                id="Gujrati"
                value="Gujrati"
              />
              <label htmlFor="Gujrati">Gujarati</label>
            </div>
            <div className="change-region-my">
              <img
                src="https://img.icons8.com/color/25/000000/india.png"
                alt="img"
              />
              You are shopping at Amazon.in
              <p style={{ marginTop: "20px", marginLeft: "10px" }}>
                Change Country/Region
              </p>
            </div>
          </div>
        </div>

        <div className="Accounts-my">
          <div className="Greet-my">
            {
              props.nameAuth ? <Link to="/userInfo">
                <p className="nameAuth">Hi ! {props.nameAuth}       <i
                  className="bi bi-caret-down-fill arrowDown"
                ></i> </p>
              </Link> : <Link to="/login">
                <p style={{ color: "#959fa9" }} className="nameAuth"> Login first       <i
                  className="bi bi-caret-down-fill arrowDown"
                ></i></p>
              </Link>
            }

            <b>
              {
                props.nameAuth ? <span className="logOut" onClick={() => logOut()}>Logout</span> : <Link to="/register">
                  <span>Register</span>
                </Link>
              }
            </b>
          </div>
        </div>
        <Link to="/">
          <div className="order-returns-my">
            <p style={{ color: "#959fa9", margin: 0 }}>Returns    <i
              className="bi bi-caret-down-fill arrowDown"
            ></i></p>

            <p style={{ position: "relative" }}>
              <b> & Orders</b>
            </p>
          </div>
        </Link>
        <Link to="/">
          <div className="cart-my">
            <i className="bi bi-cart2 nn-kk"></i>
            <div className="number-of-items-my" style={{ fontSize: "15px" }}>
              <b>{cartCount}</b>
            </div>
          </div>
        </Link>
      </div>
      <div className="nav-main-my">
        <div className="inner-nav-main">
          <Link to="/">
            <div className="main-belt-item">All</div>
          </Link>
          <Link to="/">
            <div className="main-belt-item">Fresh</div>
          </Link>
          <Link to="/">
            <div className="main-belt-item">Coupon</div>
          </Link>
          <Link to="/">
            <div className="main-belt-item">Amazon Pay</div>
          </Link>
          <Link to="/">
            <div className="main-belt-item">
              Browsing History <i className="bi bi-caret-down-fill"></i>
            </div>
          </Link>
          <Link to="/">
            <div className="main-belt-item">Pet Supplies</div>
          </Link>
          <Link to="/">
            <div className="main-belt-item">
              Prime <i className="bi bi-caret-down-fill"></i>
            </div>
          </Link>
          <Link to="/">
            <div className="main-belt-item">Mobiles</div>
          </Link>
          <Link to="/">
            <div className="main-belt-item">Buy Again</div>
          </Link>
          <Link to="/">
            <div className="main-belt-item">Gift Ideas</div>
          </Link>
          <Link to="/">
            <div className="main-belt-item">Gift Cards</div>
          </Link>
        </div>
        <Link to="/">
          <img
            src="https://i.ibb.co/RbjbNRx/nav-img.jpg"
            alt="img"
            className="nav-image"
          />
        </Link>
      </div>
    </header>
  );
}
export default withRouter(Header);