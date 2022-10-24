import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
const purl = 'https://amazoncloneserver.herokuapp.com/placeorder';
function Booking(props) {
    let [id, setId] = useState(Math.floor(Math.random() * 100000));
    let [productName, setProductName] = useState('');
    let [name, setName] = useState(sessionStorage.getItem('name') ? sessionStorage.getItem('name') : '');
    let [email, setEmail] = useState(sessionStorage.getItem('email') ? sessionStorage.getItem('email') : '');
    let [phone, setPhone] = useState(sessionStorage.getItem('phone') ? sessionStorage.getItem('phone') : '');
    let [address, setAddress] = useState('');
    let [cost, setCost] = useState('');
    let checkout = () => {
        let obj = {
            id: id,
            productName: productName,
            name: name,
            cost : cost,
        }
        fetch(purl, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
    }
    return (
        <>
            <div className="container">
                <form action="https://amazonpayment.herokuapp.com/paynow" method="POST">
                    <input type="hidden" name="cost" value={cost} />
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
                    <h2>Total Price is ₹{cost}</h2>
                    <button className="btn btn-success" onClick={checkout} type="submit">PlaceOrder</button>
                </form>
            </div>
        </>
    )
}
export default withRouter(Booking);