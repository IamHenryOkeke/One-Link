import {ReactComponent as Icon} from "../../assets/svg/bmc-logo.svg"

const Footer = () => {
  const date = new Date
  return (
    <footer className="text-center mt-5 text-sm md:text-base py-6 bg-black flex flex-col items-center gap-6">
      <div className = "flex items-center justify-center gap-2 bg-white w-fit text-black py-3 px-5 rounded-lg font-bold">
         <p>Buy us coffee</p>
         <a href=""  className="animate-wiggle">
          <Icon/>
         </a>
         
      </div>
     
      <p>
         © {date.getFullYear()} NmesomaHenry All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
