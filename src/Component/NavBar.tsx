import React from 'react'
import logo from '../assets/My logo.png'
import { Link } from 'react-router-dom'

const LandingPage:React.FC = () => {
   
  return (
    <div className='w-full h-[80px] bg-[#111111] p-5 flex items-center'>
      <nav className='flex items-center justify-center w-full md:mx-4 md:space-x-10 lg:mx-32 lg:space-x-[290px]'>
        <div>
        <img src={logo} alt="Logo" className='w-[60px] h-[40px]' />
        </div>

        <div className='font-poppins text-[#9396A4] text-[15px] flex justify-center items-center gap-14'>
            <Link to="/">Home</Link>
            <Link to="/AboutMe">About</Link>
            <Link to="/ShowCase">Works</Link>
            <Link to="/Contact">Contact</Link>
        </div>

        <div className='bg-[#9396A4] w-[150px] h-10 flex justify-center items-center font-poppins rounded-md ml-[200px]'>
            <button className='text-white text-[20px] font-normal p-4 text-nowrap'>Let's Talk</button>
        </div>
      </nav>
    </div>
  )
}

export default LandingPage
