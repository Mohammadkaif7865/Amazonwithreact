import React from "react";
import { Link } from "react-router-dom";
import "../myCss.css";
import "../myScr";
export default function Home() {
  function hide_me_right() {
    document.getElementById("scroll-nav-right").style.display = "none";
    document.getElementById("scroll-nav-left").style.display = "inline-block";
  }

  function hide_me_left() {
    document.getElementById("scroll-nav-left").style.display = "none";
    document.getElementById("scroll-nav-right").style.display = "inline-block";
  }
  function change_the(x) {
    let m = document.getElementsByClassName("array-class-me");
    for (let i = 0, len = m.length; i < len; i++) {
      m[i].style.display = "none";
    }
    document.getElementById(`pic-swap-${x}`).style.display = "block";
  }
  return (
    <main>
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Link to="/">
              <img src="https://i.ibb.co/qxJMds9/a1.jpg" alt="img" />
            </Link>
          </div>

          <div className="carousel-item">
            <Link to="/">
              <img src="https://i.ibb.co/rMrL5h6/a2.jpg" alt="img" />
            </Link>
          </div>

          <div className="carousel-item">
            <Link to="/">
              <img src="https://i.ibb.co/cbwX3pF/am3.jpg" alt="img" />
            </Link>
          </div>
          <div className="carousel-item">
            <Link to="/">
              <img src="https://i.ibb.co/jfMpgyd/a4.jpg" alt="img" />
            </Link>
          </div>
          <div className="carousel-item">
            <Link to="/">
              <img src="https://i.ibb.co/vjZzRwx/a5.jpg" alt="img" />
            </Link>
          </div>
          <div className="carousel-item">
            <Link to="/">
              <img src="https://i.ibb.co/1d0k35y/a6.jpg" alt="img" />
            </Link>
          </div>
          <div className="carousel-item">
            <Link to="/">
              <img src="https://i.ibb.co/K6cL5bg/am7.jpg" alt="img" />
            </Link>
          </div>
          <div className="carousel-item">
            <Link to="/">
              <img src="https://i.ibb.co/dgnQdcm/am8.jpg" alt="img" />
            </Link>
          </div>
          <div className="carousel-item">
            <Link to="/">
              <img src="https://i.ibb.co/G9jC7gb/am9.jpg" alt="img" />
            </Link>
          </div>
          <div className="carousel-item">
            <Link to="/">
              <img src="https://i.ibb.co/1M6y3bD/am10.jpg" alt="img" />
            </Link>
          </div>
          <div className="carousel-item">
            <Link to="/">
              <img src="https://i.ibb.co/1ngcKbf/am11.jpg" alt="img" />
            </Link>
          </div>
        </div>

        {/* <!-- Left and right controls -- Never give -ve z index to the element which you want to give anchor tag  --> */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <i className="bi bi-chevron-left size-up"></i>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <i className="bi bi-chevron-right size-up"></i>
        </button>
      </div>

      <div className="scroller-navigation">
        <Link to="#last-scroller" onClick={()=>hide_me_right()}>
          <i className="bi bi-chevron-right" id="scroll-nav-right"></i>
        </Link>
        <Link to="#first-scroller" onClick={()=>hide_me_left()}>
          <i className="bi bi-chevron-left" id="scroll-nav-left"></i>
        </Link>
      </div>
      <div className="scroller">
        <Link to="/">
          <div className="scroll-items" id="first-scroller">
            <p>Keep shopping for</p>
            <img src="https://i.ibb.co/6NwKPfn/desk1.jpg" alt="img" />
          </div>
        </Link>
        <Link to="/">
          <div className="scroll-items">
            <p>30% off on shoes</p>
            <img src="https://i.ibb.co/fktx6CK/q1.jpg" alt="img" />
          </div>
        </Link>
        <Link to="/">
          <div className="scroll-items">
            <p>electronics 50% off</p>
            <img src="https://i.ibb.co/44Kc2cF/w2.jpg" alt="img" />
          </div>
        </Link>
        <Link to="/">
          <div className="scroll-items">
            <p>Keep shopping for</p>
            <img src="https://i.ibb.co/YZBM31g/desk2.jpg" alt="img" />
          </div>
        </Link>
        <Link to="/">
          <div className="scroll-items-type-full">
            <p>Keep shopping for gadgets</p>
            <img src="https://i.ibb.co/yyrTsLd/p5.jpg" alt="img" />
          </div>
        </Link>
        <Link to="/">
          <div className="scroll-items-type-full">
            <img src="https://i.ibb.co/NLDmb7z/summersale.jpg" alt="img" />
          </div>
        </Link>
        <Link to="/">
          <div className="scroll-items-type-full">
            <img src="https://i.ibb.co/FhTsHdG/topbrandlaptop.jpg" alt="img" />
          </div>
        </Link>
        <Link to="/">
          <div className="scroll-items-type-full" id="last-scroller">
            <p>Watches</p>
            <img src="https://i.ibb.co/PWwc1Kt/watches.jpg" alt="img" />
          </div>
        </Link>
      </div>
      <div className="car-me-container" id="bas-is-ke-liye">
        <div className="car-me">
          <h2>
            <b>Today’s Deals</b>
          </h2>
          <div className="owl-carousel owl-theme car-me" id="display-item-1">
            <div className="item increase-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/b3TXr4s/ipone.jpg"
                  alt="img"
                  className="partial-screen-car-img"
                />
                <p>
                  ₹65,990 <s>₹99,990</s>
                  <span className="demo-2"></span>
                </p>
              </Link>
            </div>
            <div className="item increase-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/RcfTV23/pt3.jpg"
                  alt="img"
                  className="partial-screen-car-img"
                />
                <p>
                  ₹158.00 - ₹19,799.00<span className="demo-2"></span>
                </p>
              </Link>
            </div>
            <div className="item increase-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/Fws9g9F/pt1.jpg"
                  alt="img"
                  className="partial-screen-car-img"
                />
                <p>
                  ₹39,990 <s>₹74,999.00</s>
                  <span className="demo-2"></span>
                </p>
              </Link>
            </div>
            <div className="item increase-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/HYDZMsZ/pt2.jpg"
                  alt="img"
                  className="partial-screen-car-img"
                />
                <p>
                  21,999 <s>₹28,999</s>
                  <span className="demo-2"></span>
                </p>
              </Link>
            </div>
            <div className="item increase-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/CKjZBdp/pt4.jpg"
                  alt="img"
                  className="partial-screen-car-img"
                />
                <p>
                  ₹124.00 - ₹7,803.00<span className="demo-2"></span>
                </p>
              </Link>
            </div>
            <div className="item increase-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/CHzW44k/pt5.jpg"
                  alt="img"
                  className="partial-screen-car-img"
                />
                <p>
                  ₹159.00 - ₹989.00<span className="demo-2"></span>
                </p>
              </Link>
            </div>
            <div className="item increase-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/zR6x0bz/pt6.jpg"
                  alt="img"
                  className="partial-screen-car-img"
                />
                <p>
                  ₹2,184.00 - ₹12,870.00<span className="demo-2"></span>
                </p>
              </Link>
            </div>
            <div className="item increase-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/XYY1fkw/pt7.jpg"
                  alt="img"
                  className="partial-screen-car-img"
                />
                <p>
                  ₹100.00 - ₹7,818.00<span className="demo-2"></span>
                </p>
              </Link>
            </div>
            <div className="item increase-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/3dfCBQc/pt8.jpg"
                  alt="img"
                  className="partial-screen-car-img"
                />
                <p>
                  ₹99.00 - ₹3,155.00<span className="demo-2"></span>
                </p>
              </Link>
            </div>
            <div className="item increase-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/Gk5YYP9/pt9.jpg"
                  alt="img"
                  className="partial-screen-car-img"
                />
                <p>
                  ₹132.00 - ₹5,377.00<span className="demo-2"></span>
                </p>
              </Link>
            </div>
            <div className="item increase-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/QPpmsnq/pt10.jpg"
                  alt="img"
                  className="partial-screen-car-img"
                />
                <p>
                  ₹331.00 - ₹4,701.00<span className="demo-2"></span>
                </p>
              </Link>
            </div>
            <div className="item increase-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/SX4dr1y/pt11.jpg"
                  alt="img"
                  className="partial-screen-car-img"
                />
                <p>
                  ₹126.00 - ₹6,721.00<span className="demo-2"></span>
                </p>
              </Link>
            </div>
            <div className="item increase-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/W0mQftP/pt12.jpg"
                  alt="img"
                  className="partial-screen-car-img"
                />
                <p>
                  ₹325.00 - ₹4,499.00<span className="demo-2"></span>
                </p>
              </Link>
            </div>
            <div className="item increase-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/Jk4HM8W/pt13.jpg"
                  alt="img"
                  className="partial-screen-car-img"
                />
                <p>
                  ₹499.00 - ₹996.00<span className="demo-2"></span>
                </p>
              </Link>
            </div>
            <div className="item increase-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/w67KFn5/pt14.jpg"
                  alt="img"
                  className="partial-screen-car-img"
                />
                <p>
                  ₹331.00 - ₹35,039.00<span className="demo-2"></span>
                </p>
              </Link>
            </div>
            <div className="item increase-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/2kgqJpQ/pt15.jpg"
                  alt="img"
                  className="partial-screen-car-img"
                />
                <p>
                  ₹262.00 - ₹1,012.00<span className="demo-2"></span>
                </p>
              </Link>
            </div>
            <div className="item increase-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/Jr0V7n6/pt16.jpg"
                  alt="img"
                  className="partial-screen-car-img"
                />
                <p>
                  ₹190.00 - ₹9,725.00<span className="demo-2"></span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="card-container">
        <div className="card-type-one my-card">
          <h2 className="card-title">
            Amazon Pay | Pay credit card & postpaid bills
          </h2>
          <Link to="/">
            <div className="im1">
              <img
                src="https://i.ibb.co/W3x37Dk/bi1.jpg"
                alt="img"
                className="fit-img"
              />
              <h5 className="card-item-title">Postpaid bill</h5>
            </div>
          </Link>
          <Link to="/">
            <div className="im2">
              <img
                src="https://i.ibb.co/DKFW1B0/bi2.jpg"
                alt="img"
                className="fit-img"
              />
              <h5 className="card-item-title">Credit card bill</h5>
            </div>
          </Link>
          <Link to="/">
            <div className="im3">
              <img
                src="https://i.ibb.co/82CKhtC/bi3.jpg"
                alt="img"
                className="fit-img"
              />
              <h5 className="card-item-title">Google Play recharge</h5>
            </div>
          </Link>
          <Link to="/">
            <div className="im4">
              <img
                src="https://i.ibb.co/K5R7Krc/bi4.jpg"
                alt="img"
                className="fit-img"
              />
              <h5 className="card-item-title">Pay for subscriptions</h5>
            </div>
          </Link>
          <Link to="/" className="see-more">
            <h4>Explore more from Amazon pay</h4>
          </Link>
        </div>
        <div className="card-type-two my-card">
          <h2 className="card-title">
            Amazon Pay | Pay utility bills fast & conveniently
          </h2>
          <Link to="/">
            <div className="im1">
              <img
                src="https://i.ibb.co/tJ2gdnZ/bill1.jpg"
                alt="img"
                className="fit-img"
              />
              <h5 className="card-item-title">Electricity Bill</h5>
            </div>
          </Link>
          <Link to="/">
            <div className="im2">
              <img
                src="https://i.ibb.co/zsptv45/bill2.jpg"
                alt="img"
                className="fit-img"
              />
              <h5 className="card-item-title">LPG gas cylinder</h5>
            </div>
          </Link>
          <Link to="/">
            <div className="im3">
              <img
                src="https://i.ibb.co/JprNtyt/bill3.jpg"
                alt="img"
                className="fit-img"
              />
              <h5 className="card-item-title">Broadband bill</h5>
            </div>
          </Link>
          <Link to="/">
            <div className="im4">
              <img
                src="https://i.ibb.co/CP0yQyW/bill4.jpg"
                alt="img"
                className="fit-img"
              />
              <h5 className="card-item-title">DTH Recharge</h5>
            </div>
          </Link>
          <Link to="/" className="see-more">
            <h4>Explore more from Amazon pay</h4>
          </Link>
        </div>
        <div className="card-type-three my-card">
          <h2 className="card-title">Pay & Shop | Earn rewards daily</h2>
          <Link to="/">
            <div className="im1">
              <img
                src="https://i.ibb.co/Hh9js00/re1.jpg"
                alt="img"
                className="fit-img"
              />
              <h5 className="card-item-title">Claim your scratch cards</h5>
            </div>
          </Link>
          <Link to="/">
            <div className="im2">
              <img
                src="https://i.ibb.co/X7fGw0N/re2.jpg"
                alt="img"
                className="fit-img"
              />
              <h5 className="card-item-title">redeem your collected rewards</h5>
            </div>
          </Link>
          <Link to="/">
            <div className="im3">
              <img
                src="https://i.ibb.co/GQHqXMg/re3.jpg"
                alt="img"
                className="fit-img"
              />
              <h5 className="card-item-title">
                Unlock more rewards when you pay or shop
              </h5>
            </div>
          </Link>
          <Link to="/">
            <div className="im4">
              <img
                src="https://i.ibb.co/TtjYjZY/re4.jpg"
                alt="img"
                className="fit-img"
              />
              <h5 className="card-item-title">
                Explore all rewards in one place
              </h5>
            </div>
          </Link>
          <Link to="/" className="see-more">
            <h4>See more</h4>
          </Link>
        </div>
        <div className="card-type-four my-card">
          <h2 className="card-title">Shop by Category</h2>
          <Link to="/">
            <div className="im1">
              <img
                src="https://i.ibb.co/VJ5Bxr8/cat1.jpg"
                alt="img"
                className="fit-img"
              />
              <h5 className="card-item-title">Fresh</h5>
            </div>
          </Link>
          <Link to="/">
            <div className="im2">
              <img
                src="https://i.ibb.co/8jdxCt7/cat2.jpg"
                alt="img"
                className="fit-img"
              />
              <h5 className="card-item-title">Mobiles</h5>
            </div>
          </Link>
          <Link to="/">
            <div className="im3">
              <img
                src="https://i.ibb.co/PZyKqJB/cat3.jpg"
                alt="img"
                className="fit-img"
              />
              <h5 className="card-item-title">Fashion</h5>
            </div>
          </Link>
          <Link to="/">
            <div className="im4">
              <img
                src="https://i.ibb.co/GJMNVpX/cat4.jpg"
                alt="img"
                className="fit-img"
              />
              <h5 className="card-item-title">Electronics</h5>
            </div>
          </Link>
          <Link to="/" className="see-more">
            <h4>See more</h4>
          </Link>
        </div>
      </div>
      <div className="show-case-one">
        <Link to="/">
          <img
            src="https://i.ibb.co/XjqmynB/long2.jpg"
            alt="img"
            className="full-image-1"
          />
        </Link>
      </div>
      <div className="card-container">
        <div className="card-type-one my-card-2">
          <h2 className="card-title">Big Savings for Everyone</h2>
          <div className="im-full">
            <Link to="/">
              <img src="https://i.ibb.co/NLDmb7z/summersale.jpg" alt="img" />
            </Link>
          </div>
          <Link to="/" className="see-more">
            <h4>See all upcoming offers</h4>
          </Link>
        </div>
        <div className="card-type-two my-card">
          <h2 className="card-title">Birthday store</h2>
          <Link to="/">
            <div className="im1">
              <img
                src="https://i.ibb.co/7C1R77N/pi1.jpg"
                alt="img"
                className="fit-img"
              />
              <h5 className="card-item-title">Gifts for men</h5>
            </div>
          </Link>
          <Link to="/">
            <div className="im2">
              <img
                src="https://i.ibb.co/Q6MKzZQ/pi2.jpg"
                alt="img"
                className="fit-img"
              />
              <h5 className="card-item-title">Gifts for women</h5>
            </div>
          </Link>
          <Link to="/">
            <div className="im3">
              <img
                src="https://i.ibb.co/J2Bm7Hq/pi3.jpg"
                alt="img"
                className="fit-img"
              />
              <h5 className="card-item-title">Gifts for boys</h5>
            </div>
          </Link>
          <Link to="/">
            <div className="im4">
              <img
                src="https://i.ibb.co/wg6QVsR/pi4.jpg"
                alt="img"
                className="fit-img"
              />
              <h5 className="card-item-title">Gifts for girls</h5>
            </div>
          </Link>
          <Link to="/" className="see-more">
            <h4>See more</h4>
          </Link>
        </div>
        <div className="card-type-three my-card-2">
          <h2 className="card-title">
            For all birthday gifting and celebration needs
          </h2>
          <div className="im-full">
            <Link to="/">
              <img src="https://i.ibb.co/dkRJvNh/foreee.jpg" alt="img" />
            </Link>
          </div>
          <Link to="/" className="see-more">
            <h4>See more</h4>
          </Link>
        </div>
        <div className="card-type-four my-card-3">
          <h2 className="card-title">
            Best Sellers in Computers & Accessories
          </h2>
          <div className="card-3-pic-1 array-className-me " id="pic-swap-0">
            <Link to="/">
              <div className="get-part">
                <img
                  src="https://i.ibb.co/TMwv4bC/mouse1.jpg"
                  alt="img"
                  className="fit-img-2"
                />
              </div>
              <p className="get-part-2">
                Logitech B170 Wireless Mouse, 2.4 GHz with USB Nano Receiver,
                Optical Tracking, 12-M…
                <p className="price-in-part-2">
                  ₹545.00 <s>₹656.00</s>
                </p>
              </p>
            </Link>
          </div>
          <div className="card-3-pic-2 array-className-me" id="pic-swap-1">
            <Link to="/">
              <div className="get-part">
                <img
                  src="https://i.ibb.co/4F1vK8f/img2.jpg"
                  alt="img"
                  className="fit-img-2"
                />
              </div>
              <p className="get-part-2">
                HP X1000 Wired Mouse with 3 Handy Buttons, Fast-Moving Scroll
                Wheel and Optical Sensor works on…
              </p>
              <p className="price-in-part-2">
                ₹270.00 <s>₹399.00</s>
              </p>
            </Link>
          </div>
          <div className="card-3-pic-3 array-className-me" id="pic-swap-2">
            <Link to="/">
              <div className="get-part">
                <img
                  src="https://i.ibb.co/RSSHRy9/img3.jpg"
                  alt="img"
                  className="fit-img-2"
                />
              </div>
              <p className="get-part-2">
                Portronics Konnect L 1.2M POR-1401 Fast Charging 3A 8 Pin USB
                Cable with Charge & Sync Function (…
              </p>
              <p className="price-in-part-2">
                ₹139.00 <s>₹399.00</s>
              </p>
            </Link>
          </div>
          <div className="card-3-pic-4 array-className-me" id="pic-swap-3">
            <Link to="/">
              <div className="get-part">
                <img
                  src="https://i.ibb.co/xSxSpx5/img4.jpg"
                  alt="img"
                  className="fit-img-2"
                />
              </div>
              <p className="get-part-2">
                Sandisk v236w 64GB USB 2.0 Pen Drive,with 2 year warranty
              </p>
              <p className="price-in-part-2">
                ₹489.00 <s>1,500.00</s>
              </p>
            </Link>
          </div>
          <div className="button-to-change">
            <button
              type="button"
              className="btn btn-light"
              onClick={()=>change_the(0)}
            >
              <img
                src="https://i.ibb.co/TMwv4bC/mouse1.jpg"
                alt="img"
                className="fit-img-2"
              />
            </button>
            <button
              type="button"
              className="btn btn-light"
              onClick={()=>change_the(1)}
            >
              <img
                src="https://i.ibb.co/NF40krx/m2.jpg"
                alt="img"
                className="fit-img-2"
              />
            </button>
            <button
              type="button"
              className="btn btn-light"
              onClick={()=>change_the(2)}
            >
              <img
                src="https://i.ibb.co/Lxbr1Ts/w1.jpg"
                alt="img"
                className="fit-img-2"
              />
            </button>
            <button
              type="button"
              className="btn btn-light"
              onClick={()=>change_the(3)}
            >
              <img
                src="https://i.ibb.co/Hrx2vL0/pen1.jpg"
                alt="img"
                className="fit-img-2"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="car-me-container">
        <div className="car-me">
          <h2>
            <b>Inspired by your shopping trends</b>
          </h2>
          <div className="owl-carousel owl-theme car-me" id="display-item-1">
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/mqp5rRb/ys1.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/syhRRjN/ys2.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/rf8739V/ys3.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/Q86m0DL/ys4.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/nntfSvv/ys5.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/0QFzhHS/ys6.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/M5VHxJt/ys7.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/4Py5Lsm/ys8.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/ZMW1ygf/ys9.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/fCkdcrz/ys11.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/RH3TGJP/ys12.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/LCgsYZX/ys13.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/ZmhQyyV/ys14.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/4Mq6YGN/ys15.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/zXZzZB5/ys16.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/kX5LLfk/ys17.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/q1Zh1WY/ys18.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/BCjL0YS/ys19.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/CJxR6hf/ys20.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/zQ4L60h/ys21.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/YhjH89x/ys22.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/6B6DzTL/ys23.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/Q8ZBbBR/ys24.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/2FLnd5s/ys25.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/Q8Y3vf5/ys26.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/QKWhSq4/ys27.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/ydk2Hn5/ys28.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/Wz9H9Ld/ys29.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/Dt7fkqs/ys30.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="image-show-case-two">
        <Link to="/">
          <img
            src="https://i.ibb.co/C5LhXSS/full-imge.jpg"
            alt="img"
            className="half-image-1"
          />
        </Link>
        <Link to="/">
          <img
            src="https://i.ibb.co/FKBBbc1/half2.jpg"
            alt="img"
            className="half-image-1"
          />
        </Link>
      </div>
      <div className="car-me-container">
        <div className="car-me">
          <h2>
            <b>More top picks for you</b>
          </h2>
          <div className="owl-carousel owl-theme car-me" id="display-item-1">
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/b3TXr4s/ipone.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/M5T6gfd/ipad.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/44Kc2cF/w2.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/R9xfXzk/ipod.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/xFR2fGB/kyborad.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/nb2X9xs/charger.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/whCsNbz/zit1.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/cNvK3fq/zit2.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/2h8D1qy/z3.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/fY2btW9/z4.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/0YbwvjD/z5.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/TMP50Tx/z8.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/LpdLXJY/z10.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/PWwc1Kt/watches.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/c3hy8xM/laptop.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/7QPs9KN/z6.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
            <div className="item normal-carousel-h">
              <Link to="/">
                <img
                  src="https://i.ibb.co/hfJFJCd/coverpink.jpg"
                  alt="img"
                  className="full-screen-car-img"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="show-case-one">
        <Link to="/">
          <img
            src="https://i.ibb.co/z7XmRqv/long-image1.jpg"
            alt="img"
            className="full-image-1"
          />
        </Link>
      </div>
    </main>
  );
}
