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
    scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
            /* you can also use 'auto' behaviour
                     in place of 'smooth' */
        });
    };
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
    componentDidMount() {
        this.scrollToTop();
    }
    render() {
        return (
            <>
                <div className="container" style={{ backgroundColor: "white" }}>
                    <form>
                        <legend className='bg bg-primary' style={{ margin: 0, padding: "10px", color: 'white' }}>Login</legend>
                        <div className="mb-3">
                            <label htmlFor="email">Email</label>
                            <input id="email" name="email" className="form-control"
                                value={this.state.email} onChange={this.handleChange} />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="fname">Password</label>
                            <input type="password" id="password" name="password" className="form-control"
                                value={this.state.password} onChange={this.handleChange} />
                        </div>
                        <button className="btn btn-info" type='button' onClick={this.handleSubmit}>Login</button>
                    </form>
                </div>
            </>
        )
    }
}

export default Login;