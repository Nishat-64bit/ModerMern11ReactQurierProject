import React from 'react'

import DeliveryDes from './DeliveryDes';
import DeliveryTitle from './DeliveryTitle';
const DeliveryItem = ({deliveryDescriptionParent,descriptionTitleParent,deliveryIcon}) => {
  return (
    <>
      <div className="DeliveryBox">
            <div className="icon7">
              <span className="deliveryIcon">
                {deliveryIcon}
              </span>
            </div>

            <DeliveryTitle title={descriptionTitleParent}/>

           <DeliveryDes descriptiondelivery={deliveryDescriptionParent}/>

          </div>
    </>
  )
}

export default DeliveryItem
