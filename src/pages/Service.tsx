import React, {useState } from 'react'
import { ArrowLeft, Code,Laptop } from "lucide-react";
import { motion,AnimatePresence } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import PageTransition from '../Component/PageTransition';
import { ChevronDown,ChevronUp } from 'lucide-react';

import {
  FaCamera,
  FaPaintBrush,
  FaPalette,
  FaMobileAlt,
} from "react-icons/fa";


const Service:React.FC = () => {

  interface service {
    id:number;
    icon: React.ReactNode;
    descr:string;
    title:string;
    features: string[];
    ftitle:string;
    price: string;
    delivery:string;
  }

  const services:service[] = [
    {
      id: 1,
      icon: <Laptop size={30} />,
      title: 'Web Design',
      descr: 'Crafting visually stunning and user-friendly website interfaces tailored to your brand.',
      features: [
        "Modern and visually appealing layouts",
        "Custom designs tailored to your brand",
        "Consistent color schemes and typography",
      ],
      price: '',
      delivery: '',
      ftitle: 'Features'
    },
    {
      id: 2,
      icon: <Code size={30} />,
      title: 'Web Development',
      descr: 'Building high-performance, scalable websites with cutting-edge technology',
      features: [
        "Clean, optimized, and scalable code",
        "Secure and high-performance functionality",
        "Cross-browser compatibility",
      ],
      price: '',
      delivery: '',
      ftitle: 'Features'
    },
    {
      id: 3,
      icon: <FaMobileAlt />,
      title: 'Fully Responsive',
      descr: 'Ensuring seamless experiences across all devices with adaptive designs',
      features: [
        "Seamless adaptation to all screen sizes",
        "Mobile-friendly navigation and touch gestures",
        "Optimized images and fast loading",
      ],
      price: '',
      delivery: '',
      ftitle: 'Features'
    },
    {
      id: 4,
      icon: <FaPalette />,
      title: 'UX/UI Design',
      descr: 'Creating intuitive and engaging user experiences for maximum usability',
      features: [
        "Clean, optimized, and scalable code",
        "Secure and high-performance functionality",
        "Cross-browser compatibility",
      ],
      price: '',
      delivery: '',
      ftitle: 'Features'
    },
    {
      id: 5,
      icon: <FaPaintBrush />,
      title: 'Graphic Design',
      descr: 'Crafting compelling visuals that elevate your brand identity',
      features: [
        "Seamless adaptation to all screen sizes",
        "Mobile-friendly navigation and touch gestures",
        "Optimized images and fast loading",
      ],
      price: '',
      delivery: '',
      ftitle: 'Features'
    },
    {
      id: 6,
      icon: <FaCamera />,
      title: 'Photo Editing and Flyers',
      descr: 'Enhancing images with professional retouching and creative edits.',
      features: [
        "Intuitive and user-friendly interfaces",
        "Wireframing and prototyping",
        "Accessibility and usability-focused designs",
      ],
      price: '',
      delivery: '',
      ftitle: 'Features'
    },
  ]
  
  const navigate = useNavigate()
  const [expandedService, setExpandedService] = useState<number | null>(null)
  const [isHoveredCard, setIsHoveredCard] = useState<number | null>(null)

  const handleClick =(index: number)=>{
    setExpandedService(expandedService === index ? null: index)
  }
 
  return (
    <PageTransition>
    <div className='w-full min-h-screen bg-[#111111] p-8'>
      <div className='max-w-[1024px] mx-auto'>
      <button
            className="pb-8 flex flex-row items-center justify-center gap-1"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="text-gray-400" />
            <p className="text-gray-400 text-[20px]">Back</p>
          </button>

          <div className="flex items-center justify-center gap-4 pb-5">
            <h1 className="font-bold text-[30px] text-[#ffc86b]">Services</h1>
            <div className="flex-1 bg-[#1A1A1A] h-[1px]" />
          </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {services.map((service)=>
          <div
          key={service.id}
          className={`bg-[#1A1A1A] p-4 rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 ${
            isHoveredCard === service.id ? "bg-[#333333]" : "bg-[#1A1A1A]" 
          }`
          }
          onMouseEnter={()=> setIsHoveredCard(service.id)}
          onMouseLeave={()=> setIsHoveredCard(null)}
          >
            <div className='flex flex-col p-6 gap-2'>
              <div  className={`flex items-center justify-center font-poppins mb-4 bg-[#2b2b2b] w-[70px] p-4 rounded-2xl ${
                isHoveredCard === service.id  ? "bg-[#ffc86b]" : "bg-[#2b2b2b]"
                }
                `}>
              <p className={`text-white text-[30px]`}
              >{service.icon}</p>
              </div>
              <div className='flex flex-col'>
              <h1 className='text-white text-[20px] font-medium'>{service.title}</h1>
              <p className='text-gray-400'>{service.descr}</p>
              </div>
              
              <button
              onClick={()=> handleClick(service.id)}
              className='flex justify-start items-center font-poppins text-[#ffc86b] hover:underline'
              >
                {expandedService === service.id? "Show Less": "Learn More"}
                {expandedService === service.id ? <ChevronUp />: <ChevronDown/>}
              </button>
              <AnimatePresence>
              {expandedService === service.id && (
                <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
                >
                  <div>
                    <div className='flex-1 bg-[#1A1A1A] h-[1px]'/>
                    <div className='font-poppins'>
                      <h1 className='text-white text-[20px] mt-3 pb-3'>{service.ftitle}</h1>
                      <ul className=' flex flex-col space-y-2 text-gray-400'>
                        {service.features.map((feature, i)=>
                        <li key={i}
                        className='flex items-center gap-3 text-[13px]'
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#ffc86b] flex-shrink-0 " />
                          {feature}
                        </li>
                        )}
                      </ul>
                    </div>

                  </div>
                </motion.div>
              )}
              </AnimatePresence>
            </div>
          </div>  
          )}
        </div>
        
        {/* Custom Service */}
        <div className='bg-[#1A1A1A] p-8 w-full mt-8 rounded-2xl'>
          <div className='font-poppins flex flex-col justify-center items-center gap-6'>
          <h1 className='text-white text-[20px] font-medium'>Need a Custom Service?</h1>
          <p className='text-gray-400 text-[15px]'>Let's discuss your specific requirements and create a tailored solution</p>
          <button className='text-white text-[15px] font-poppins bg-[#cfa04e] p-4 rounded-3xl font-medium hover:bg-[#856734]'
          onClick={()=> navigate('/Contact')}
          >
            Get in Touch
          </button>
          </div>
        </div>
      </div>
    </div>
    </PageTransition>
  )
}
export default Service
