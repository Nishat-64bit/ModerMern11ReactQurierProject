import React from 'react'
import Button from "../CommonComponet/Button";
import { HiMiniShoppingBag } from "react-icons/hi2";
import Servicelist from "../CommonComponet/Servicelist";
import ServiceBoxDescription from "../CommonComponet/ServiceBoxDescription";
const ServiceBox = ({descriptionParent,ServiceItemParent,ServiceBtn,btnstlye,ServiceTitle}) => {
  return (
    <>
       <div className="ServiceBox">
            <div className="serviceTop">
              <div className="icon">
                <span className="iconColor">
                  <HiMiniShoppingBag />
                </span>
              </div>
              <h3 className="ServiceBoxTitle">{ServiceTitle ? ServiceTitle :"Heading Missing"}</h3>
            </div>

            <ServiceBoxDescription
              description={descriptionParent}/>

            <Servicelist ServiceItem={ServiceItemParent}/>

            <Button className={btnstlye} >{ServiceBtn}</Button>
            
          </div>
    </>
  )
}

export default ServiceBox
