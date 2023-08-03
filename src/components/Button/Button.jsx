import React from 'react'

const Button = ({title}) => {
  return (
    <button type="button" className='px-4 py-1 transition-all ease-in-out delay-150 text-black bg-[#dac0be] hover:bg-[#2d251a] hover:text-[#f0e5ea] border rounded-md duration-500'>
        <span className="transition-all ease-in-out delay-150 flex items-center gap-0 rounded-md text-sm md:text-base px-4 py-2 hover:gap-3 duration-500">
            <p>{title}</p>
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true" className="ml-2 h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </span>
    </button>
  )
}

export default Button
