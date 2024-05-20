import React from 'react'

const Servicelist = ({ServiceItem}) => {
  return (
    <div>
      <ul>
        {ServiceItem?.map((item)=>(
            <li className="serviceListItem" key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Servicelist
