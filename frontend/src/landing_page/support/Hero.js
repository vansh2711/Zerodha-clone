import React from 'react'
import { Link } from 'react-router-dom';

function Hero() {
    return ( <section className="container-fluid" id='supportwrapper'>
        <div className="row p-5">
            <div id='first'><h3>Support Portal</h3>
            <Link id='link'> Track tickets</Link>
            </div>
            <div className="col-6 p-5">
                <h3 className="fs-4 mb-4">Search for an answer or browse help topics to create a ticket</h3>
                <input className='mb-4' id='input' style={{outline:"none"}} placeholder='Eg: how do i activate F&O, why is my order getting rejected ...' /><br/>
                <Link id='link-down' > Track account opening</Link>
                <Link id='link-down'>  Track segment activation</Link>
                <Link id='link-down' >  Intraday margins</Link>
                <Link id='link-down'> Kite user manual</Link>
            </div>
            <div className="col-6 p-5">
                <h3>Featured</h3>
                <ol>
                    <li id='ol'><Link id='li'>MCX Option contracts expiry - April 2025</Link></li>
                    <li><Link id='li'>MCX Base metals contract expiry - April 2025</Link></li>
                </ol>
            </div>
        </div>
    </section> );
}

export default Hero;