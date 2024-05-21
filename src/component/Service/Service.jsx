import React from "react";
import SectionHead from "../CommonComponet/SectionHead";
import "../Service/Service.css";
import Flex from "../CommonComponet/Flex";
import ServiceBox from "../CommonComponet/ServiceBox";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { AiOutlineShop } from "react-icons/ai";
import { RiInkBottleLine } from "react-icons/ri";


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
            <ServiceBox
              descriptionParent={`We give you complete reliable delivery for your company. We will take full responsibility of the deliveries.`}
              ServiceItemParent={["Corporate goods", "Shipment", "Accesories"]}
              ServiceBtn={"Learn more"}
              btnstlye={"serviceBtnitem"}
              ServiceTitle={"Business Services"}
              ServiceIcon = {<HiMiniShoppingBag />}
            />

            <ServiceBox  descriptionParent={`Offering home delivery around the city, where your products will be at your doorstep within 48-72 hours.`}
              ServiceItemParent={["Personal items", "Percels", "Documents"]}
              ServiceBtn={"Learn more"}
              btnstlye={"serviceBtnitem"}
              ServiceTitle={"Home Services"}
              ServiceIcon = {<AiOutlineShop />}
              />

            <ServiceBox  descriptionParent={`You can trust us to safely deliver your most sensitive documents to the specific area in a short time.`}
              ServiceItemParent={["Gifts", "Package", "Documents"]}
              ServiceBtn={"Learn more"}
              btnstlye={"serviceBtnitem"}
              ServiceTitle={"Personal Services"}
              ServiceIcon = {<RiInkBottleLine />}
              />
          </Flex>
        </div>
      </div>
    </>
  );
};

export default Service;
