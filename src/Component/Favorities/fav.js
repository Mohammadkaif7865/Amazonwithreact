import React, { useEffect, useState } from 'react';
const favUrl = 'https://amazoncloneserver.herokuapp.com/userfav';

function Fav() {
    const [allFav, setAllFav] = useState("");
    useEffect(() => {
        fetch(`${favUrl}/${sessionStorage.getItem('email')}`, { method: 'GET' }).then((response) => response.json()).then((responseData) => setAllFav(responseData));
    }, []);
    console.log(allFav);
    return (
        <>
            <h1>This is the favorities part</h1>
        </>
    )
}
export default Fav;