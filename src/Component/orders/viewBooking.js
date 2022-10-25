import React, { Component } from 'react';
import axios from 'axios';

// http://localhost:9100/orders
// https://restaurantmysite.herokuapp.com/orders
const url = 'https://amazoncloneserver.herokuapp.com/orderplaced';
const updateUrl = "https://amazoncloneserver.herokuapp.com/updateOrder"

class ViewOrder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            orders: ''
        }
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
                <h1>This is viewBooking page</h1>
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
                console.log(id);
                fetch(`${updateUrl}/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                }).then((response) => response.json()).then((responseData) => console.log(responseData));
            }
        }
        // ! onw sec delay beacuse of api ping
        setTimeout(() => {
            axios.get(`${url}?email=${sessionStorage.getItem('email')}`).then((res) => { this.setState({ orders: res.data }) })
        }, 1000);

    }
}

export default ViewOrder;