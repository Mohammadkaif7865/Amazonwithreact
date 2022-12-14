import React, { useEffect, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './cart.css';
const cartUrl = 'https://renderamazon.onrender.com/cart';
const favUrlspec = 'https://renderamazon.onrender.com/spacific';
const deletecart = 'https://renderamazon.onrender.com/deleteFromCart';
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
    const quantity = 1;
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
    function deleteFromCart(id) {
        fetch(`${deletecart}/${sessionStorage.getItem('email')}/${id}`, { method: 'DELETE' });
        setTimeout(() => {
            fetch(`${cartUrl}/${sessionStorage.getItem('email')}`, { method: 'GET' }).then(response => response.json()).then(response => setTodisplay(response));
        }, 300);
        props.setRefresh(props.refresh + 1);
    }
    function gotoBooking(id) {
        props.history.push(`/booking/${id}/${quantity}`);
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
                                <button className='btn btn-light' onClick={() => deleteFromCart(item.id)}>Delete</button>
                                <button className='btn btn-warning' onClick={() => gotoBooking(item.id)}>check out</button>
                            </div>
                        </div>
                    }) : <h2>Nothing in your cart</h2>
                }
            </div>
        </>
    )
}
export default withRouter(Cart);