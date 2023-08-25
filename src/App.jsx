import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import NavBar from "./components/NavBar/NavBar"
import LogIn from "./views/LogIn"
import SignUp from "./views/SignUp"
import LandingPage from "./views/LandingPage"
import Home from "./views/Home/Home"
import ManageLinks from "./views/ManageLinks"
import AdminLinks from "./views/Home/AdminLinks"
import UserLinks from "./views/Home/UserLinks"
import ResetPassword from "./views/ResetPassword"
import { AuthProvider } from "./AuthContext"
import ProtectedRoute from "./utils/Protected"

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="bg-[#070308] font-primaryFont text-[#f3e5f6] pt-20">
            <NavBar/>
            <Routes>
              <Route exact path='/' element={<LandingPage/>}/>
              <Route  path='/login' element={<LogIn/>}/>
              <Route  path='/signup' element={<SignUp/>}/>
              <Route exact path='/home' element={
                <ProtectedRoute>
                  <Home/>
                </ProtectedRoute> 
              }>
                <Route path="admin" element = {<AdminLinks/>}/>
                <Route path="user-links" element = {<UserLinks/>}/>
              </Route> 
              <Route path='/manage-links' element={
                <ProtectedRoute>
                  <ManageLinks/>
                </ProtectedRoute>
              }/> 
              <Route path = "/reset-password" element = {<ResetPassword/>}/>
            </Routes>
            <Footer/>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App


