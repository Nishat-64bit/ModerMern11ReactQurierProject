import React from 'react'

const FooterItem = ({heading,itemlists}) => {
  return (
    <>
      <div className="FooterItem">
            <h4>{heading?heading:"HeadingMissing"}</h4>
            <ul>
               {itemlists?.map((item)=>(
                <li key={item}>{item}</li>
               ))}
              
            </ul>
            </div>
    </>
  )
}

export default FooterItem
