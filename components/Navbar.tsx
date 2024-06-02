import React from 'react'
import DesktopNavbar from './DesktopNavbar'
import MobileNavbar from './MobileNavbar'

const Navbar = () => {
  return (
    <div className='p-4 px-0'>
        <DesktopNavbar classnames='md:block hidden'/>
        <MobileNavbar classnames='md:hidden '/>
    </div>
  )
}

export default Navbar