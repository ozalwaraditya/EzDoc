import { NavLink, useNavigate } from 'react-router-dom'
import {assets} from '../assets/assets.js'
import { useState } from 'react';

const NavBar = () => {
    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        <img onClick={()=>navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="" />
        <ul className='hidden md:flex items-start gap-5 font-medium '>
            <NavLink to='/'>
                <h1 className = "py-1">HOME</h1>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/doctors'>
                <h1 className = "py-1">ALL DOCTORS</h1>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/about'>
                <h1 className = "py-1">ABOUT</h1>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink  to='/contact'>
                <h1 className = "py-1">CONTACT</h1>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
            {
                token ? 
                <div className='flex items-center  gap-2 cursor-pointer group relative'>
                    <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
                    <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                    <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block '>
                        <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 '>
                            <p onClick={()=>navigate('/myprofile')} className='hover:text-black cursor-pointer '>My Profile</p>
                            <p onClick={()=>navigate('/my-appointments')} className='hover:text-black cursor-pointer '>My Appointments</p>
                            <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer '>Logout</p>
                        </div>
                    </div>
                </div> : 
                    <button onClick={()=>{navigate('/login')}} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create Account</button>
            }
        </div>
    </div>
  )
}

export default NavBar
