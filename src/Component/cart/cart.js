import React, { useEffect, useState } from 'react';
const favUrl = 'https://amazoncloneserver.herokuapp.com/cart';
const favUrlspec = 'https://amazoncloneserver.herokuapp.com/spacific';

function Cart() {
    const [toDisplay, setTodisplay] = useState([]);
    useEffect(() => {
        fetch(`${favUrl}/${sessionStorage.getItem('email')}`, { method: 'GET' }).then((response) => response.json()).then((responseData) => responseData.map((item) => setTodisplay(toDisplay.push(item.itemId))));
    }, []);
    useEffect(() => {
        fetch(favUrlspec, { method: 'GET', body: { items: toDisplay } }).then((response) => response.json()).then((responseData) => responseData.map((item) => setTodisplay(toDisplay.push(item.itemId))));
    }, [toDisplay]);
    console.log(toDisplay);
    return (
        <>
            <h1>This is the Cart part</h1>
        </>
    )
}
export default Cart;