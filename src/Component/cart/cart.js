import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import './cart.css';
const cartUrl = 'https://amazoncloneserver.herokuapp.com/cart';
const favUrlspec = 'https://amazoncloneserver.herokuapp.com/spacific';
const deletecart = 'https://amazoncloneserver.herokuapp.com/deleteFromCart';
function Cart(props) {
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
    function deleteFromCart(id) {
        fetch(`${deletecart}/${sessionStorage.getItem('email')}/${id}`, { method: 'DELETE' });
        setTimeout(()=>{
            fetch(`${cartUrl}/${sessionStorage.getItem('email')}`, { method: 'GET' }).then(response => response.json()).then(response => setTodisplay(response));
        },500)
        props.setRefresh(props.refresh + 1);
    }
    console.log(display);
    console.log(toDisplay);
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
                                <img src={item.images.img1.link} alt="img" />
                            </div>
                            <div className="discription">
                                <h5>{item.name}</h5>
                                <button className='btn btn-light' onClick={() => deleteFromCart(item.id)}>Delete</button>
                                <button className='btn btn-warning'>check out</button>
                            </div>
                        </div>
                    }) : <h2>Nothing in your cart</h2>
                }
            </div>
        </>
    )
}
export default withRouter(Cart);