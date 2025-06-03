import React from 'react'
import { Link } from 'react-router-dom';

function Hero() {
    return ( <div className="container">
        <div className="row p-5 mt-5 border-bottom">
            <div className="col">
                <h1 className="text-center mb-4">Zerodha Products</h1>
                <h4 className="text-muted mb-4 text-center">Sleek, modern, and intuitive trading platforms</h4>
                <p className="text-center mb-5">Check out our
              <Link to={"*"} style={{textDecoration:"none", marginBottom:"20px"}}> investment offerings <i class="fa-solid fa-arrow-right"></i></Link>
              </p>
            </div>
        </div>
    </div> );
}

export default Hero;