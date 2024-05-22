import React from "react";
import "./Testimonial.css";
import AgainSectionHead from "../CommonComponet/AgainSectionHead";
import Quote from '../../assets/Quote.png'
import Flex from '../CommonComponet/Flex'
import { FaStar } from "react-icons/fa6";
import ClientImg from '../../assets/Avatar.png'

const Testimonial = () => {
  return (
    <>
      <div className="TestimonialSection">
        <div className="container">
          <AgainSectionHead className={"TestimonialHead"} >
            <Flex className={"TestimonialFlex"}>
            <div>
                <picture>
                    <img src={Quote} alt={Quote} />
                </picture>
            </div>
            <div>
              <h3 className="testimonialTitle">TESTIMONIAL</h3>
              <h2 className="testimonialClient">Our Awesome Clients</h2>
            </div>
            </Flex>
          </AgainSectionHead>
          <div className="TestimonialBox">
            {/* title & Description */}
           <div className="TestimonialTitleDes">
           <h3 className="TestimonialBoxTitle">Fantastic service!</h3>
            <p className="TestiomonialBoxDescription">I purchased a phone from an e-commerce site, and this courier service provider assisted me in getting it delivered to my home. I received my phone within one day, and I was really satisfied with their service when I received it. They are really quick and dependable. They give me with the option of real-time delivery status, which allows me to track the progress of my goods delivery. I get a lot of questions from call center support and key account managers. They come highly recommended. Confidently say that they are really reliable.</p>
           </div>
            {/* title & Description */}

            <Flex className={"StarAndClientFlex"}>
            <span className="StarIcon"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>

            <Flex >
               <div> <h4 className="ClientName">Yves Tanguy</h4>
                <p className="ClientPostion">Chief Executive, DLF</p>
                </div>

               <div>
                <img src={ClientImg} alt={ClientImg} className="ImgClient" />
               </div>
            </Flex>
            </Flex>
           
       
          </div>

        </div>
      </div>
    </>
  );
};

export default Testimonial;
