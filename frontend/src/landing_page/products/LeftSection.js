import React from 'react'
import { Link } from 'react-router-dom';

function LeftSection({imageURL,tryDemo,googlePlay,appStore,learnMore,productDescription,ProductName}) {
    return ( <div className="container">
        <div className="row p-5 mt-3">
            <div className="col-6">
                <img alt='hero' src={imageURL} />
            </div>
            <div className="col-6 p-5">
                <h1 className="mx-5">{ProductName}</h1>
                <p className="mx-5">{productDescription}</p>
                <div className='mx-5'>
                    <Link to={"*"} style={{marginRight:"80px" , textDecoration:"none" }} >{tryDemo} <i class="fa-solid fa-arrow-right"></i></Link>
                    <Link to={"*"} style={{marginRight:"80px" , textDecoration:"none"}} >{learnMore} <i class="fa-solid fa-arrow-right"></i></Link>
                </div>
                <div className="mx-5 mt-4">
                    <img alt='logo' style={{marginRight:"20px"}} src={googlePlay} />
                    <img alt='logo' src={appStore} />

                </div>
            </div>
        </div>
    </div> );
}

export default LeftSection;