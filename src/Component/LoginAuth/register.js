import React, { Component } from 'react';


const url = "https://authmdkaif.herokuapp.com/api/auth/register";

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            password: '',
            phone: ''
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
            .then(this.props.history.push('/login'))
    }
    componentDidMount() {
        this.scrollToTop();
    }
    render() {
        return (
            <>
                <div className="container" style={{ backgroundColor: "white" }}>
                    <form>
                        <legend className='bg bg-primary' style={{ margin: 0, padding: "10px", color: 'white' }}>Register</legend>
                        <div class="mb-3">
                            <label htmlFor="email">Email</label>
                            <input id="email" name="email" className="form-control"
                                value={this.state.email} onChange={this.handleChange} />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label htmlFor="fname">Name</label>
                            <input id="fname" name="name" className="form-control"
                                value={this.state.name} onChange={this.handleChange} />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="fname">Password</label>
                            <input type="password" id="password" name="password" className="form-control"
                                value={this.state.password} onChange={this.handleChange} />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="phone">Phone</label>
                            <input id="phone" name="phone" className="form-control"
                                value={this.state.phone} onChange={this.handleChange} />
                        </div>
                        <button className="btn btn-success" type='button' onClick={this.handleSubmit}>Register</button>
                    </form>
                </div>
            </>

        )
    }
}

export default Register;