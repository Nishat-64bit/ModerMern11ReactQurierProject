import React from 'react'
import LocationList from './LocationList'

const LocationListComponent = ({ListItemParent,ListIcon}) => {
  return (
      <div>
        <LocationList LocationItem={ListItemParent}></LocationList>
      </div>
  )
}

export default LocationListComponent
