import React from 'react'
import Menu from './component/Menu/menu.jsx'
import Banner from './component/Banner/Banner.jsx'
import Service from './component/Service/Service.jsx'
import Award from './component/Award/Award.jsx'
import Delivery from './component/Delivery/Delivery.jsx'
const App = () => {
  return (
    <div>
      <Menu />
      <Banner />
      <Service/>
      <Award/>
      <Delivery/>
    </div>
  )
}
export default App

