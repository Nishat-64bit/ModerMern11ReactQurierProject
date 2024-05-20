import React from 'react'
import "./menu.css"
const menulist = ({menuitem}) => {

  return (
    <div>
      <ul className='menulistUl'>
        {menuitem.map((item)=>(
            <li className='itemEach'>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default menulist


// const menulist = ({menuitem}) => {
    
    // props theke kono kicu distructer mane ber korte hoe tahole 
    // const {menuitem} = props
    // console.log({menuitem});
//   return (
//     <div>
//       MeNu list
//     </div>
//   )
// }
