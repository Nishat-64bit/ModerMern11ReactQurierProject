import React from 'react'
import Button from "../CommonComponet/Button";
import { IoHomeOutline } from "react-icons/io5";


import Servicelist from "../CommonComponet/Servicelist";
import ServiceBoxDescription from "../CommonComponet/ServiceBoxDescription";
const ServiceBox = ({descriptionParent,ServiceItemParent,ServiceBtn,btnstlye,ServiceTitle,ServiceIcon}) => {
  return (
    <>
       <div className="ServiceBox">
            <div className="serviceTop">
              <div className="icon3">
                <span className="iconColor">
                  {ServiceIcon?ServiceIcon:<IoHomeOutline />}
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
