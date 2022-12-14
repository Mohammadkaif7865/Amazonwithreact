import React, { useEffect, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './fav.css';
const cartUrl = 'https://renderamazon.onrender.com/userfav';
const favUrlspec = 'https://renderamazon.onrender.com/spacific';
const deletefav = 'https://renderamazon.onrender.com/deletefav';
function Cart(props) {
    const [toDisplay, setTodisplay] = useState('');
    const [show, setShow] = useState('');
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
            /* you can also use 'auto' behaviour
                     in place of 'smooth' */
        });
    };
    useEffect(() => {
        fetch(`${cartUrl}/${sessionStorage.getItem('email')}`, { method: 'GET' }).then(response => response.json()).then(response => setTodisplay(response));
        scrollToTop();
    }, []);
    useEffect(() => {
        let temp = [];
        if (toDisplay) {
            toDisplay.map((item) => {
                temp.push(item.itemId);
                return 'ok';
            })
            fetch(`${favUrlspec}/${JSON.stringify(temp)}`)
                .then((response) => response.json()).then((responseData) => setShow(responseData));
        }
    }, [toDisplay]);
    function deleteFromfav(id) {
        fetch(`${deletefav}/${sessionStorage.getItem('email')}/${id}`, { method: 'DELETE' });
        setTimeout(() => {
            fetch(`${cartUrl}/${sessionStorage.getItem('email')}`, { method: 'GET' }).then(response => response.json()).then(response => setTodisplay(response));
        }, 300);
        props.setRefresh(props.refresh + 1);
    }
    function gotoBooking(id) {
        props.history.push(`/booking/${id}`);
    }
    return (
        <>
            <div className="container">
                {
                    show ? null : <div className="spinner-border text-warning" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                }
                {
                    show.length > 0 ? show.map((item, i) => {
                        return <div className="cardmy" key={i}>
                            <div className="cardmy-image">
                                <Link to={`/details/${item.id}`}>
                                    <img src={item.images.img1.link} alt="img" />
                                </Link>
                            </div>
                            <div className="discription">
                                <h5>{item.name}</h5>
                                <button className='btn btn-light'
                                    onClick={() => deleteFromfav(item.id)}>Remove from wishlist</button>
                                <button className='btn btn-warning' onClick={() => gotoBooking(item.id)}>Buy now</button>
                            </div>
                        </div>
                    }) : <h2>Nothing in your WishList</h2>
                }
            </div>
        </>
    )
}
export default withRouter(Cart);