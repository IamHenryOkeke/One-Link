import { useState } from "react"
import { Link, Outlet } from "react-router-dom"


const Home = () => {
    const [ adminState, setAdminState ] = useState(true)
    const [ userState, setUserState] = useState(false)

    return (
      <>
        <div className="flex justify-around text-center md:text-xl py-4">
          <Link onClick={() => {
            setAdminState(true)
            setUserState(false)
          }} className={adminState ? "border-b-4 border-b-[#53b941] w-1/2 py-2" : "w-1/2"} to={`/home/admin`} >Your Links</Link>
          <Link onClick={() => {
            setUserState(true)
            setAdminState(false)
          }} className={userState ? "border-b-4 border-b-[#53b941] w-1/2 py-2" : "w-1/2"} to="/home/user-links">User Links</Link>
        </div>
        <Outlet/>
      </>
    )
}

export default Home
