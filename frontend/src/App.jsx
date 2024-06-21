import AboutUs from "./components/About.jsx"
import ContactUs from "./components/ContactUs.jsx"
import Signup from "./components/Signup.jsx"
import Courses from "./courses/Courses"
import Home from "./home/Home"
import {Routes,Route} from "react-router-dom"


function App() {
 

  return (
    <>
  <div>
  <Routes>
   <Route path="/" element={<Home/>} />
   <Route path="/courses" element={<Courses/>} />
   <Route path="/signup" element={<Signup/>} />
   <Route path="/contactus" element={<ContactUs/>}></Route>
   <Route path="/aboutus" element={<AboutUs/>}></Route>
   </Routes>
  </div>
    </>
  )
}

export default App
