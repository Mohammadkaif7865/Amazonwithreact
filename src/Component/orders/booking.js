import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './booking.css';
const purl = 'https://renderamazon.onrender.com/placeorder';
const url = 'https://renderamazon.onrender.com/details';
function Booking(props) {
    let [id, setId] = useState('');
    let [img, setImg] = useState('');
    let [productName, setProductName] = useState('');
    let [name, setName] = useState(sessionStorage.getItem('name') ? sessionStorage.getItem('name') : '');
    let [email, setEmail] = useState(sessionStorage.getItem('email') ? sessionStorage.getItem('email') : '');
    let [phone, setPhone] = useState(sessionStorage.getItem('phone') ? sessionStorage.getItem('phone') : '');
    let [address, setAddress] = useState('');
    let [cost, setCost] = useState('');
    let [totalCost, setTotalCost] = useState('');
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
            /* you can also use 'auto' behaviour
                     in place of 'smooth' */
        });
    };
    useEffect(() => {
        fetch(`${url}/${props.match.params.id}`, { method: 'GET' }).then((response) => response.json()).then((data) => {
            setProductName(data[0].name);
            setTotalCost(data[0].cost * props.match.params.quantity);
            setCost(data[0].cost);
            setImg(data[0].images.img1.link)
            setId(Math.floor(Math.random() * 100000));
        });
        scrollToTop();
    }, [props.match.params.id]);
    let checkout = () => {
        let obj = [{
            id: id,
            productId: props.match.params.id,
            quantity: Number(props.match.params.quantity),
            productName: productName,
            name: name,
            cost: totalCost,
            img: img,
            email: email,
            address: address,
        }]
        fetch(purl, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
    }
    console.log(totalCost);
    return (
        <>
            <div className="container nook">
                <h4 className='bookhead bg bg-success'>Your order for {productName}</h4>
                <form action="https://paytmamazon.onrender.com/paynow" method="POST">
                    <input type="hidden" name="cost" value={totalCost} />
                    <input type="hidden" name="id" value={id} />
                    <input type="hidden" name="hotel_name" value={productName} />
                    <div className="form-group col-md-6">
                        <label htmlFor="fname">Name</label>
                        <input id="fname" name="name" className="form-control"
                            value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" className="form-control"
                            value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="phone">Phone</label>
                        <input id="phone" name="phone" className="form-control"
                            value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="address">Address</label>
                        <input id="address" name="address" className="form-control"
                            value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <Link to={`/details/${props.match.params.id}`}>
                        <img src={img} className='smallBook' alt="img" />
                    </Link>
                    <h2>Quantity : {props.match.params.quantity}</h2>
                    <h2>Total Price is {props.match.params.quantity} X {cost} : ₹{totalCost} </h2>
                    <button className="btn btn-warning" onClick={checkout} type="submit">PlaceOrder</button>
                </form>
            </div>
        </>
    )
}
export default withRouter(Booking);