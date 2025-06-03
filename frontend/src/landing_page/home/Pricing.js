import React from 'react'
 function Pricing() {
    return (
      <div className="container p-2">
         <div className="row p-2">
            <div className="col-6">
               <h1 className="fs-2 mb-3"> Unbeatable pricing</h1>
               <p className='text-muted'>We pioneered the concept of discount broking and price <br></br> in India. Flat fees and no hidden charges.</p>
               <a href='*' style={{textDecoration:"none"}}> See pricing <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className="col-6 mb-5">
               <div className="row">
               <div className='col-4'><img src='media/images/pricing0.svg'  width={"65%"} alt='rs'/> 
               <p style={{fontSize:"10px"}}>Free account <br></br>
               opening</p></div>
               <div className='col-4'><img src='media/images/pricing0.svg'  width={"65%"} alt='rs'/>
               <p style={{fontSize:"10px"}}>Free equity delivery <br></br>
               and direct mutual funds</p>
               </div>
               <div className='col-4'><img src='media/images/intradayTrades.svg' width={"65%"} alt='rs'/>
               <p style={{fontSize:"10px"}}>Intraday and
             <br></br>
             F&O</p></div>
            </div>
            </div>
         </div>
      </div>
     );
 }
 
 export default Pricing;