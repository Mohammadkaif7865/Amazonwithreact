import React from 'react';
import { withRouter } from 'react-router-dom';
function Details(props) {
    console.log(props.match.params.id);
    return (
        <>
            <h1>This is detail page</h1>
        </>
    )
}
export default withRouter(Details);