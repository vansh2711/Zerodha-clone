import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row p-5 mt-5">
        <div className="col">
          <h1 className="text-center mb-4">The Zerodha Universe</h1>
          <h4 className="text-muted mb-4 fs-6 text-center">
            Extend your trading and investment experience even further with our
            partner platforms
          </h4>
        </div>
      </div>
      <div className="row p-2">
        <div className="col-4 p-4">
          <img
            style={{ width: "50%",marginLeft:"100px" , marginBottom: "20px" }}
            alt="logo"
            src="media/images/zerodhafundhouse.png"
          />
          <p style={{ fontSize: "12px" }} className="text-muted text-center">
            Our asset management venture
            <br /> that is creating simple and transparent index <br />
            funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-4">
          <img
            style={{ width: "70%",marginLeft:"80px" , marginBottom: "20px" }}
            alt="logo"
            src="media/images/sensibullLogo.svg"
          />
          <p style={{ fontSize: "12px" }} className="text-muted text-center">
            Options trading platform that lets you <br />
            create strategies, analyze positions, and examine <br /> data points
            like open interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-4 p-4">
          <img
            style={{ width: "40%", marginLeft:"100px"}}
            alt="logo"
            src="media/images/tijori.svg"
          />
          <p style={{ fontSize: "12px" }} className="text-muted text-center">
            Investment research platform <br />
            that offers detailed insights on stocks, <br /> sectors, supply
            chains, and more.
          </p>
        </div>
        <div className="col-4 p-4">
          <img
            style={{ width: "40%",marginLeft:"110px" , marginBottom: "20px" }}
            alt="logo"
            src="media/images/streakLogo.png"
          />
          <p style={{ fontSize: "12px" }} className="text-muted text-center">
            Systematic trading platform <br /> that allows you to create and backtest<br />
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-4">
          <img
            style={{ width: "60%",marginLeft:"80px" , marginBottom: "10px" }}
            alt="logo"
            src="media/images/smallcaseLogo.png"
          />
          <p style={{ fontSize: "12px" }} className="text-muted text-center">
            Thematic investing platform<br /> that helps you invest in diversified<br />
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-4">
          <img
            style={{ width: "40%",marginLeft:"100px" , marginBottom: "10px" }}
            alt="logo"
            src="media/images/ditto-logo.png"
          />
          <p style={{ fontSize: "12px" }} className="text-muted text-center">
            Personalized advice on life<br /> and health insurance. No spam<br /> and no
            mis-selling.
          </p>
        </div>
          <button className='btn btn-primary p-2 fs-5 mt-4 mb-5' style={{width:"20%", margin:"0 auto"}} >Sign Up for Free</button>
      </div>
    </div>
  );
}

export default Universe;
