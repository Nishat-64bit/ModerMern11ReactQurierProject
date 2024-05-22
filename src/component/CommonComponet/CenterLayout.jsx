import React from 'react'

const CenterLayout = ({className,children}) => {
  return (
    <div className={`CenterLayout ${className}`}>{children}</div>
  )
}

export default CenterLayout
