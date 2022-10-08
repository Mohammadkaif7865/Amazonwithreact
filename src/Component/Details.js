import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import './detail.css';
const url = 'https://amazoncloneserver.herokuapp.com/details';
const defaultImg = "https://i.ibb.co/G3gRQ34/defaultimg.jpg";
function Details(props) {
    const [details, setDetails] = useState('');
    const [whichOne, setWhichOne] = useState(1);
    useEffect(() => {
        fetch(`${url}/${props.match.params.id}`, { method: 'GET' }).then((response) => response.json()).then((data) => setDetails(data));
    }, [props.match.params.id]);

    console.log(details);
    return (
        <>
            <div className='topOfdetail'>
                <p>
                    {details.length > 0 ? details[0].category : "-----"}
                </p>
                <p>
                    {details.length > 0 ? details[0].sub_category : "-----"}
                </p>
                <p>
                    {details.length > 0 ? details[0].brand : "-----"}
                </p>
            </div>
            <div className='details-pro'>
                <div className='detail-pic'>
                    <div className="bigOne">
                        {
                            whichOne === 1 ? <img src={details.length > 0 && details[0].images.img1 ? details[0].images.img1.link : defaultImg} alt="img" /> : null
                        }
                        {
                            whichOne === 2 ? <img src={details.length > 0 && details[0].images.img2 ? details[0].images.img2.link : defaultImg} alt="img" /> : null
                        }
                        {
                            whichOne === 3 ? <img src={details.length > 0 && details[0].images.img3 ? details[0].images.img3.link : defaultImg} alt="img" /> : null
                        }
                        {
                            whichOne === 4 ? <img src={details.length > 0 && details[0].images.img4 ? details[0].images.img4.link : defaultImg} alt="img" /> : null
                        }
                    </div>
                    <div className="button-pics">
                        <button onClick={() => setWhichOne(1)}>
                            <img className='button-img' src={details.length > 0 && details[0].images.img1 ? details[0].images.img1.link : defaultImg} alt="img" />
                        </button>
                        <button onClick={() => setWhichOne(2)}>
                            <img className='button-img' src={details.length > 0 && details[0].images.img2 ? details[0].images.img2.link : defaultImg} alt="img" />
                        </button>
                        <button onClick={() => setWhichOne(3)}>
                            <img className='button-img' src={details.length > 0 && details[0].images.img3 ? details[0].images.img3.link : defaultImg} alt="img" />
                        </button>
                        <button onClick={() => setWhichOne(4)}>
                            <img className='button-img' src={details.length > 0 && details[0].images.img4 ? details[0].images.img4.link : defaultImg} alt="img" />
                        </button>
                    </div>
                </div>
                <div className="description">
                    <h1>{details.length > 0 ? details[0].name : "-----"}</h1>
                </div>
            </div>
        </>
    )
}
export default withRouter(Details);