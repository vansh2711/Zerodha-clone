import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="border-top"
      style={{ backgroundColor: "rgb(250,250,250)" }}
    >
      <div className="container p-5">
        <div className="row">
          <div className="col">
            <img
              src="media/images/logo.svg"
              style={{ width: "50%", marginBottom: "20px", fontSize: "10px" }}
            />
            <p style={{ fontSize: "13px" }}>
              &copy; 2010 - 2025, Zerodha Broking Ltd.<br></br> All rights
              reserved.
            </p>
            <div className="row">
              <div className="col">
                <i className="fa-brands fa-x-twitter"></i>
              </div>
              <div className="col">
                <i className="fa-brands fa-facebook"></i>
              </div>
              <div className="col">
                <i className="fa-brands fa-instagram"></i>
              </div>
              <div className="col">
                <i className="fa-brands fa-linkedin"></i>
              </div>
              <div className="col"></div>
              <div className="col"></div>
              <div className="col"></div>
            </div>
          </div>
          <div className="col">
            <h5 className="mb-3">Company</h5>
            <a style={{ textDecoration: "none" }}>
              About <br></br>
            </a>
            <a style={{ textDecoration: "none" }}>
              Products<br></br>
            </a>
            <a style={{ textDecoration: "none" }}>
              Pricing<br></br>
            </a>
            <a style={{ textDecoration: "none" }}>
              Referral programme<br></br>
            </a>
            <a style={{ textDecoration: "none" }}>
              Careers<br></br>
            </a>
            <a style={{ textDecoration: "none" }}>
              Zerodha.tech<br></br>
            </a>
            <a style={{ textDecoration: "none" }}>
              Open source<br></br>
            </a>
            <a style={{ textDecoration: "none" }}>
              Press & media<br></br>
            </a>
            <a style={{ textDecoration: "none" }}>
              Zerodha Cares (CSR)<br></br>
            </a>
          </div>
          <div className="col">
            <h5 className="mb-3">Support</h5>
            <a style={{ textDecoration: "none" }}>
              Contact us <br></br>
            </a>
            <a style={{ textDecoration: "none" }}>
              Support portal<br></br>
            </a>
            <a style={{ textDecoration: "none" }}>
              Z-Connect blog<br></br>
            </a>
            <a style={{ textDecoration: "none" }}>
              List of charges<br></br>
            </a>
            <a style={{ textDecoration: "none" }}>
              Downloads & resources<br></br>
            </a>
            <a style={{ textDecoration: "none" }}>
              Videos<br></br>
            </a>
            <a style={{ textDecoration: "none" }}>
              Market overview<br></br>
            </a>
            <a style={{ textDecoration: "none" }}>
              How to file a complaint?<br></br>
            </a>
            <a style={{ textDecoration: "none" }}>
              Status of your complaints<br></br>
            </a>
          </div>
          <div className="col">
            <h5 className="mb-3">Account</h5>
            <a style={{ textDecoration: "none" }}>
              Open an account <br></br>
            </a>
            <a style={{ textDecoration: "none" }}>
              Fund transfer<br></br>
            </a>
          </div>
        </div>
        <div className="mt-5 text-muted " style={{ fontSize: "10px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to <Link style={{textDecoration:"none"}}>complaints@zerodha.com</Link>, for DP related to <Link style={{textDecoration:"none"}}>dp@zerodha.com</Link>.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF{" "}
          </p>

          <p>
            {" "}
            Procedure to file a complaint on <Link style={{textDecoration:"none"}}>SEBI SCORES</Link>: Register on SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            Communication, Speedy redressal of the grievances{" "}
          </p>

          <p>
            <Link style={{textDecoration:"none"}}>Smart Online Dispute Resolution | Grievances Redressal Mechanism</Link>{" "}
          </p>

          <p>
            {" "}
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>

          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please  &nbsp;
             <Link style={{textDecoration:"none"}}>create a ticket here.</Link>
            
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
