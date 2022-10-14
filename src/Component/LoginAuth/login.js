import React, { Component } from 'react';

const url = "https://authmdkaif.herokuapp.com/api/auth/login";

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            message: ''
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = () => {
        fetch(url, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.auth === false) {
                    this.setState({ message: data.token })
                } else {
                    sessionStorage.setItem('x-access-token', data.token)
                    this.props.history.push('/userInfo')
                }
            })
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="card">
                        <div className="card-body">
                            <h5 className='bg bg-info' >Login</h5>
                            <div className="form-group col-md-6">
                                <label htmlFor="email">Email</label>
                                <input id="email" name="email" className="form-control"
                                    value={this.state.email} onChange={this.handleChange} />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="fname">Password</label>
                                <input type="password" id="password" name="password" className="form-control"
                                    value={this.state.password} onChange={this.handleChange} />
                            </div>
                            <button className="btn btn-info" onClick={this.handleSubmit}>Login</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Login;