import React from 'react'
import { IoLocationOutline } from "react-icons/io5";

const LocationList = ({LocationItem}) => {
  return (
    <div>
      <ul>
        {LocationItem?.map((items)=>(
            <li className='LocationList' key={items}><span className='LocaitonIcon'><IoLocationOutline /></span>{items}</li>
        ))}
      </ul>
    </div>
  )
}

export default LocationList
