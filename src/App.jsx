import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import NavBar from "./components/NavBar/NavBar"
import LogIn from "./views/LogIn"
import SignUp from "./views/SignUp"
import LandingPage from "./views/LandingPage"
import Home from "./views/Home"
import ManageLinks from "./views/ManageLinks"

const App = () => {
  return (
    <Router>
      <div className="bg-[#130b0f] font-primaryFont text-[#f0e5ea] pt-20">
          <NavBar/>
          <Routes>
            <Route exact path='/' element={<LandingPage/>}/>
            <Route exact path='/login' element={<LogIn/>}/>
            <Route exact path='/signup' element={<SignUp/>}/>
            <Route exact path='/profile' element={<Home/>}/> 
            <Route exact path='/links' element={<ManageLinks/>}/> 
          </Routes>
          <Footer/>
      </div>
    </Router>
  )
}

export default App


