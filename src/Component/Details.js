import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
const url = 'https://amazoncloneserver.herokuapp.com/details';
function Details(props) {
    const [details, setDetails] = useState('');
    useEffect(() => {
        fetch(`${url}/${props.match.params.id}`, { method: 'GET' }).then((response) => response.json()).then((data) => setDetails(data[0]));
    }, [props.match.params.id])
    console.log(details.images.img1.link);
    return (
        <>
            <div className="container">
              
            </div>
        </>
    )
}
export default withRouter(Details);