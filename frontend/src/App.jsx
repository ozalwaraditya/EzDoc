import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../src/pages/Home.jsx'
import Contact from '../src/pages/Contact.jsx'
import About from '../src/pages/About.jsx'
import Login from '../src/pages/Login.jsx'
import MyProfile from '../src/pages/MyProfile.jsx'
import Doctors from '../src/pages/Doctors.jsx'
import MyAppointments from '../src/pages/MyAppointments.jsx'
import Appointment from '../src/pages/Appointment.jsx'
import PageNotFound from '../src/pages/PageNotFound.jsx'
import NavBar from './components/NavBar.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route exact path='/about' element={<About/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/myprofile' element={<MyProfile/>}/>
          <Route exact path='/doctors' element={<Doctors/>}/>
          <Route exact path='/doctors/:speciality' element={<Doctors/>}/>
          <Route exact path='/my-appointments' element={<MyAppointments/>}/>
          <Route exact path='/appointment/:docId' element={<Appointment/>}/>
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}