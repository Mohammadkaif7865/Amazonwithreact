import React, { useEffect, useState } from 'react';
import './fav.css';
const cartUrl = 'https://amazoncloneserver.herokuapp.com/userfav';
const favUrlspec = 'https://amazoncloneserver.herokuapp.com/spacific';
function Cart() {
    const [toDisplay, setTodisplay] = useState('');
    const [display, setDisplay] = useState([]);
    const [show, setShow] = useState('');
    useEffect(() => {
        fetch(`${cartUrl}/${sessionStorage.getItem('email')}`, { method: 'GET' }).then(response => response.json()).then(response => setTodisplay(response));
    }, []);
    useEffect(() => {
        if (toDisplay) {
            toDisplay.map((item) => {
                display.push(item.itemId);
                return 'ok';
            })
            fetch(`${favUrlspec}/${JSON.stringify(display)}`)
                .then((response) => response.json()).then((responseData) => setShow(responseData));
        }
    }, [toDisplay]);
    console.log(show);
    return (
        <>
            <div className="container">
                {
                    show.length > 0 ? show.map((item, i) => {
                        return <div className="cardmy" key={i}>
                            <div className="cardmy-image">
                                <img src={item.images.img1.link} alt="img" />
                            </div>
                            <div className="discription">
                                <h5>{item.name}</h5>
                                <button className='btn btn-light'>Delete</button>
                                <button className='btn btn-warning'>Buy now</button>
                            </div>
                        </div>
                    }) : <h2>Nothing in your cart</h2>
                }
            </div>
        </>
    )
}
export default Cart;