import React from "react";
import Flex from "../CommonComponet/Flex";
import Button from "../CommonComponet/Button";
import { FaArrowRight } from "react-icons/fa";
import BannerImg from '../../assets/banner.png'
import '../Banner/Banner.css'

const Banner = () => {
  return (
    <>
      <div className="BannerSection">
        <div className="container">

          <Flex className={"BannerFlex"}>
          <div className="BannerLeft">
            <h1 className="BannerTitle">A trusted provider of <span className="BannerTitleSpan">courier services.</span></h1>
            <p className="BannerDescription">We deliver your products safely to your home in a reasonable time.</p>
            <Button className={"GetBtn"}>Get started <span><FaArrowRight className="icon2"/></span></Button>
          
          </div>
            <div className="BannerRight">
              <picture>
                <img src={BannerImg} alt={BannerImg} />
              </picture>
            </div>
          </Flex>


        </div>
      </div>
    </>
  );
};

export default Banner;

