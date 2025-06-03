import { Link } from 'react-router-dom'
import React from 'react'

function Team() {
    return ( 
    <div className="container">
        <div className="row p-5">
            <h1 className='text-center text-muted' style={{ marginBottom:"80px"}}>People</h1>

            <div className='col-6 text-center'>
                <img style={{borderRadius:"100%" ,width:"58%"}} src='media/images/nithinKamath.jpg'/>
                <h5 className="text-center text-muted mt-4 mb-3">Nithin Kamath</h5>
                <h6 className="text-muted">Founder, CEO</h6>
                 </div>
            <div className="col-6 mt-3">
            <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

            <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

            <p>Playing basketball is his zen.</p>

            <p>Connect on <Link style={{ textDecoration: "none" }}>HomePage</Link> / <Link style={{ textDecoration: "none" }}>TradingQnA </Link>/<Link style={{ textDecoration: "none" }}>Twitter</Link></p>
            </div>
        </div>
    </div>);
}

export default Team;