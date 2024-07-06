import AboutUs from "./components/About.jsx"
import ContactUs from "./components/ContactUs.jsx"
import Signup from "./components/Signup.jsx"
import Courses from "./courses/Courses"
import Home from "./home/Home"
import {Routes,Route} from "react-router-dom"
import { Toaster } from 'react-hot-toast';
import myContext from "./contextApi/context.js"
import { useContext } from "react"


function App() {
 
const {authUser, setAuthUser} = useContext(myContext)  
return (
    <>
  <div>
  <Routes>
   <Route path="/" element={<Home/>} />
   <Route path="/courses" element={ authUser ? <Courses/>: <Signup/>} />
   <Route path="/signup" element={<Signup/>} />
   <Route path="/contactus" element={<ContactUs/>}></Route>
   <Route path="/aboutus" element={<AboutUs/>}></Route>
   </Routes>
   <Toaster/>
  </div>
    </>
  )
}

export default App
