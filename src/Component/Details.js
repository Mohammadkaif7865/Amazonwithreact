import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
const url = 'https://amazoncloneserver.herokuapp.com/details';
function Details(props) {
    const [details, setDetails] = useState('');
    useEffect(() => {
        fetch(`${url}/${props.match.params.id}`, { method: 'GET' }).then((response) => response.json()).then((data) => setDetails(data));
    }, [props.match.params.id]);


    return (
        <>
            <div className="container">
                {

                    details ?
                        <img src={details[0].images.img1.link} alt={details[0].images.img1.description} title={details[0].images.img1.description} />
                       
                : null
                }
            </div>
        </>
    )
}
export default withRouter(Details);