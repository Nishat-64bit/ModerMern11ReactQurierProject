import React from "react";
import SectionHead from "../CommonComponet/SectionHead";
import "../Service/Service.css";
import Flex from '../CommonComponet/Flex'
import ServiceBox from "../CommonComponet/ServiceBox";
const Service = () => {
  return (
    <>
      <div className="ServiceSection">
        <div className="container">
          <SectionHead className={"sectionHead"}>
            <div>
              <h3 className="serviceSubtitle">SERVICES</h3>
              <h2 className="servicetitle">Our services for you</h2>
            </div>
          </SectionHead>

            <Flex className={"serviceFlex"}>
            <ServiceBox descriptionParent={`We give you complete reliable delivery for your company. We will take full responsibility of the deliveries.`}
            ServiceItemParent = {["Corporate goods", "Shipment", "Accesories"]}
            ServiceBtn={"Learn more"}
            btnstlye={"serviceBtnitem"}
            ServiceTitle={'Business Services'}
            />

            <ServiceBox/>
            <ServiceBox/>
            </Flex>
        </div>
      </div>
    </>
  );
};

export default Service;
