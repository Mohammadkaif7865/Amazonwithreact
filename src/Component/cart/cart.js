import React, { useEffect, useState } from 'react';
const favUrl = 'https://amazoncloneserver.herokuapp.com/cart';
const favUrlspec = 'https://amazoncloneserver.herokuapp.com/spacific';

function Cart() {
    const [toDisplay, setTodisplay] = useState('');
    const [display, setDisplay] = useState([]);
    useEffect(() => {
        fetch(`${favUrl}/${sessionStorage.getItem('email')}`, { method: 'GET' }).then(response => response.json()).then(response => setTodisplay(response));
    }, []);
    useEffect(() => {
        if (toDisplay) {
            toDisplay.map((item) => {
                display.push(item.itemId);
                return 'ok';
            })
            console.log(display);
            fetch(`${favUrlspec}/${JSON.stringify(display)}`)
                .then((response) => response.json()).then((responseData) => setDisplay(responseData));
        }
    }, [toDisplay]);
    // console.log(display);
    return (
        <>
            <h1>This is the Cart part</h1>
        </>
    )
}
export default Cart;