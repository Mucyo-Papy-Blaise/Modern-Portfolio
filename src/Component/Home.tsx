import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import pflPhoto from "../assets/123.jpg";
import signature from "../assets/signature.png";
import logo from "../assets/My logo.png";
import projectImg from "../assets/programming.png";
import { Code } from "lucide-react";
import {
  FaSearch,
  FaCamera,
  FaPaintBrush,
  FaPalette,
  FaTwitter,
  FaLinkedin,
  FaPlus,
} from "react-icons/fa";
import blogPng from "../assets/Blog.png";

const Home: React.FC = () => {
  const navigate = useNavigate()

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

  return (
    <div className="w-full min-h-screen bg-[#111111] pb-10">
      {/* Search Box */}
      <div className="flex justify-center items-center pt-12 px-32 max-w-[1400px] mx-auto ">
        <input
          className="relative text-sm w-full h-[50px] bg-[#1A1A1A] flex justify-center items-center p-4 outline-none text-white font-poppins rounded-2xl 
          transition-all duration-300 hover:bg-[#242424] focus:bg-[#242424] focus:ring-2 focus:ring-[#393939] opacity-0 translate-y-10 animate-slideUp"
          placeholder="SEARCH ST WORK AND FEATURED•LATEST WORK AND FEATURED "
        />
        <FaSearch className="absolute right-56 text-white font-poppins cursor-pointer translate-y-10 animate-slideUp" />
      </div>

      {/* Profile Card */}
      <div className="grid grid-cols-12 gap-4 pt-8 px-32 max-w-[1400px] mx-auto">
        <div
          className="bg-[#1A1A1A] rounded-2xl p-6 col-span-6 flex flex-row gap-4 w-full h-[200px] font-poppins 
        transform transition-all duration-300 hover:scale-[1.02] hover:bg-[#242424] cursor-pointer opacity-0 translate-y-10 animate-slideUp"
        >
          <img
            src={pflPhoto}
            alt="Profile"
            className="w-[160px] h-[160px] rounded-lg mb-4"
          />
          <div className="flex flex-col mt-4">
            <p className="text-gray-400 mb-2 text-xs text-[13px]">
              A WEB DESIGNER
            </p>
            <h1 className="text-2xl font-bold mb-2 text-white">
              MUCYO <br /> Papy Blaise
            </h1>
            <p className="text-gray-400 text-[15px] max-w-52">
              I am a Web Designer based Kigali Rwanda.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 w-full col-span-6">

          {/*  More About Me*/}
          <div
            className="bg-[#1A1A1A] rounded-3xl p-6 flex items-center justify-between w-full h-[200px] font-poppins
           transform transition-all duration-300 hover:scale-[1.02] hover:bg-[#242424] cursor-pointer group opacity-0 translate-y-10 animate-slideUp"
          >
            <div>
              <img src={signature} alt="Signature" className="w-36 h-16 mb-4" />
              <p className="text-gray-400 text-[13px]">MORE ABOUT ME</p>
              <h2 className="text-xl font-normal text-white">Credentials</h2>
            </div>
            <div className="w-12 h-12 bg-[#393939] rounded-full flex items-center justify-center transition-all hover:scale-[1.02] hover:bg-[#625454]">
              <span className="text-2xl text-center text-white "><FaPlus onClick={()=> navigate("/AboutMe")} /></span>
            </div>
          </div>

          {/* Projects i've work on */}
          <div
            className="bg-[#1A1A1A] rounded-3xl p-6 flex items-center justify-between w-full h-[200px] 
          transform transition-all duration-300 hover:scale-[1.02] hover:bg-[#242424] cursor-pointer group opacity-0 translate-y-10 animate-slideUp"
          >
            <div>
              <img
                src={projectImg}
                alt="Project Image"
                className="w-24 h-20 mb-4"
              />
              <p className="text-gray-400 text-[13px]">SHOWCASE</p>
              <h2 className="text-xl text-white font-normal">Projects</h2>
            </div>
            <div className="w-12 h-12 bg-[#393939] rounded-full flex items-center justify-center transition-all hover:scale-[1.02] hover:bg-[#625454]">
              <span className="text-2xl text-white"><FaPlus /></span>
            </div>
          </div>
        </div>

        {/* Blog Card */}
        <div
          className="bg-[#1A1A1A] rounded-2xl p-6 col-span-3 flex flex-row gap-4 w-full h-[200px] font-poppins 
        transform transition-all duration-300 hover:scale-[1.02] hover:bg-[#242424] cursor-pointer group opacity-0 translate-y-10 animate-slideUp"
        >
          <div className="flex flex-row justify-center items-center">
            <div className="flex flex-col">
              <img
                src={blogPng}
                alt="Project Image"
                className="w-24 h-20 mb-4"
              />
              <p className="text-gray-400 text-[13px]">BLOG</p>
              <h2 className="text-xl text-white font-normal">GFonts</h2>
            </div>
            <div className="w-12 h-12 bg-[#393939] rounded-full flex items-center justify-center ml-20 transition-all hover:scale-[1.02] hover:bg-[#625454]">
              <span className="text-2xl text-white"><FaPlus /></span>
            </div>
          </div>
        </div>

        {/* Service Offering */}
        <div
          className="bg-[#1A1A1A] rounded-2xl p-6 col-span-6 flex flex-row gap-4 w-full h-[200px] font-poppins 
        transform transition-all duration-300 hover:scale-[1.02] hover:bg-[#242424] cursor-pointer group opacity-0 translate-y-10 animate-slideUp"
        >
          <div className="flex flex-row justify-center items-center">
            <div className="flex flex-col">
              <div className="flex flex-row gap-20 mb-10 text-white text-[25px]">
                {icons.map((ico, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => setisIconHovered(index)}
                    onMouseLeave={() => setisIconHovered(null)}
                  >
                    <p className="transform transition-all duration-300 hover:scale-125 hover:text-[#ffc86b]">
                      {ico.icon}
                    </p>

                    {isIconHovered === index && (
                      <p className="absolute top-2 text-gray-400 text-[13px] bg-black px-2 py-1 rounded-md">
                        {ico.label}
                      </p>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-[13px]">SPECIALIZATION</p>
              <h2 className="text-xl text-white font-normal">
                Service Offering
              </h2>
            </div> 
            <div className="w-12 h-12 bg-[#393939] rounded-full flex items-center justify-center ml-[125px] transition-all hover:scale-[1.02] hover:bg-[#625454]">
              <span className="text-2xl text-white"><FaPlus /></span>
            </div>
          </div>
        </div>

        {/* Stay With Me */}
        <div
          className="bg-[#1A1A1A] rounded-2xl p-6 col-span-3 flex flex-row gap-4 w-full h-[200px] font-poppins 
        transform transition-all duration-300 hover:scale-[1.02] hover:bg-[#242424] cursor-pointer group opacity-0 translate-y-10 animate-slideUp"
        >
          <div className="flex flex-row justify-center items-center">
            <div className="flex flex-col">
              <div className="flex flex-row text-white gap-5 mb-10 text-[15px]">
                <FaTwitter className="bg-[#3939395d] p-2 w-8 h-8 rounded-2xl  cursor-pointer transition-all duration-300 hover:bg-[#74606090] hover:scale-110 " />
                <FaLinkedin className="bg-[#3939395d] p-2 w-8 h-8 rounded-2xl cursor-pointer transition-all duration-300 hover:bg-[#74606090] hover:scale-110 " />
              </div>
              <div className="flex flex-col">
                <p className="text-gray-400 text-[13px]">STAY WITH ME</p>
                <h2 className="text-xl text-white font-normal">Profiles</h2>
              </div>
            </div>
            <div className="w-12 h-12 bg-[#393939] rounded-full flex items-center justify-center ml-20 transition-all hover:scale-[1.02] hover:bg-[#625454]">
              <span className="text-2xl text-white"><FaPlus /></span>
            </div>
          </div>
        </div>

        {/* Experience Card */}
        <div
          className="bg-[#1A1A1A] rounded-2xl p-6 col-span-6 flex flex-row gap-4 w-full h-[200px] font-poppins 
        transform transition-all duration-300 hover:scale-[1.02] hover:bg-[#242424] cursor-pointer group opacity-0 translate-y-10 animate-slideUp"
        >
          <div className="flex flex-row gap-8">
            {[
              {
                label: (
                  <>
                    YEARS <br /> EXPERIENCE
                  </>
                ),
                end: 3,
              },
              { label: "CLIENTS  WORLDWIDE", end: 100 },
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
                className="w-36 h-40 bg-[#3939395d] rounded-3xl flex flex-col justify-center items-center font-poppins transition-transform duration-300 hover:scale-110"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <p className="text-white font-semibold text-[30px] text-center">
                  +
                  <CountUp
                    end={item.end}
                    duration={1000}
                    isHovered={hoveredIndex === index}
                  />
                </p>
                <p className="text-gray-400 font-normal text-[15px] text-center">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Let's Go together */}
        <div
          className="bg-[#1A1A1A] rounded-2xl p-6 col-span-6 flex flex-row gap-4 w-full h-[200px] font-poppins 
        transform transition-all duration-300 hover:scale-[1.02] hover:bg-[#242424] cursor-pointer group opacity-0 translate-y-10 animate-slideUp"
        >
          <div className="flex items-center font-poppins">
            <img src="" alt="" />
            <p className="text-[30px] text-white">
              Let's <br />
              Work <span className="text-[#ffc86b]">Together</span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex flex-col justify-center items-center pt-16 font-poppins opacity-0 translate-y-10 animate-slideUp">
        <img src={logo} alt="Logo" className="w-32 h-20 mb-8" />
        <p className="text-sm text-white">
          &copy; {new Date().getFullYear()} All Right Reserved By{" "}
          <span className="text-[#]">Mucyo Papy Blaise</span>
        </p>
      </footer>
    </div>
  );
};

export default Home;
