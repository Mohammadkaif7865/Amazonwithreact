import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import './detail.css';
import '../myCss.css';
const url = 'https://amazoncloneserver.herokuapp.com/details';
const defaultImg = "https://i.ibb.co/G3gRQ34/defaultimg.jpg";
const fav = 'https://amazoncloneserver.herokuapp.com/favourities';
const cartUrl = 'https://amazoncloneserver.herokuapp.com/addcart';
function Details(props) {
    const [details, setDetails] = useState('');
    const [favourites, setFavourites] = useState(false);
    const [addTocart, setAddTocart] = useState(false);
    const [whichOne, setWhichOne] = useState(1);
    const [quantity, setquantity] = useState(1);
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
    }, [])
    useEffect(() => {
        fetch(`${url}/${props.match.params.id}`, { method: 'GET' }).then((response) => response.json()).then((data) => setDetails(data));
    }, [props.match.params.id]);
    useEffect(() => {
        let send = [{
            email: sessionStorage.getItem('email'),
            itemId: Number(props.match.params.id)
        }];
        if (favourites && sessionStorage.getItem('email')) {
            fetch(fav, {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(send),
            })
        }

    }, [favourites]);
    useEffect(() => {
        let send = [{
            email: sessionStorage.getItem('email'),
            itemId: Number(props.match.params.id)
        }];
        if (addTocart && sessionStorage.getItem('email')) {
            fetch(cartUrl, {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(send),
            })
        }
        props.setRefresh(props.refresh + 1);
    }, [addTocart]);
    function gotoBooking(id){
        props.history.push(`/booking/${id}/${quantity}`);
    }
    return (
        <>
            <div className='topOfdetail'>
                <p>
                    {details.length > 0 ? details[0].category : "-----"}
                </p>
                <p>
                    {details.length > 0 ? details[0].sub_category : "-----"}
                </p>
                <p>
                    {details.length > 0 ? details[0].brand : "-----"}
                </p>
            </div>
            <div className='details-pro'>
                <div className='detail-pic'>
                    <div className="bigOne">
                        {
                            whichOne === 1 ? <img src={details.length > 0 && details[0].images.img1 ? details[0].images.img1.link : defaultImg} alt="img" /> : null
                        }
                        {
                            whichOne === 2 ? <img src={details.length > 0 && details[0].images.img2 ? details[0].images.img2.link : defaultImg} alt="img" /> : null
                        }
                        {
                            whichOne === 3 ? <img src={details.length > 0 && details[0].images.img3 ? details[0].images.img3.link : defaultImg} alt="img" /> : null
                        }
                        {
                            whichOne === 4 ? <img src={details.length > 0 && details[0].images.img4 ? details[0].images.img4.link : defaultImg} alt="img" /> : null
                        }
                        <i className="bi bi-heart-fill shareA" onClick={() => { setFavourites(true) }} style={favourites ? { color: "red" } : null}></i>
                        <i className="bi bi-share-fill favourite"></i>
                    </div>
                    <div className="button-pics">
                        <button onClick={() => setWhichOne(1)}>
                            <img className='button-img' src={details.length > 0 && details[0].images.img1 ? details[0].images.img1.link : defaultImg} alt="img" />
                        </button>
                        <button onClick={() => setWhichOne(2)}>
                            <img className='button-img' src={details.length > 0 && details[0].images.img2 ? details[0].images.img2.link : defaultImg} alt="img" />
                        </button>
                        <button onClick={() => setWhichOne(3)}>
                            <img className='button-img' src={details.length > 0 && details[0].images.img3 ? details[0].images.img3.link : defaultImg} alt="img" />
                        </button>
                        <button onClick={() => setWhichOne(4)}>
                            <img className='button-img' src={details.length > 0 && details[0].images.img4 ? details[0].images.img4.link : defaultImg} alt="img" />
                        </button>
                    </div>
                </div>
                <div className="description">
                    <h3>{details.length > 0 ? details[0].name : "-----"}</h3>
                    <h4>
                        {whichOne === 1 && details.length > 0 && details[0].images.img1 ? details[0].images.img1.description : " "}
                        {whichOne === 2 && details.length > 0 && details[0].images.img2 ? details[0].images.img2.description : " "}
                        {whichOne === 3 && details.length > 0 && details[0].images.img3 ? details[0].images.img3.description : " "}
                        {whichOne === 4 && details.length > 0 && details[0].images.img4 ? details[0].images.img4.description : " "}
                    </h4>
                    <h5>
                        {details.length > 0 ? details[0].rating : "-----"} <i className='bi bi-star-fill colorGold'></i> | {details.length > 0 ? details[0].sales : "-----"} customer reviews
                    </h5>
                    <h1>
                        <sup>₹</sup>{details.length > 0 ? details[0].cost : "-----"}
                    </h1>
                    <button className='btn btn-light button-text' onClick={() => setAddTocart(true)}>{addTocart ? <i className="bi bi-check2"></i> : null}Add to cart <i className="bi bi-cart2"></i></button>
                    <button className='btn btn-warning button-text' onClick={()=> gotoBooking(details[0].id)}>Buy now</button>
                </div>
            </div>
        </>
    )
}
export default withRouter(Details);