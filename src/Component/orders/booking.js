import React from 'react';
import { withRouter } from 'react-router-dom';
function Booking(props) {
    console.log(props.match.params.id);
    return (
        <>
            <div className="continer">
                this is the booking page
            </div>
        </>
    )
}
export default withRouter(Booking);