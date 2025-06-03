import React from 'react'

function Hero() {
    return (<div className="container">
        <div className="row p-5 mt-5">
          <div className="col">
            <h1 className="text-center mb-4">Charges</h1>
            <h4 className="text-muted mb-4 fs-5 text-center">
            List of all charges and taxes
            </h4>
          </div>
        </div>
        <div className="row p-5">
          <div className="col-4" ><img style={{width:"70%" , marginLeft:"55px"}} src='media/images/pricing0.svg' />
          <h2 className="text-center">Free equity delivery</h2>
          <p className="text-center text-muted">All equity delivery investments (NSE, BSE),<br/> are absolutely free — ₹ 0 brokerage.</p>
          </div>
          <div className="col-4"><img style={{width:"70%" , marginLeft:"55px"}} src='media/images/intradayTrades.svg' />
          <h2 className="text-center">Intraday and F&O trades</h2>
          <p className="text-center text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per <br/> executed order on intraday trades across<br/>  equity, currency, and commodity trades. Flat<br/>  ₹20 on all option trades.</p></div>
          <div className="col-4"><img style={{width:"70%" , marginLeft:"55px"}} src='media/images/pricing0.svg' />
          <h2 className="text-center">Free direct MF</h2>
          <p className="text-center text-muted">All direct mutual fund investments are<br/>  absolutely free — ₹ 0 commissions & DP<br/>  charges.</p></div>
          </div>
        </div> );
}

export default Hero;