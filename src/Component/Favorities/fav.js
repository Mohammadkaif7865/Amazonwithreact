import React, { useEffect, useState } from 'react';
const favUrl = 'https://amazoncloneserver.herokuapp.com/userfav';
const favUrlspec = 'https://amazoncloneserver.herokuapp.com/spacific';
function Fav() {
    const [toDisplay, setTodisplay] = useState('');
    const [display, setDisplay] = useState([]);
    const [show, setShow] = useState('');
    useEffect(() => {
        fetch(`${favUrl}/${sessionStorage.getItem('email')}`, { method: 'GET' }).then(response => response.json()).then(response => setTodisplay(response));
    }, []);
    useEffect(() => {
        if (toDisplay) {
            toDisplay.map((item) => {
                display.push(item.itemId);
                return 'ok';
            })
            fetch(`${favUrlspec}/${JSON.stringify(display)}`)
                .then((response) => response.json()).then((responseData) => setShow(responseData));
        }
    }, [toDisplay]);
    console.log(show);
    return (
        <>
            <h1>This is the favorities page</h1>
        </>
    )
}
export default Fav;