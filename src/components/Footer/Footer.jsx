import {ReactComponent as Icon} from "../../assets/svg/bmc-logo.svg"

const Footer = () => {
  const date = new Date
  return (
    <div className="text-center text-sm md:text-base py-6 bg-black">
      <div className = "flex items-center justify-center gap-2">
         <p>Buy me a coffee</p>
         <a href="">
          <Icon className="animate-bounce"/>
         </a>
         
      </div>
     
      <p>
         © {date.getFullYear()} NmesomaHenry All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer
