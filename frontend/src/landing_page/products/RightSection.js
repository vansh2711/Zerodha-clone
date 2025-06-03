import React from 'react'
import { Link } from 'react-router-dom';

function RightSection({imageURL,tryDemo,googlePlay,appStore,learnMore,productDescription,ProductName}) {
    return (<div className="container">
        <div className="row p-5">
            <div className="col-6 p-5">
                <h1 style={{marginTop:"110px"}} className="mx-5">{ProductName}</h1>
                <p className="mx-5">{productDescription}</p>
                <div className='mx-5'>
                    <Link to={"*"} style={{marginRight:"80px" , textDecoration:"none"}} >{learnMore} <i class="fa-solid fa-arrow-right"></i></Link>
                </div>
            
            </div>
            <div className="col-6">
                <img alt='hero' src={imageURL} />
            </div>
        </div>
    </div> );
}

export default RightSection;