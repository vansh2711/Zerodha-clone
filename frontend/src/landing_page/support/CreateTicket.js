import React from 'react'
import {Link} from "react-router-dom";

function CreateTicket() {
    return ( 
        <div className="container">
        <div className="row p-5 mt-5">
            <h4 className="text-muted mx-5">To create a ticket, select a relevant topic</h4>
            <div className="col-4 p-5">
                <h5 className="mt-4 mb-4 text-muted"><i class="fa-solid fa-circle-plus"></i> &nbsp;Account Opening</h5>
                <Link style={{textDecoration:"none", marginLeft:"30px",lineHeight:"2.5",fontSize:"14px"}}>Resident individual</Link> <br />
                <Link style={{textDecoration:"none", marginLeft:"30px",lineHeight:"2.5",fontSize:"14px"}}>Minor</Link><br />
                <Link style={{textDecoration:"none", marginLeft:"30px",lineHeight:"2.5",fontSize:"14px"}}>Non Resident Indian (NRI)</Link><br />
                <Link style={{textDecoration:"none", marginLeft:"30px",lineHeight:"2.5",fontSize:"14px"}}>Company, Partnership, HUF and LLP</Link><br />
                <Link style={{textDecoration:"none", marginLeft:"30px",lineHeight:"2.5",fontSize:"14px"}}>Glossary</Link><br />
            </div>
            <div className="col-4 p-5">
                <h5 className="mt-4 mb-4 text-muted"><i class="fa-regular fa-user"></i> &nbsp; Your Zerodha Account</h5>
                <Link style={{textDecoration:"none", marginLeft:"30px",lineHeight:"2.5",fontSize:"14px"}}>Your Profile</Link> <br />
                <Link style={{textDecoration:"none", marginLeft:"30px",lineHeight:"2.5",fontSize:"14px"}}>Account modification</Link><br />
                <Link style={{textDecoration:"none", marginLeft:"30px",lineHeight:"2.5",fontSize:"14px"}}>Client Master Report (CMR) and Depository</Link><br />
                <Link style={{textDecoration:"none", marginLeft:"30px",lineHeight:"2.5",fontSize:"14px"}}>Participant (DP)</Link><br />
                <Link style={{textDecoration:"none", marginLeft:"30px",lineHeight:"2.5",fontSize:"14px"}}>Nomination</Link><br />
                <Link style={{textDecoration:"none", marginLeft:"30px",lineHeight:"2.5",fontSize:"14px"}}>Transfer and conversion of securities</Link><br />
            </div>
            <div className="col-4 p-5">
                <h5 className="mt-4 mb-4 text-muted"><i class="fa-solid fa-chart-simple"></i> &nbsp;Kite</h5>
                <Link style={{textDecoration:"none", marginLeft:"30px",lineHeight:"2.5",fontSize:"14px"}}>IPOl</Link> <br />
                <Link style={{textDecoration:"none", marginLeft:"30px",lineHeight:"2.5",fontSize:"14px"}}>Trading FAQs</Link><br />
                <Link style={{textDecoration:"none", marginLeft:"30px",lineHeight:"2.5",fontSize:"14px"}}>Margin Trading Facility (MTF) and Margins</Link><br />
                <Link style={{textDecoration:"none", marginLeft:"30px",lineHeight:"2.5",fontSize:"14px"}}>ACharts and orders</Link><br />
                <Link style={{textDecoration:"none", marginLeft:"30px",lineHeight:"2.5",fontSize:"14px"}}>Alerts and Nudges</Link><br />
                <Link style={{textDecoration:"none", marginLeft:"30px",lineHeight:"2.5",fontSize:"14px"}}>General</Link><br />

            </div>

            <div className="col-4 p-5">
                <h5 className="mb-4 text-muted"><i class="fa-solid fa-briefcase"></i> &nbsp; Funds</h5>
                <Link style={{textDecoration:"none", marginLeft:"30px",lineHeight:"2.5",fontSize:"14px"}}>Add money</Link> <br />
                <Link style={{textDecoration:"none", marginLeft:"30px",lineHeight:"2.5",fontSize:"14px"}}>Withdraw money</Link><br />
                <Link style={{textDecoration:"none", marginLeft:"30px",lineHeight:"2.5",fontSize:"14px"}}>Add bank accounts</Link><br />
                <Link style={{textDecoration:"none", marginLeft:"30px",lineHeight:"2.5",fontSize:"14px"}}>eMandates</Link><br />
            </div>
            <div className="col-4 p-5">
                <h5 className="mb-4 text-muted"><i class="fa-solid fa-network-wired"></i>&nbsp;Console</h5>
                <Link style={{textDecoration:"none", marginLeft:"30px",lineHeight:"2.5",fontSize:"14px"}}>Portfolio</Link> <br />
                <Link style={{textDecoration:"none", marginLeft:"30px",lineHeight:"2.5",fontSize:"14px"}}>Corporate actions</Link><br />
                <Link style={{textDecoration:"none", marginLeft:"30px",lineHeight:"2.5",fontSize:"14px"}}>Funds statement</Link><br />
                <Link style={{textDecoration:"none", marginLeft:"30px",lineHeight:"2.5",fontSize:"14px"}}>Reports</Link><br />
                <Link style={{textDecoration:"none", marginLeft:"30px",lineHeight:"2.5",fontSize:"14px"}}>Profile</Link><br />
                <Link style={{textDecoration:"none", marginLeft:"30px",lineHeight:"2.5",fontSize:"14px"}}>Segments</Link><br />
            </div>
            <div className="col-4 p-5">
                <h5 className="mb-4 text-muted"><i class="fa-solid fa-compact-disc"></i> &nbsp;Coin</h5>
                <Link style={{textDecoration:"none", marginLeft:"30px",lineHeight:"2.5",fontSize:"14px"}}>Understanding mutual funds and Coin</Link> <br />
                <Link style={{textDecoration:"none", marginLeft:"30px",lineHeight:"2.5",fontSize:"14px"}}>Coin app</Link><br />
                <Link style={{textDecoration:"none", marginLeft:"30px",lineHeight:"2.5",fontSize:"14px"}}>Coin web</Link><br />
                <Link style={{textDecoration:"none", marginLeft:"30px",lineHeight:"2.5",fontSize:"14px"}}>Transactions and reports</Link><br />
                <Link style={{textDecoration:"none", marginLeft:"30px",lineHeight:"2.5",fontSize:"14px"}}>National Pension Scheme (NPS)</Link><br />
            </div>
        </div>
    </div>
     );
}

export default CreateTicket;