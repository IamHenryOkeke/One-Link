import { Link } from 'react-router-dom'
import { ReactComponent as MenuClose } from '../../assets/svg/menuClose.svg'
import { ReactComponent as MenuOpen } from '../../assets/svg/menuOpen.svg'
import { useState } from "react"
import { Transition } from '@headlessui/react'

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleClick = () => {
    setShowNav(!showNav)
  }

  const FadeIn = ({ delay, children }) => (
    <Transition.Child
      enter={`transition-all ease-in-out duration-700 ${delay}`}
      enterFrom="opacity-0 translate-y-6"
      enterTo="opacity-100 translate-y-0"
      leave="transition-all ease-in-out duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {children}
    </Transition.Child>
  )
  
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
            <MenuOpen  onClick = {() => handleClick()} className="fill-white h-6 w-6"/>
        </div>
          <Transition.Root
            show={showNav}
            className="absolute top-0 bg-slate-900 pt-[50%] h-[100vh] opacity-90 w-[100vw]"
            enter="transform transition ease-in-out duration-500"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-500 delay-100"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <MenuClose onClick = {() => handleClick()} className="fill-white h-10 w-10 absolute top-10 left-5"/>
            <ul className='flex flex-col items-center gap-8 text-3xl text-white'>
              <FadeIn delay="delay-[200ms]">
                <li onClick={() => handleClick()} className="cursor-pointer"><Link to="/home">Home</Link> </li>
              </FadeIn>
              <FadeIn delay="delay-[400ms]">
                <li onClick={() => handleClick()} className="cursor-pointer"><Link to="/links">Manage Links</Link> </li>
              </FadeIn>
              <FadeIn delay="delay-[800ms]">
                <li onClick={() => handleClick()} className="cursor-pointer"><Link to="/profile">Profile</Link> </li>
              </FadeIn>
            </ul>
          </Transition.Root>
        </div>
    </nav>
  )
}

export default NavBar