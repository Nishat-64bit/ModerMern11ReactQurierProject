import React from 'react'

const Flex = ({className,children}) => {
  return (
    <div className={`CommonFlex ${className}`}>{children}</div>
  )
}

export default Flex
