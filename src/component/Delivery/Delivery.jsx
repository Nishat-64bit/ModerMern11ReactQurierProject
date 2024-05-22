import React from "react";
import "./Delivery.css";
import DeliveryItem from "../CommonComponet/DeliveryItem";
import { FaPlay } from "react-icons/fa";
const Delivery = () => {
  return (
    <>
      <div className="DeliverySection">
        <div className="container">
          <DeliveryItem deliveryDescriptionParent={`You can get your valuable item in the fastest period of time
                with safety. Because your emergency
                is our first priority.`}
                descriptionTitleParent={`FASTEST DELIVERY`}
                deliveryIcon={<FaPlay />}
                />
        </div>
      </div>
    </>
  );
};

export default Delivery;
