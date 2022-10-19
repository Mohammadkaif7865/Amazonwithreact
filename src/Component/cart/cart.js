import React, { useEffect, useState } from 'react';
const favUrl = 'https://amazoncloneserver.herokuapp.com/cart';

function Cart() {
    const [allFav, setAllFav] = useState("");
    useEffect(() => {
        fetch(`${favUrl}/${sessionStorage.getItem('email')}`, { method: 'GET' }).then((response) => response.json()).then((responseData) => setAllFav(responseData));
    }, []);
    console.log(allFav);
    return (
        <>
            <h1>This is the Cart part</h1>
        </>
    )
}
export default Cart;