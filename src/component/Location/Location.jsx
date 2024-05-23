import React from 'react'
import './Location.css'
import AgainSectionHead from '../CommonComponet/AgainSectionHead'
import LocationImg from '../../assets/Location.png'
import Flex from '../CommonComponet/Flex'
import LocationListComponent from '../CommonComponet/LocationListComponent'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Button from '../CommonComponet/Button'
import { IoMdCall } from "react-icons/io";



const Location = () => {
  return (
    <>
      <section className='LocationSection'>
        <div className="container">
            <AgainSectionHead className={"two"}>
                <h3 className='LocationSectionHeadTitle'>FIND US</h3>
                <h2 className='LocationSectionHeadDetails'>Access us easily</h2>
            </AgainSectionHead>
            <Flex className={"LocationFlex"}>
                <div className='LocationMap'>
                    <picture>
                        <img src={LocationImg} alt={LocationImg}width={700}/>
                    </picture>
                </div>
                <div className='LocationContact'>
                    <h2 className='LocationContactTitle'>Contact with us</h2> 
                    <LocationListComponent ListItemParent={["2277 Lorem Ave, San Diego, CA 22553","Monday - Friday: 10 am - 10pm Sunday: 11 am - 9pm","info@quriarbox.com"]}/>
                    <span className='SocialIcon'><FaFacebookSquare /><FaInstagram className='insta'/><FaTwitter /></span>
                </div>
            </Flex>
            <Button className={"btnLocation"}><span className='callIcon'><IoMdCall /></span>Call us to delivery  123-456789</Button>
        </div>
      </section>
    </>
  )
}

export default Location
