import React, { useEffect, useState } from 'react';
import {
    withRouter
} from "react-router-dom";
const url = "https://authmdkaif.herokuapp.com/api/auth/getInfo";
function UserInfo(props) {
    const [user, setUser] = useState("");
    useEffect(() => {
        if (sessionStorage.getItem('x-access-token')) {
            fetch(url, {
                method: 'GET',
                headers: {
                    'x-access-token': sessionStorage.getItem('x-access-token')
                }
            })
                .then((res) => res.json())
                .then((data) => {
                    setUser(data);
                    sessionStorage.setItem('name', data.name);
                    sessionStorage.setItem('email', data.email);
                    sessionStorage.setItem('phone', data.phone);
                    props.setNameAuth(data.name);
                });
        }
        else {
            console.log('Invalid token');
        }
    }, [])

    return (
        <>
            {
                user ? <div className="container" style={{ backgroundColor: "white" }}>
                    <div >

                        <h3 className='bg bg-primary' style={{ margin: 0, padding: "10px", color: 'white' }}>UserInfo</h3>

                        <div style={{ padding: "10px" }}>
                            <p> <b>Name</b> : {user.name}</p>
                            <p> <b>Phone Number</b> : {user.phone}</p>
                            <p> <b>Email</b> : {user.email}</p>
                            <button onClick={() => props.history.go(-2)} className="btn btn-success">Go back</button>
                        </div>
                        <div>
                            <div style={{ textAlign: 'center' }}>
                                <small>Your info security and <u>privacy</u> is our top priority and we are compeletely <u>responsible</u> for any data breach</small>
                            </div>
                        </div>
                    </div>



                </div> :
                    <div className="container">
                        <img
                            src="https://i.ibb.co/GRf0ygr/1-Cs-J05-WEGfun-YMLGfs-T2s-XA.gif"
                            alt="loader"
                        />
                        {/* https://i.ibb.co/m6TSbQ6/loader-gif.gif
                    https://i.ibb.co/GRf0ygr/1-Cs-J05-WEGfun-YMLGfs-T2s-XA.gif"
https://i.ibb.co/30Fq85D/loader.gif                    */}
                        <h2>Loading....</h2>
                    </div>
            }
        </>
    )
}
export default withRouter(UserInfo);