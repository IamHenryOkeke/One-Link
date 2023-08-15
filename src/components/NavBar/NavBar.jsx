import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ReactComponent as MenuClose } from '../../assets/svg/menuClose.svg'
import { ReactComponent as MenuOpen } from '../../assets/svg/menuOpen.svg'
import { useState } from "react"
import { Transition } from '@headlessui/react'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate()
  const [showNav, setShowNav] = useState(false);

  const handleClick = () => {
    setShowNav(!showNav)
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
      });
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
    <nav className='fixed z-[50] bg-[#070308] text-[#f3e5f6] top-0 py-5 px-4 md:px-6 lg:px-60 w-full'>
      <div className='flex justify-between items-center'>
        <div>
          <a href="/">
            <p className='font-secondaryFont font-extrabold text-2xl'>
             OneLink©
            </p>
          </a>
        </div>
        {(location.pathname === "/") ? (
          <div className='hidden md:flex gap-8'>
            <Link to="/login">
              <button className='transition-all ease-in-out delay-150 px-5 py-3 bg-[#429334] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#429334] lg:self-start rounded-md font-bold text-white text-lg duration-300'>Log in</button>
            </Link>
            <Link to="/signup">
              <button className='transition-all ease-in-out delay-150 px-5 py-3 bg-[#429334] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#429334] lg:self-start rounded-md font-bold text-white text-lg duration-300'>Sign up</button>
            </Link>
          </div>
        ) : (location.pathname === "/login") ? (
                <Link to="/signup">
                  <button className='transition-all ease-in-out delay-150 px-5 py-3 bg-[#429334] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#429334] lg:self-start rounded-md font-bold text-white text-lg duration-300'>Sign up</button>
                </Link>
        ) : (location.pathname === "/signup") ? (
                <Link to="/login">
                  <button className='transition-all ease-in-out delay-150 px-5 py-3 bg-[#429334] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#429334] lg:self-start rounded-md font-bold text-white text-lg duration-300'>Log in</button>
                </Link>
               
        ) : (
          <div className='hidden md:flex gap-8 items-center'>
            <ul className='hidden md:flex gap-8'>
              <li className="font-bold transition-all ease-in-out delay-150 hover:text-[#53b941] hover:tracking-widest duration-300 cursor-pointer"><Link to="/home/admin-links">Profile</Link> </li>
              <li className="font-bold transition-all ease-in-out delay-150 hover:text-[#53b941] hover:tracking-widest duration-300 cursor-pointer"><Link to="/manage-links">Manage Links</Link></li>
              <li className="font-bold transition-all ease-in-out delay-150 hover:text-[#53b941] hover:tracking-widest duration-300 cursor-pointer"><Link to="/settings">Settings</Link> </li>
            </ul>
            <button onClick={handleSignOut} className='transition-all ease-in-out delay-150 px-4 py-2 bg-[#429334] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#429334] lg:self-start rounded-md font-bold text-white text-lg duration-300'>Sign Out</button>
          </div>
          
        )}
        
        <div className={(location.pathname === "/login" || location.pathname === "/signup") ? "hidden" : "md:hidden"}>
            <MenuOpen onClick = {() => handleClick()} className="fill-white h-6 w-6"/>
        </div>
          <Transition
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
            {(location.pathname === "/") ? (
                  <div className='flex flex-col items-center gap-8'>
                    <Link to="/login">
                      <button onClick={() => handleClick()} className='transition-all ease-in-out delay-150 px-5 py-4 bg-[#429334] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#429334] lg:self-start rounded-md font-bold text-white text-lg duration-300'>Log in</button>
                    </Link>
                    <Link to="/signup">
                      <button onClick={() => handleClick()} className='transition-all ease-in-out delay-150 px-5 py-4 bg-[#429334] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#429334] lg:self-start rounded-md font-bold text-white text-lg duration-300'>Sign up</button>
                    </Link>
                  </div>
                ) : (location.pathname === "/login") ? (
                        <Link className='flex flex-col items-center' to="/signup">
                          <button onClick={() => handleClick()} className='transition-all ease-in-out delay-150 px-5 py-4 bg-[#429334] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#429334] lg:self-start rounded-md font-bold text-white text-lg duration-300'>Sign up</button>
                        </Link>
                ) : (location.pathname === "/signup") ? (
                        <Link className='flex flex-col items-center' to="/login">
                          <button onClick={() => handleClick()} className='transition-all ease-in-out delay-150 px-5 py-4 bg-[#429334] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#429334] lg:self-start rounded-md font-bold text-white text-lg duration-300'>Log in</button>
                        </Link>
                      
                ) : (
                  <div className='flex flex-col items-center gap-8 text-3xl text-white'>
                    <ul className='flex flex-col items-center gap-8'>
                      <FadeIn delay="delay-[150ms]">
                        <li onClick={() => handleClick()} className="cursor-pointer"><Link to="/home/admin-links">Profile</Link></li>
                      </FadeIn>
                      <FadeIn delay="delay-[300ms]">
                        <li onClick={() => handleClick()} className="cursor-pointer"><Link to="/manage-links">Manage Links</Link></li>
                      </FadeIn>
                      <FadeIn delay="delay-[450ms]">
                        <li onClick={() => handleClick()} className="cursor-pointer"><Link to="/settings">Settings</Link></li>
                      </FadeIn>
                    </ul>
                    <FadeIn delay="delay-[600ms]">
                      <button onClick={handleSignOut} className='transition-all ease-in-out delay-150 px-5 py-4 bg-[#0c221f] hover:shadow-lg hover:shadow-[#0c221f] lg:self-start rounded-md font-bold text-white text-lg duration-300'>Sign Out</button>
                    </FadeIn>
                  </div>
              
            )}
          </Transition>
        </div>
    </nav>
  )
}

export default NavBar