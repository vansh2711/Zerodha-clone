import React from 'react'

function Education() {
    return ( <div className="container p-2 mt-5">
        <div className="row p-2">
            <div className="col-6">
            <div className="">
                <img src='media/images/education.svg' alt='edu' style={{width:"70%"}}/>
            </div>
            </div>
           <div className="col-6">
              <h1 className="fs-2 mb-3"> Free and open market education</h1>
              <p className='text-muted '>Varsity, the largest online stock market education book in the world <br></br> covering everything from the basics to advanced trading.</p>
              <a href='*' style={{textDecoration:"none", marginBottom:"20px"}}> Varsity <i class="fa-solid fa-arrow-right"></i></a>

              <p className='text-muted mt-5'>TradingQ&A, the most active trading and investment community in<br></br> India for all your market related queries.</p>
              <a href='*'  style={{textDecoration:"none"}}> TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
           </div>
        </div>
     </div> );
}

export default Education;