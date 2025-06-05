import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../assets/My logo.png'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react';
import {motion,AnimatePresence} from'framer-motion'

const LandingPage:React.FC = () => {
  const navigate = useNavigate()
  const navRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  
  const handleOpen =()=>{
    setIsOpen(!isOpen)
  }

  useEffect(()=>{
    if(!isOpen) return;
    const handleClickOutside =(e: MouseEvent)=>{
      if(navRef.current && !navRef.current.contains(e.target as Node)){
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown',handleClickOutside)

    return()=>{
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className='fixed w-full h-[80px] bg-lightbg dark:bg-Color1 border-b-[1px] border-Color3 p-5 flex items-center z-10 '>
      <nav className='hidden md:flex items-center justify-center w-full md:mx-4 md:space-x-10 lg:mx-32 lg:space-x-[290px]'>
        <div>
        <img src={logo} alt="Logo" className='w-[60px] h-[40px]' />
        </div>

        <div className='font-poppins text-Color1 dark:text-[#9396A4] text-[15px] flex justify-center items-center gap-14 '>
            <Link to="/" className='dark:hover:text-white hover:text-Color4'>Home</Link> 
            <Link to="/AboutMe" className='dark:hover:text-white hover:text-Color4'>About</Link>
            <Link to="/ShowCase" className='dark:hover:text-white hover:text-Color4'>Works</Link>
            <Link to="/Contact" className='dark:hover:text-white hover:text-Color4'>Contact</Link>
        </div>

        <div className='dark:bg-Color5 bg-[#ff6041] w-[150px] h-10 flex justify-center items-center font-poppins rounded-md ml-[200px] hover:bg-Color6'>
            <button className='text-Color1 text-[20px] font-normal p-4 text-nowrap'
            onClick={() => navigate('/Contact')}
            >Let's Talk</button>
        </div>
      </nav>

      <button
      onClick={()=> handleOpen()}
      className='md:hidden text-lightText dark:text-white'
      >
        {isOpen ? <X />: <Menu />}
      </button>

      {isOpen && (
        <AnimatePresence>
        <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        ref={navRef}
        className='absolute z-50 top-[80px] left-0 w-[40%] bg-lightCard dark:bg-Color1 h-screen border-r-[1px] border-Color3 flex flex-col items-center gap-6 py-2 md:hidde text-gray-400 font-poppins'
        >
          <div className='p-4 flex flex-col items-start gap-5'>
          <Link to="/" className='dark:hover:text-Color5 hover:text-lightThirdColor text-black  dark:text-white p-2 w-full'>Home</Link>
          <Link to="/AboutMe" className='dark:hover:text-Color5 hover:text-lightThirdColor text-black  dark:text-white p-2 w-full'>About</Link>
          <Link to="/service" className='dark:hover:text-Color5 hover:text-lightThirdColor text-black  dark:text-white p-2 w-full'>Services</Link>
          <Link to="/ShowCase" className='dark:hover:text-Color5 hover:text-lightThirdColor text-black  dark:text-white p-2 w-full'>Works</Link>
          <Link to="/Contact" className='dark:hover:text-Color5 hover:text-lightThirdColor text-black  dark:text-white    p-2 w-full'>Contact</Link>
          </div>
        </motion.div>
        </AnimatePresence>
      )}

    </div>
  )
}

export default LandingPage
