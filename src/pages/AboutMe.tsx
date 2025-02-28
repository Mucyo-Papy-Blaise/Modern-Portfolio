import React from "react";
import pflPhoto from "../assets/Mucyo Papy Blaise 222004130jpg copy.jpg";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { education, experience, skills } from "../Data/Data";
import { useNavigate } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import Mycv from '../assets/My_Cv.pdf'

const AboutMe: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className="w-full min-h-screen bg-[#111111] p-2 md:p-8">
      <div className="w-full md:max-w-[1024px] md:mx-auto">
        <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="relative pl-4 pb-2  md:pl-8 md:pb-12 last:pb-0"
        >
        <button className="pb-8 flex flex-row justify-center items-center gap-3" onClick={()=> navigate("/")}>
          <FaArrowLeft className="text-gray-400" />
          <p className="text-gray-400 font-poppins text-[20px]">Back</p>
        </button>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-[300px] md:w-[250px] h-[250px] bg-white overflow-hidden rounded-2xl">
            <img
              src={pflPhoto}
              alt="Profile photo"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col max-w-[320px] md:max-w-[500px]">
            <h1 className="font-poppins text-white text-[25px]">Who am I?</h1>
            <p className="text-[15px] text-gray-400 font-poppins mt-5 ">
              I'm a passionate Web Designer based in Kigali, Rwanda, with a
              strong focus on creating beautiful and functional digital
              experiences. With 3 years of experience in the field, I've had the
              pleasure of working with clients worldwide. <br /> <br /> My
              approach combines creativity with technical expertise, ensuring
              that every project not only looks stunning but also delivers
              results.
            </p>
              <a href={Mycv} 
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 border-[#ffc86b] border-[1px] w-full md:w-[50%] p-2 rounded-lg flex flex-row justify-center items-center gap-2 md:gap-6 hover:bg-[#39393952]"
              >
            <FaDownload className="text-white "/>
            <p className="text-white font-poppins sm:text-[12px]">Download CV</p>
              </a>
          </div>
        </div>
        </motion.div>

        {/*Education Background  */}
        <div className="mt-2 md:mt-8 p-6 font-poppins">
          <div className="flex items-center justify-center gap-2  md:gap-4">
            <h1 className="font-bold text-[18px] md:text-[30px] text-white">Education</h1>
            <div className="flex-1 bg-[#1A1A1A] h-[1px]" />
          </div>
          <div className="mt-5 md:mt-10 relative">
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#ffc86b] opacity-20"></div>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-4 md:pl-8 pb-12 last:pb-0"
              >
                <div className="absolute left-[-5px] top-0 w-[11px] h-[11px] rounded-full bg-[#ffc86b]"></div>
                <div className="text-[#ffc86b] text-sm mb-2">{edu.year}</div>
                <div className="text-xl text-white font-semibold mb-1">
                  {edu.title}
                </div>
                <div className="text-gray-400 text-sm mb-2">
                  {edu.institution}
                </div>
                <div className="text-gray-400">{edu.description}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experinces */}
        <div className="bg-[#39393952] w-full p-2 md:p-5 rounded-2xl mt-5 md:mt-10">
          <h1 className="text-center font-poppins text-[#ffc86b] text-[25px] md:text-[30px] font-bold">
            Experience
          </h1>
          <div className="relative font-poppins text-white mt-8 md:mt-16 pl-5  md:pl-10">
            <div className="absolute left-5 md:left-10 top-0 bottom-0 w-[1px] bg-[#ffc86b] opacity-20"></div>
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3 }}
                className="relative pl-4 md:pl-8 pb-6 md:pb-12 last:pb0"
              >
                <div className="absolute left-[-5px] top-0 w-[11px] h-[11px] rounded-full bg-[#ffc86b]"></div>
                <div className="text-[#ffc86b] text-sm mb-2">{exp.company}</div>
                <div className="text-[15px] md:text-xl text-white font-semibold mb-1">
                  {exp.workAs} • {exp.workType}
                </div>
                <div className="text-gray-400 text-sm mb-2">
                  {exp.Time} - {exp.Time}
                </div>
                <div className="text-gray-300">{exp.description}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className=" mt-4 md:mt-8 p-2 md:p-5 w-full font-poppins">
          {/* Header */}
          <div className="flex items-center justify-center gap-4">
            <h1 className="font-bold text-[18px] md:text-[30px] text-white">Skills</h1>
            <div className="flex-1 bg-[#1A1A1A] h-[1px]" />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {/* First 4 items */}
            {skills.slice(0, 4).map((skill, index) => (
              <div key={index} className="flex  justify-center">
                <div className="bg-[#242424] w-[200px] h-[150px] md:w-[230px] md:h-[230px] flex flex-col gap-2 md:gap-4 items-center justify-center rounded-3xl cursor-pointer transition-all duration-300 hover:scale-[1.03]">
                  <img src={skill.icon} alt="Icon" className=" w-8 md:w-12 h-[28px] md:h-[48px]" />
                  <p className="text-white font-poppins font-bold text-[15px] md:text-[18px]">
                    {skill.title}
                  </p>
                  <p className="text-white font-bold text-[14px]">{skill.percentage}%</p>
                  <div className="bg-slate-500 w-[100px] h-[5px] md:w-[160px] md:h-[10px] rounded-3xl overflow-hidden">
                    <div className={`${skill.level} rounded-full`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row: Last 2 items */}
          <div className="flex justify-center gap-4 mt-4">
            {skills.slice(4, 6).map((skill, index) => (
              <div
                key={index}
                className="bg-[#242424]  w-[200px] h-[150px] md:w-[230px] md:h-[230px] flex flex-col gap-4 items-center justify-center rounded-3xl cursor-pointer transition-all duration-300 hover:scale-[1.03]"
              >
                <img src={skill.icon} alt="Icon" className="w-8 md:w-12 h-[28px] md:h-[48px]" />
                <p className="text-white font-poppins font-bold text-[15px] md:text-[18px]">
                  {skill.title}
                </p>
                <p className="text-white font-bold text-[14px]">{skill.percentage}%</p>
                <div className="bg-slate-500 w-[100px] h-[5px] md:w-[160px] md:h-[10px] rounded-3xl overflow-hidden">
                  <div className={`${skill.level} rounded-full`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
