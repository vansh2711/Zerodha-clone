import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import { Link } from "react-router-dom";
import Universe from "./Universe";

function ProductPage() {
  return (
    <div>
      <Hero />
      <LeftSection
        imageURL="media/images/kite.png"
        tryDemo="Try demo"
        googlePlay="media/images/googlePlayBadge.svg"
        learnMore="Learn more"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        ProductName="Kite"
        appStore="media/images/appstoreBadge.svg"
      />

      <RightSection
      imageURL="media/images/console.png"   
      learnMore="Learn more"
      productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
      ProductName="Console"
    />
      <LeftSection
        imageURL="media/images/coin.png"
        tryDemo="Coin"
        googlePlay="media/images/googlePlayBadge.svg"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        ProductName="Coin"
        learnMore="Learn more"
        appStore="media/images/appstoreBadge.svg"
      />
      <RightSection
      imageURL="media/images/kiteconnect.png"   
      learnMore="Kite Connect "
      productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
      ProductName="Kite Connect API" />

      <LeftSection
        imageURL="media/images/varsity.png"
        tryDemo="Try demo"
        googlePlay="media/images/googlePlayBadge.svg"
        learnMore="Learn more"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        ProductName="Kite"
        appStore="media/images/appstoreBadge.svg"
      />
      <h4 className="text-muted text-center mb-5">Want to know more about our technology stack? Check out the <Link style={{textDecoration:"none"}}>Zerodha.tech </Link> blog.</h4>

      <Universe/>

    </div>
  );
}

export default ProductPage;
