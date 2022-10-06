import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
const url = 'https://amazoncloneserver.herokuapp.com/details';
const defaultImg = "https://i.ibb.co/G3gRQ34/defaultimg.jpg";
function Details(props) {
    const [details, setDetails] = useState('');
    useEffect(() => {
        fetch(`${url}/${props.match.params.id}`, { method: 'GET' }).then((response) => response.json()).then((data) => setDetails(data));
    }, [props.match.params.id]);


    return (
        <>
            <div className="container">
                <img src={details.length > 0 && details[0].images.img1.link ? details[0].images.img1.link : defaultImg} alt="img" />
            </div>
        </>
    )
}
export default withRouter(Details);