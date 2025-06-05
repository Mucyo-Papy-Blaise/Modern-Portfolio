import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import pflPhoto from "../assets/Mucyo Papy Blaise 222004130jpg copy.jpg";
import signature from "../assets/signature.png";
import logo from "../assets/My logo.png";
import projectImg from "../assets/programming.png";
import { Code, Facebook, Github, Instagram, Search, Youtube } from "lucide-react";
import {
  FaSearch,
  FaCamera,
  FaPaintBrush,
  FaPalette,
  FaTwitter,
  FaLinkedin,
  FaPlus,
  FaTimes,
} from "react-icons/fa";
import blogPng from "../assets/Blog.png";
import { AnimatePresence, motion } from "framer-motion";
import PageTransition from "../Component/PageTransition";

const Home: React.FC = () => {
  const navigate = useNavigate();

  interface CountUpProps {
    end: number;
    duration?: number;
    isHovered: boolean;
  }

  const CountUp: React.FC<CountUpProps> = ({
    end,
    duration = 1000,
    isHovered,
  }) => {
    const [count, setCount] = useState(end);
    const animationRef = useRef<number | null>(null);

    const startCounting = () => {
      let start = 0;
      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);

        setCount(Math.floor(end * percentage));

        if (progress < duration) {
          animationRef.current = requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    };

    React.useEffect(() => {
      if (isHovered) {
        setCount(0);
        startCounting();
      } else {
        if (animationRef.current) cancelAnimationFrame(animationRef.current);
      }
    }, [isHovered]);

    return <span>{count}</span>;
  };

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isIconHovered, setisIconHovered] = useState<number | null>(null);


  const icons = [
    { icon: <Code />, label: "Web Develop" },
    { icon: <FaPaintBrush />, label: "Graphic Design" },
    { icon: <FaPalette />, label: "UX/UI Design" },
    { icon: <FaCamera />, label: "Photo Editing" },
  ];

  const socialLinks = [
    { name: "Twitter", icon: FaTwitter, url: "https://twitter.com" },
    { name: "LinkedIn", icon: FaLinkedin, url: "https://linkedin.com" },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com" },
    { name: "GitHub", icon: Github, url: "https://github.com/Mucyo-Papy-Blaise" },
    { name: "YouTube", icon: Youtube, url: "https://youtube.com" },
    { name: "Facebook", icon: Facebook, url: "https://facebook.com" },
  ];
  const [showSocialOverlay, setShowSocialOverlay] = useState(false);

  const toggleSocialOverlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowSocialOverlay(!showSocialOverlay);
  };

  return (
    <div className="w-full min-h-screen dark:bg-[#111111] bg-lightbg pt-28 pb-10">
      {/* Search Box */}
    
    <div className="flex flex-row items-center justify-center relative">
      <div className="flex flex-col w-full sm:px-8 px-4 md:px-16 lg:px-32 max-w-[1400px] mx-auto">
        <div className="hidden md:flex justify-center items-center pt-6 sm:pt-8 md:pt-12 relative">
        <input
          className="relative text-xs sm:text-sm w-full h-[40px] sm:h-[50px] border-2 border-Color2 dark:bg-Color2 flex justify-center items-center p-3 sm:p-4 outline-none text-Color1 dark:text-white font-poppins rounded-xl sm:rounded-2xl 
          transition-all duration-300 hover:bg-[#d4d4d4] dark:hover:bg-[#242424] dark:focus:bg-[#242424] lg:focus:ring-2 lg:focus:ring-[#393939] opacity-0 translate-y-10 animate-slideUp"
          placeholder="SEARCH WORK AND FEATURED"
        />
        <FaSearch className="absolute right-8 sm:right-10 md:right-10 lg:right-10 text-Color2 dark:text-white font-poppins cursor-pointer translate-y-10 animate-slideUp" />
      </div>
      
      <PageTransition>
      <div className="pl-5">
      <button className="md:hidden mb-3 text-white bg-[#393939] p-2 font-bold rounded-full hover:bg-[#ffc86b] hover:text-black">
      <Search size={13}/>
      </button>

      </div>
      </PageTransition>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-6 md:grid-cols-12 gap-3 sm:gap-4 pt-4 sm:pt-6 md:pt-8">
        {/* Profile Card */}
        <div
          className="dark:bg-Color2 bg-lightCard rounded-xl sm:rounded-2xl p-4 sm:p-6 col-span-1 sm:col-span-6 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full h-auto sm:h-[200px] font-poppins 
          transform transition-all duration-300 hover:scale-[1.02] hover:bg-lightHoverCard dark:hover:bg-[#242424] cursor-pointer opacity-0 translate-y-10 animate-slideUp"
        >
          <img
            src={pflPhoto}
            alt="Profile"
            className="w-[100px] h-[100px] sm:w-[160px] sm:h-[160px] rounded-lg mx-auto sm:mx-0"
          />
          <div className="flex flex-col mt-2 sm:mt-4 text-center sm:text-left">
            <p className="dark:text-gray-400 text-lightText mb-1 sm:mb-2 text-[11px] sm:text-[13px]">
              A WEB DESIGNER
            </p>
            <h1 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2 text-Color1 dark:text-white">
              MUCYO <br className="hidden sm:block" /> Papy Blaise
            </h1>
            <p className="dark:text-gray-400 text-Color2 text-[13px] sm:text-[15px] max-w-full sm:max-w-52">
              I am a Web Designer based Kigali Rwanda.
            </p>
          </div>
        </div>

        {/* Credentials & Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full col-span-1 sm:col-span-6">
          {/*  More About Me*/}
          <div
            className="dark:bg-Color2 bg-lightCard rounded-xl sm:rounded-3xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between w-full h-auto sm:h-[200px] font-poppins
            transform transition-all duration-300 hover:scale-[1.02] hover:bg-lightHoverCard dark:hover:bg-[#242424] cursor-pointer group opacity-0 translate-y-10 animate-slideUp"
          >
            <div>
              <img src={signature} alt="Signature" className="w-28 sm:w-36 h-12 sm:h-16 mb-2 sm:mb-4" />
              <p className="dark:text-gray-400 text-Color2 text-[11px] sm:text-[13px]">MORE ABOUT ME</p>
              <h2 className="text-lg sm:text-xl font-normal dark:text-white text-black">Credentials</h2>
            </div>
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 bg-[#393939] rounded-full flex items-center 
              justify-center transition-all hover:scale-[1.02] hover:bg-[#625454] mt-2 sm:mt-0"
              onClick={() => navigate("/AboutMe")}
            >
              <span className="text-xl sm:text-2xl text-center text-white">
                <FaPlus />
              </span>
            </div>
          </div>

          {/* Projects i've work on */}
          <div
            className="dark:bg-Color2 bg-lightCard rounded-xl sm:rounded-3xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between w-full h-auto sm:h-[200px] 
            transform transition-all duration-300 hover:scale-[1.02] hover:bg-lightHoverCard dark:hover:bg-[#242424] cursor-pointer group opacity-0 translate-y-10 animate-slideUp"
          >
            <div>
              <img
                src={projectImg}
                alt="Project Image"
                className="w-20 h-16 sm:w-24 sm:h-20 mb-2 sm:mb-4 mx-auto sm:mx-0"
              />
              <p className="dark:text-gray-400 text-lightText text-[11px] sm:text-[13px]">SHOWCASE</p>
              <h2 className="text-lg sm:text-xl dark:text-white text-black font-normal">Projects</h2>
            </div>
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 bg-[#393939] rounded-full flex items-center justify-center transition-all hover:scale-[1.02] hover:bg-[#625454] mt-2 sm:mt-0"
              onClick={() => navigate("/ShowCase")}
            >
              <span className="text-xl sm:text-2xl text-white">
                <FaPlus />
              </span>
            </div>
          </div>
        </div>

        {/* Blog Card */}
        <div
          className="dark:bg-Color2 bg-lightCard rounded-xl sm:rounded-2xl p-4 sm:p-6 col-span-1 sm:col-span-3 flex flex-col sm:flex-row items-center justify-between w-full h-auto sm:h-[200px] font-poppins 
          transform transition-all duration-300 hover:scale-[1.02] hover:bg-lightHoverCard dark:hover:bg-[#242424] cursor-pointer group opacity-0 translate-y-10 animate-slideUp"
        >
          <div className="flex flex-col items-center sm:items-start">
            <img
              src={blogPng}
              alt="Project Image"
              className="w-20 h-16 sm:w-24 sm:h-20 mb-2 sm:mb-4"
            />
            <p className="dark:text-gray-400 text-lightText text-[11px] sm:text-[13px]">BLOG</p>
            <h2 className="text-lg sm:text-xl dark:text-white text-black font-normal">GFonts</h2>
          </div>
          <div
            className="w-10 h-10 sm:w-12 sm:h-12 bg-[#393939] rounded-full flex items-center justify-center mt-2 sm:mt-0 sm:ml-0 transition-all hover:scale-[1.02] hover:bg-[#625454]"
            onClick={() => navigate("/Blog")}
          >
            <span className="text-xl sm:text-2xl text-white">
              <FaPlus />
            </span>
          </div>
        </div>

        {/* Service Offering */}
        <div
          className="dark:bg-Color2 bg-lightCard rounded-xl sm:rounded-2xl p-4 sm:p-6 col-span-1 sm:col-span-6 w-full h-auto sm:h-[200px] font-poppins 
          transform transition-all duration-300 hover:scale-[1.02] hover:bg-lightHoverCard dark:hover:bg-[#242424] cursor-pointer group opacity-0 translate-y-10 animate-slideUp"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex flex-row gap-4 sm:gap-8 md:gap-12 lg:gap-20 mb-4 sm:mb-10 text-Color2 dark:text-white text-[18px] sm:text-[25px]">
                {icons.map((ico, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => setisIconHovered(index)}
                    onMouseLeave={() => setisIconHovered(null)}
                    className="relative"
                  >
                    <p className="transform transition-all duration-300 hover:scale-125 hover:text-[#ffc86b]">
                      {ico.icon}
                    </p>

                    {isIconHovered === index && (
                      <p className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 text-gray-400 text-[10px] sm:text-[13px] bg-black px-2 py-1 rounded-md whitespace-nowrap z-10">
                        {ico.label}
                      </p>
                    )}
                  </div>
                ))}
              </div>
              <p className="dark:text-gray-400 text-lightText text-[11px] sm:text-[13px]">SPECIALIZATION</p>
              <h2 className="text-lg sm:text-xl text-black dark:text-white font-normal">
                Service Offering
              </h2>
            </div>
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 bg-[#393939] rounded-full flex items-center justify-center mt-3 sm:mt-0 transition-all hover:scale-[1.02] hover:bg-[#625454]"
              onClick={() => navigate("/Service")}
            >
              <span className="text-xl sm:text-2xl text-white">
                <FaPlus />
              </span>
            </div>
          </div>
        </div>

        {/* Stay With Me */}
        <div className="col-span-1 sm:col-span-3 h-auto sm:h-[200px] relative opacity-0 translate-y-10 animate-slideUp">
          <div
            className="dark:bg-Color2 bg-lightCard rounded-xl sm:rounded-2xl p-4 sm:p-6 w-full h-full font-poppins 
            transform transition-all duration-300 hover:scale-[1.02] hover:bg-lightHoverCard dark:hover:bg-[#242424] cursor-pointer"
            onClick={toggleSocialOverlay}
          >
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="flex flex-col items-center sm:items-start">
                <div className="flex flex-row text-white gap-3 sm:gap-5 mb-4 sm:mb-10 text-[15px]">
                  <FaTwitter className="dark:bg-[#3939395d] p-2 w-8 h-8 rounded-2xl cursor-pointer transition-all duration-300 hover:bg-Color4 bg-Color1 dark:hover:bg-[#74606090] hover:scale-110" />
                  <FaLinkedin className="dark:bg-[#3939395d] p-2 w-8 h-8 rounded-2xl cursor-pointer transition-all duration-300 hover:bg-Color4 bg-Color1 dark:hover:bg-[#74606090] hover:scale-110" />
                </div>
                <div className="flex flex-col items-center sm:items-start">
                  <p className="dark:text-gray-400 text-lightText text-[11px] sm:text-[13px]">STAY WITH ME</p>
                  <h2 className="text-lg sm:text-xl dark:text-white text-Color1 font-normal">Profiles</h2>
                </div>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#393939] rounded-full flex items-center justify-center mt-3 sm:mt-0 transition-all hover:scale-[1.02] hover:bg-[#625454]">
                <span className="text-xl sm:text-2xl text-white">
                  <FaPlus />
                </span>
              </div>
            </div>
          </div>

          {/* Social Media Overlay */}
          <AnimatePresence>
            {showSocialOverlay && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-lightbg dark:bg-Color2 rounded-xl sm:rounded-2xl md:p-2 p-6 z-10 shadow-xl"
              >
                <div className="flex justify-between items-center md:mb-2 sm:mb-4">
                  <h3 className="font-semibold text-white text-[10px] sm:text-base">
                    Social Profiles
                  </h3>
                  <button
                    onClick={toggleSocialOverlay}
                    className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-[#252525] text-gray-400 hover:text-white"
                  >
                    <FaTimes size={14} className="sm:text-base" />
                  </button>
                </div>

                <div className="grid grid-cols-2 md:gap-1 gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-[#252525] rounded-lg sm:rounded-xl hover:bg-[#333333] transition-colors"
                      >
                        <Icon className="text-[#ffc86b]" size={12} />
                        <span className="text-white md:text-sm text-xs">
                          {social.name}
                        </span>
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Experience Card */}
        <div
          className="dark:bg-Color2 bg-lightCard rounded-xl sm:rounded-2xl p-4 sm:p-6 col-span-1 sm:col-span-6 w-full h-auto sm:h-[200px] font-poppins 
          transform transition-all duration-300 hover:scale-[1.02] hover:bg-lightHoverCard dark:hover:bg-[#242424] cursor-pointer group opacity-0 translate-y-10 animate-slideUp"
        >
          <div className="flex flex-row justify-center sm:justify-start gap-2 sm:gap-4 md:gap-8">
            {[
              {
                label: (
                  <>
                    YEARS <br /> EXPERIENCE
                  </>
                ),
                end: 3,
              },
              { label: "CLIENTS WORLDWIDE", end: 100 },
              {
                label: (
                  <>
                    TOTAL <br /> PROJECTS
                  </>
                ),
                end: 25,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="w-24 sm:w-28 md:w-36 h-28 sm:h-32 md:h-40 bg-lightbg dark:bg-[#3939395d] rounded-2xl sm:rounded-3xl flex flex-col justify-center items-center font-poppins transition-transform duration-300 hover:scale-110"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <p className="dark:text-white text-black font-semibold text-xl sm:text-2xl md:text-[30px] text-center">
                  +
                  <CountUp
                    end={item.end}
                    duration={1000}
                    isHovered={hoveredIndex === index}
                  />
                </p>
                <p className="dark:text-gray-400 text-Color2 font-normal text-[11px] sm:text-[13px] md:text-[15px] text-center px-1">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Let's Go together */}
        <div
          className="dark:bg-Color2 bg-lightCard rounded-xl sm:rounded-2xl p-4 sm:p-6 col-span-1 sm:col-span-6 flex justify-center sm:justify-start w-full h-auto sm:h-[200px] font-poppins 
          transform transition-all duration-300 hover:scale-[1.02] hover:bg-lightHoverCard dark:hover:bg-[#242424] cursor-pointer group opacity-0 translate-y-10 animate-slideUp"
          onClick={() => navigate("/Contact")}
        >
          <div className="flex items-center font-poppins">
            <p className="text-2xl sm:text-[30px] text-lightText dark:text-white text-center sm:text-left">
              Let's <br className="hidden sm:block" />
              Work <span className="dark:text-[#ffc86b] text-[#ff6041]">Together</span>
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>

      {/* Footer */}
      <footer className="flex flex-col justify-center items-center pt-8 sm:pt-16 font-poppins opacity-0 translate-y-10 animate-slideUp">
        <img src={logo} alt="Logo" className="w-24 sm:w-32 h-16 sm:h-20 mb-4 sm:mb-8" />
        <p className="text-xs sm:text-sm text-Color1 dark:text-white text-center px-4">
          &copy; {new Date().getFullYear()} All Right Reserved By{" "}
          <span className="dark:text-[#ffc86b] text-[#ff6041]">Mucyo Papy Blaise</span>
        </p>
      </footer>
    </div>
  );
};

export default Home;