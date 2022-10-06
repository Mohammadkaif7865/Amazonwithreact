import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
const url = 'https://amazoncloneserver.herokuapp.com/details';
function Details(props) {
    const [detail, setDetail] = useState('');
    useEffect(() => {
        fetch(`${url}/${props.match.params.id}`, { method: 'GET' }).then((response) => response.json()).then((data) => setDetail(data));
    }, [])
    console.log(detail);
    return (
        <>
            <h1>This is detail page</h1>
        </>
    )
}
export default withRouter(Details);