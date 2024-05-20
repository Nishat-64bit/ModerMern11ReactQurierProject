import React from 'react'
import Logo from '../../assets/Logo.png'
import Menulist from './menulist.jsx'
import Button from '../CommonComponet/Button.jsx'
import { CiSearch } from "react-icons/ci";
import './menu.css'
import '../../common/common.css'
import Flex from '../CommonComponet/Flex.jsx';
const menu = () => {
  return (
    <div className="Navbar">

      <div className="container">
        <div className="MenuParent">
        <div className="logo">
          <picture>
            <img src={Logo} alt={Logo} />
          </picture>
        </div>
        <div>
          <Menulist menuitem={["Home", "Our services", "About Us", "What's new?"]} />
        </div>

        <Flex className={"ExtraFlex"}>
         
         <Button className={"Searchbtn"}><span><CiSearch  className='icon'/></span></Button>
         <Button className={"btn"}><span>Contact us</span></Button>
          {/* amr dorkar aaro 1ta btn taile just copy paste koren , children o change korte parven and sate classname o  */}
        </Flex>
        </div>
      </div>
    </div>
  )
}

export default menu
