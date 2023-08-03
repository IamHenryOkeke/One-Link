import { Link } from 'react-router-dom'
import { ReactComponent as MenuClose } from '../../assets/svg/menuClose.svg'
import { ReactComponent as MenuOpen } from '../../assets/svg/menuOpen.svg'
import { useState } from "react"
import { Transition } from '@headlessui/react'

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNavOpen = () => {
    setShowNav(true)
  }

  const handleNavClose = () => {
    setShowNav(false)
  }
  
  return (
    <nav className='fixed z-[50] bg-[#aca4a4] text-black top-0 py-5 px-4 md:px-6 lg:px-60 w-full'>
      <div className='flex justify-between items-center'>
        <div>
          <a href="/">
            <p className='font-bold font-secondaryFont text-2xl'>
             OneLink©
            </p>
          </a>
          
        </div>
        <ul className='hidden md:flex gap-8'>
          <li className="transition-all ease-in-out delay-150 duration-300 cursor-pointer"><Link to="/home">Home</Link> </li>
          <li className="transition-all ease-in-out delay-150 duration-300 cursor-pointer"><Link to="/links">Links</Link> </li>
          <li className="transition-all ease-in-out delay-150 duration-300 cursor-pointer"><Link to="/profile">Profile</Link> </li>
        </ul>
        <div className='md:hidden'>
            <MenuOpen  onClick = {() => handleNavOpen()} className="fill-white h-6 w-6"/>
        </div>
          <Transition
            show={showNav}
            className={`${showNav ? "absolute" : "hidden"} z-50 top-0 bg-slate-900  pt-[50%] h-[100vh] opacity-90 w-[100vw]`}
            enter="transform transition ease-in-out duration-500"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
          >
            <MenuClose onClick = {() => handleNavClose()} className="fill-white h-10 w-10 absolute top-10 left-5"/>
            <ul className='flex flex-col items-center gap-8 text-3xl text-white'>
              <li onClick={() => handleNavClose()} className="cursor-pointer"><Link to="/home">Home</Link> </li>
              <li onClick={() => handleNavClose()} className="cursor-pointer"><Link to="/links">Manage Links</Link> </li>
              <li onClick={() => handleNavClose()} className="cursor-pointer"><Link to="/profile">Profile</Link> </li>
            </ul>
          </Transition>
        </div>
    </nav>
  )
}

export default NavBar