import React, { useImperativeHandle } from "react";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="Container">
      <div className="row p-5">
        <div className="col">
          <h1 className="text-center fs-2 mt-5">
            We pioneered the discount broking model in India.
            <br />
            Now, we are breaking ground with our technology.
          </h1>
        </div>
      </div>
      <div className="row p-5 ">
        <div className="col-2"></div>
        <div className="col-4 border-top">
          <p
            className="text-muted"
            style={{ fontSize: "17px", marginTop: "100px" }}
          >
            We kick-started operations on the 15th of August, 2010 <br /> with
            the goal of breaking all barriers that traders and <br />
            investors face in India in terms of cost, support, and <br />{" "}
            technology. We named the company Zerodha, a<br /> combination of
            Zero and "Rodha", the Sanskrit word for
            <br /> barrier.
          </p>

          <p className="text-muted" style={{ fontSize: "17px" }}>
            Today, our disruptive pricing models and in-house <br />
            technology have made us the biggest stock broker in
            <br /> India.
          </p>

          <p className="text-muted" style={{ fontSize: "17px" }}>
            Over 1+ Crore clients place millions of orders every day <br />
            through our powerful ecosystem of investment
            <br /> platforms, contributing over 15% of all Indian retail
            <br /> trading volumes.
          </p>
        </div>
        <div className="col-4 border-top">
          <p
            className="text-muted"
            style={{ fontSize: "17px", marginTop: "100px" }}
          >
            In addition, we run a number of popular open online <br />{" "}
            educational and community initiatives to empower retail <br />{" "}
            traders and investors.
          </p>

          <p className="text-muted" style={{ fontSize: "17px" }}>
            {" "}
            <Link style={{ textDecoration: "none" }}>Rainmatter</Link>, our
            fintech fund and incubator, has invested
            <br /> in several fintech startups with the goal of growing the{" "}
            <br />
            Indian capital markets.
          </p>

          <p className="text-muted" style={{ fontSize: "17px" }}>
            And yet, we are always up to something new every day.
            <br /> Catch up on the latest updates on our<Link style={{textDecoration:"none"}}>blog,</Link> or see what
            <br /> the media is <Link style={{textDecoration:"none"}}>saying about us. </Link> saying about us.or learn more about our business and product <Link style={{textDecoration:"none"}}>philosophies</Link>.  
          </p> 
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default Hero;
