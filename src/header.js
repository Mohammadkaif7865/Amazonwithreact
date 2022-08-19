import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./myCss.css";
import "./myScr";
export default function Header() {
  let [temp, setTemp] = useState("");
  let [city, setCity] = useState("");
  let [src, setSrc] = useState("");
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
          tabindex="-1"
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
              <Link to="/">
                <span>
                  Hi! Mohammad <i className="bi bi-person-circle"></i>
                </span>
              </Link>
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
              <h2>
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
              <Link to="/">
                <h2>
                  Sign out <i className="bi bi-box-arrow-in-right"></i>
                </h2>
              </Link>
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
          <form action="search-input" className="form-search-my">
            <div className="select-cat-my nav-search-my">
              <select name="category" id="select-category">
                <option value="All">All</option>
                <option value="alexa-skills">Alexa Skills</option>
                <option value="amazon-devices">Amazon Devices</option>
                <option value="fashion">Amazon Fashion</option>
                <option value="nowstore">Amazon Fresh</option>
                <option value="amazon-pharmacy">Amazon Pharmacy</option>
                <option value="appliances">Appliances</option>
                <option value="mobile-apps">Apps &amp; Games</option>
                <option value="baby">Baby</option>
                <option value="beauty">Beauty</option>
                <option value="stripbooks">Books</option>
                <option value="automotive">Car &amp; Motorbike</option>
                <option value="apparel">Clothing &amp; Accessories</option>
                <option value="collectibles">Collectibles</option>
                <option value="computers">Computers &amp; Accessories</option>
                <option value="todays-deals">Deals</option>
                <option value="electronics">Electronics</option>
                <option value="furniture">Furniture</option>
                <option value="lawngarden">Garden &amp; Outdoors</option>
                <option value="gift-cards">Gift Cards</option>
                <option value="grocery">Grocery &amp; Gourmet Foods</option>
                <option value="hpc">Health &amp; Personal Care</option>
                <option value="kitchen">Home &amp; Kitchen</option>
                <option value="industrial">Industrial &amp; Scientific</option>
                <option value="jewelry">Jewellery</option>
                <option value="digital-text">Kindle Store</option>
                <option value="luggage">Luggage &amp; Bags</option>
                <option value="luxury-beauty">Luxury Beauty</option>
                <option value="dvd">Movies &amp; TV Shows</option>
                <option value="popular">Music</option>
                <option value="mi">Musical Instruments</option>
                <option value="office-products">Office Products</option>
                <option value="pets">Pet Supplies</option>
                <option value="instant-video">Prime Video</option>
                <option value="shoes">Shoes &amp; Handbags</option>
                <option value="software">Software</option>
                <option value="sporting">Sports, Fitness &amp; Outdoors</option>
                <option value="specialty-aps-sns">Subscribe &amp; Save</option>
                <option value="home-improvement">
                  Tools &amp; Home Improvement
                </option>
                <option value="toys">Toys &amp; Games</option>
                <option value="under-ten-dollars">Under ₹500</option>
                <option value="videogames">Video Games</option>
                <option value="watches">Watches</option>
              </select>
            </div>
            <div className="input-text-my nav-search-my">
              <input type="text" />
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
              <input type="radio" name="language" id="English" checked />
              <label htmlFor="English">English</label>
            </div>
            <div className="language">
              <input type="radio" name="language" id="Hindi" />
              <label htmlFor="Hindi">Hindi</label>
            </div>
            <div className="language">
              <input type="radio" name="language" id="Marathi" />
              <label htmlFor="Marathi">Marathi</label>
            </div>
            <div className="language">
              <input type="radio" name="language" id="Tamil" />
              <label htmlFor="Tamil">Tamil</label>
            </div>
            <div className="language">
              <input type="radio" name="language" id="Bangoli" />
              <label htmlFor="Bangoli">Bangoli</label>
            </div>
            <div className="language">
              <input type="radio" name="language" id="kannad" />
              <label htmlFor="kannad">Kannada</label>
            </div>
            <div className="language">
              <input type="radio" name="language" id="Urdu" />
              <label htmlFor="Urdu">Urdu</label>
            </div>
            <div className="language">
              <input type="radio" name="language" id="Arabic" />
              <label htmlFor="Arabic">Arabic</label>
            </div>
            <div className="language">
              <input type="radio" name="language" id="Malyali" />
              <label htmlFor="Malyali">Malyali</label>
            </div>
            <div
              className="language-my"
              style={{ borderBottom: "2px solid rgb(189, 169, 169)" }}
            >
              <input type="radio" name="language" id="Gujrati" />
              <label htmlFor="Gujrati">Gujarati</label>
            </div>
            <div className="change-region-my">
              <img
                src="https://img.icons8.com/color/25/000000/india.png"
                alt="img"
              />
              You are shopping at Amazon.in
              <p style={{ marginTop: "20px", marginLeft: "10px" }}>
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "blue !important" }}
                >
                  Change Country/Region
                </Link>
              </p>
            </div>
          </div>
        </div>
        <Link to="/">
          <div className="Accounts-my">
            <div className="Greet-my">
              <span style={{ color: "#959fa9" }}>Hello, Mohammad </span>

              <b>
                <span>Account & Lists</span>
              </b>
            </div>
            <i
              className="bi bi-caret-down-fill"
              style={{ color: "#959fa9", fontSize: "8px" }}
            ></i>
          </div>
        </Link>
        <Link to="/">
          <div className="order-returns-my">
            <p style={{ color: "#959fa9", marginTop: "20px" }}>Returns</p>
            <p style={{ position: "relative", top: "-10px" }}>
              <b> & Orders</b>
            </p>
          </div>
        </Link>
        <Link to="/">
          <div className="cart-my">
            <i className="bi bi-cart2 nn-kk"></i>
            <div className="number-of-items-my" style={{ fontSize: "15px" }}>
              <b>10</b>
            </div>
          </div>
        </Link>
      </div>
      <div className="nav-main-my">
        <Link to="/">
          <div className="main-belt-item" style={{ marginLeft: "5px" }}>
            <i
              className="bi bi-funnel-fill"
              id="top-item"
              style={{ fontSize: "22px" }}
            ></i>
            Filter
          </div>
        </Link>
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
