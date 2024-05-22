import React from 'react'
import './Message.css'
import CenterLayout from '../CommonComponet/CenterLayout'
import Flex from '../CommonComponet/Flex'
import MessageImg from '../../assets/Message.png'
import Button from '../CommonComponet/Button'
import { FaTelegramPlane } from "react-icons/fa";


const Message = () => {
  return (
    <>
    <section className='MessageSection'>
        <div className="container">
        <CenterLayout className={"ExtraPadding"}>
           <Flex className={"MessageExtraFlex"}>
           <div className='MessageContent'>
            <div>
                <picture>
                    <img src={MessageImg} alt={MessageImg}/>
                </picture>
            </div>
            <div>
                <h4 className='MessageTitle'>REQUEST A CALLBACK</h4>
            </div>
            <div>
                <p className='MessageDescription'>We will contact in the shortest time.</p>
            </div>
            <div>
                <h4 className='MessageTime'>Monday to Friday, 9am-5pm.</h4>
            </div>
           </div>

            <div className='MessageInput'>
               
                   <form >
                   <input type="text" placeholder='Name' className='NameInput'/>
                    <input type="email" placeholder='Email' className='NameInput'/><br/>
                    <textarea  className='TextAreaInput' placeholder='Message'>

                    </textarea>
                    <Button className={"Messagebtn"}>Send Messages <span className='messageBtnIcon'><FaTelegramPlane /></span></Button>
                   </form>
            </div>
           </Flex>
        </CenterLayout>
        </div>
    </section>
    </>
  )
}

export default Message
