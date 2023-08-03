import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import ContactCard from "./views/ContactMe"
import Footer from "./components/Footer/Footer"
import NavBar from "./components/NavBar/NavBar"
// import Projects from "./views/Projects"
// import AboutMe from "./views/AboutMe"
// import Home from "./views/Home"


const App = () => {
  return (
    <Router>
      <div className="bg-[#130b0f] font-primaryFont text-[#f0e5ea] pt-20">
          <NavBar/>
          <Routes>
            {/* <Route exact path='/' element={<Home/>} />
            <Route exact path='/about' element={<AboutMe/>}/>
            <Route exact path='/projects' element={<Projects/>} />           
            <Route exact path='/contact-me' element={<ContactCard twitterUrl="https://twitter.com/NmesomaHenry" portfolioUrl='https://github.com/IamHenryOkeke' phone='+2347080194374' linkedInUrl='http://www.linkedin.com/in/henry-okeke-3176481a9' emailAddress="iamhenryokeke@gmail.com"/> } /> */}
          </Routes>
          <Footer/>
      </div>
    </Router>
  )
}

export default App


