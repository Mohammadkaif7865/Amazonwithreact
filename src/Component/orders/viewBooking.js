import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const url = 'https://amazoncloneserver.herokuapp.com/orderplaced';
const updateUrl = "https://amazoncloneserver.herokuapp.com/updateOrder"
const deleteUrl = "https://amazoncloneserver.herokuapp.com/deleteOrder"

class ViewOrder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            orders: ''
        }
    }
    scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
            /* you can also use 'auto' behaviour
                     in place of 'smooth' */
        });
    };
    deleteOrder = (id) => {
        fetch(`${deleteUrl}/${id}`, { method: 'DELETE' });
        setTimeout(() => {
            axios.get(`${url}?email=${sessionStorage.getItem('email')}`).then((res) => { this.setState({ orders: res.data }) })
        }, 1000);
    }
    render() {
        if (!sessionStorage.getItem('name')) {
            return (
                <div>

                    <center>
                        <h2>Login First To View Order</h2>
                    </center>
                </div>
            )

        }
        return (
            <>
                <div className="container">
                    {
                        this.state.orders ? null : <div className="spinner-border text-warning" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    }
                    {
                        this.state.orders ? this.state.orders.map((item, i) => {
                            return <div className="cardmy" key={i}>
                                <div className="cardmy-image">
                                    <Link to={`/details/${Number(item.productId)}`}>
                                        <img src={item.img} alt="img" />
                                    </Link>
                                </div>
                                <div className="discription">
                                    <h3>{item.productName}</h3>
                                    <h5>Booking Id : {item.id}</h5>
                                    <h5>Booking Time :{item.date}</h5>
                                    <h5>Payment Status :  {item.status}</h5>
                                    <h5>bank_name :  {item.bank_name}</h5>
                                    <h5>Cost : ₹ {item.cost}</h5>
                                    <h5>Quantity : {item.quantity}</h5>
                                    <h5>Delivery Address :  {item.address}</h5>
                                    <button className='btn btn-danger' onClick={() => this.deleteOrder(item.id)}>Cancel Order</button>
                                </div>
                            </div>
                        }) : <h2>Nothing in your cart</h2>
                    }
                </div>
            </>
        )
    }

    //api Call 
    componentDidMount() {
        if (this.props.location.search) {
            let queryp = this.props.location.search;
            let bank_name = '';
            queryp.split('&')[3].split('=')[1].split("%20").map((data) =>
                bank_name = bank_name + data
            )
            let date = '';
            queryp.split('&')[2].split('=')[1].split("%20").map((data) => date = date + " " + data)
            if (queryp) {
                let data = {
                    "status": queryp.split('&')[0].split('=')[1],
                    "date": date,
                    "bank_name": bank_name,
                }
                let id = queryp.split('&')[1].split('=')[1].split('_')[1];
                fetch(`${updateUrl}/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
            }
        }
        // ! onw sec delay beacuse of api ping
        setTimeout(() => {
            axios.get(`${url}?email=${sessionStorage.getItem('email')}`).then((res) => { this.setState({ orders: res.data }) })
        }, 1000);
        this.scrollToTop();

    }
}

export default ViewOrder;