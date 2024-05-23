import React from "react";
import "./Footer.css";
import Flex from "../CommonComponet/Flex";
const Footer = () => {
  return (
    <>
      <section className="FooterUpper">
        <div className="container">
          <Flex className={"footerUpperExtraFlex"}>
            <div className="FooterLeft">
              <h2 className="FooterLeftTitle">Get an update every week</h2>
              <p className="FooterLeftDescription">
                We ensure that your product is delivered in the safest possible
                manner, at the correct location, at the right time.
              </p>
            </div>
            <div className="FooterRight">
                <h3 className="FooterRightTitle">SUBSCRIBE TO NEWSLETTER</h3>
                <div>
                    <form>
                        <input type="email" placeholder="Enter your mail" className="inputEmails"/>
                        <button type="submit"className="btnSusbscibe" >Subscribe</button>
                    </form>

                </div>
            </div>
          </Flex>
        </div>
      </section>
      <section className="FooterCopyRightSection">
        <div className="container">
            <Flex className={"FooterCopyrightExtraFlex"}>
                <div>
                    <p className="Footercopyright">All rights Reserved © Your Company, 2021</p>
                </div>
                <div>
                    <h5 className="FooterCopyrighth5">Made with heart by <span className="FooterCopyrightSpan">ThemeWagon</span></h5>
                </div>
            </Flex>
        </div>
      </section>
    </>
  );
};

export default Footer;
