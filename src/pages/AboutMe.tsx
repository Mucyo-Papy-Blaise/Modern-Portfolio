import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import axios from "axios";
import Spinner from "../Component/Spinner";
import DateFormat from '../Component/DateFormat'

const AboutMe: React.FC = () => {
  const navigate = useNavigate();

  const [educations, setEducations] = useState<
    {
      startYear: string;
      endYear: string;
      program: string;
      school: string;
      degree: string;
    }[]
  >([]);

  const [experiences, setExperiences] = useState<
    { company: string; 
      role: string; 
      employment: string; 
      startDate: string; 
      endDate: string;
      current: boolean 
      description: string }[]
  >([]);

  const [profiles, setProfiles] = useState<{
      image: string,
      cv: string,
      description: string
  }[]>([])

  const [skills, setSkills] = useState<{
    image: string,
    title: string,
    percentage: string,
  }[]>([])

  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    const getEducation = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/education`);
        setEducations(res.data);
      } catch (error) {
        console.error("Error fetching education data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getEducation();
  }, []);

  useEffect(()=>{
    const getExperience = async()=>{
      try {
        setIsLoading(true)
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/experience`)
        console.log(res.data)
        setExperiences(res.data)
      } catch (error) {
        console.log('Error fetching experience Data', error)
      }finally{
        setIsLoading(false)
      }
    }
    getExperience()
  },[])

  useEffect(()=>{
    const getProfile = async()=>{
        try {
          setIsLoading(true)
          const res = await axios.get(`${import.meta.env.VITE_API_URL}/profile`)
          console.log(res.data)
          setProfiles(res.data)
        } catch (error) {
          console.log('Error Fetching profile data', error)
        }finally{
          setIsLoading(false)
        }
    }
    getProfile()
  },[])

  useEffect(()=>{
    const getSkills =async()=>{
      try {
        setIsLoading(true)
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/skill`)
        setSkills(res.data)
        console.log(res.data)
      } catch (error) {
        console.log('Failed to Fetch Skills Data', error)
      }finally{
        setIsLoading(false)
      }
    }
    getSkills()
  },[])

  return (
    <div className="w-full min-h-screen bg-lightbg dark:bg-Color1 p-2 md:p-8 pt-10">
      <div className="w-full container mx-auto px-2 md:px-8 lg:px-32 mt-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="relative pl-4 pb-2  md:pl-8 md:pb-12 last:pb-0"
        >
          <button
            className="pb-8 flex flex-row justify-center items-center gap-3 pt-5"
            onClick={() => navigate("/")}
          >
            <FaArrowLeft className="dark:text-gray-400 text-lightText" />
            <p className="dark:text-gray-400 text-lightText font-poppins text-[20px]">Back</p>
          </button>
          {isloading ? (
            <Spinner />
          ): (
          profiles.map((profile, index)=>
          <div 
          key={index}
          className="flex flex-col md:flex-row gap-10"
          >
            <div className="w-[300px] md:w-[250px] h-[250px] bg-white overflow-hidden rounded-2xl">
              <img
                src={profile.image}
                alt="Profile photo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col max-w-[320px] md:max-w-[500px]">
              <h1 className="font-poppins text-black dark:text-white text-[25px]">Who am I?</h1>
              <div className="text-[15px] text-lightText dark:text-gray-400 font-poppins mt-5 space-y-3 ">
                {profile.description
                .split('. ')
                .filter(s => s.trim()).map((p,i)=>
                <p key={i}>{p.trim()}</p>
                )}
              </div>
              <a
                href={profile.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 border-[#ff6041] dark:border-[#ffc86b] border-[1px] w-full md:w-[50%] p-2 rounded-lg flex flex-row justify-center items-center gap-2 md:gap-6 hover:bg-[#39393952]"
              >
                <FaDownload className="text-lightText dark:text-white " />
                <p className="dark:text-white text-lightText font-poppins sm:text-[12px]">
                  Download CV
                </p>
              </a>
            </div>
          </div>
          )
          )}
        </motion.div>

        {/*Education Background  */}
        <div className="mt-2 md:mt-8 p-6 font-poppins">
          <div className="flex items-center justify-center gap-2  md:gap-4">
            <h1 className="font-bold text-[18px] md:text-[30px] text-black dark:text-white">
              Education
            </h1>
            <div className="flex-1 bg-[#1A1A1A] h-[1px]" />
          </div>
          <div className="mt-5 md:mt-10 relative">
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-lightThirdColor dark:bg-[#ffc86b] opacity-20"/>
            {isloading ? (
              <Spinner />
            ) : (
              educations?.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-4 md:pl-8 pb-12 last:pb-0"
                >
                  <div className="absolute left-[-5px] top-0 w-[11px] h-[11px] rounded-full bg-lightThirdColor dark:bg-[#ffc86b]" />
                  <div className="flex flex-row gap-2">
                    <p className="text-lightThirdColor dark:text-[#ffc86b] text-sm mb-2">
                      {DateFormat(edu.startYear)}
                    </p>
                    <span className="font-bold text-xl text-lightText dark:text-white">-</span>
                    <p className="text-lightThirdColor dark:text-[#ffc86b] text-sm mb-2">{DateFormat(edu.endYear)}</p>
                  </div>
                  <div className="text-xl text-lightText dark:text-white font-semibold mb-1">
                    {edu.program}
                  </div>
                  <div className="text-lightText dark:text-gray-400 text-sm mb-2">{edu.school}</div>
                  <div className="text-lightText dark:text-gray-400">{edu.degree}</div>
                </motion.div>
              ))
            )}
          </div>
        </div>

        {/* Experinces */}
        <div className="mt-2 md:mt-8 p-6 font-poppins">
          <div className="flex items-center justify-center gap-2  md:gap-4">
            <h1 className="font-bold text-[18px] md:text-[30px] text-lightText dark:text-white">
              Experience
            </h1>
            <div className="flex-1 bg-[#1A1A1A] h-[1px]" />
          </div>
          <div className="relative font-poppins text-lightText dark:text-white mt-8 md:mt-16">
            <div className="absolute top-0 bottom-0 w-[1px]  bg-lightThirdColor dark:bg-[#ffc86b] opacity-20" />
            {isloading ? (
              <Spinner />
            ): (
              experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3 }}
                className="relative pl-4 md:pl-8 pb-12 last:pb-0"
              >
                <div className="absolute left-[-5px] top-0 w-[11px] h-[11px] rounded-full  bg-lightThirdColor dark:bg-[#ffc86b]" />
                <div className=" text-lightThirdColor dark:text-[#ffc86b] text-sm mb-2">{exp.company}</div>
                <div className="text-[15px] md:text-xl dark:text-white font-semibold mb-1">
                  {exp.role} • {exp.employment}
                </div>
                <div className="dark:text-gray-400 text-lightText text-sm mb-2">
                  {DateFormat(exp.startDate)} -{exp.current ? "Present" : DateFormat(exp.endDate)}
                </div>
                <div className="dark:text-gray-300 text-lightText md:space-y-2 space-y-4">
                  {exp.description
                    .split('. ') 
                    .filter(s => s.trim())
                    .map((s, i) => (
                      <p key={i}>{s.trim()}.</p>
                    ))}
                </div>
              </motion.div>
            ))
            )}
          </div>
        </div>

        {/* Skills */}
        <div className=" mt-4 md:mt-8 p-2 md:p-5 w-full font-poppins">
          {/* Header */}
          <div className="flex items-center justify-center gap-4">
            <h1 className="font-bold text-[18px] md:text-[30px] text-lightText dark:text-white">
              Skills
            </h1>
            <div className="flex-1 bg-Color2 h-[1px]" />
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {/* First 4 items */}
            {skills.slice(0, 4).map((skill, index) => (
              <div key={index} className="flex  justify-center">
                <div className="dark:bg-[#242424] bg-lightCard w-[200px] h-[150px] md:w-[200px] md:h-[230px] flex flex-col gap-2 md:gap-4 items-center justify-center rounded cursor-pointer transition-all duration-300 hover:scale-[1.03]">
                  <img
                    src={skill.image}
                    alt="Icon"
                    className=" w-8 md:w-12 h-[28px] md:h-[48px]"
                  />
                  <p className="text-lightText dark:text-white font-poppins font-bold text-[15px] md:text-[18px]">
                    {skill.title}
                  </p>
                  <p className="text-lightText dark:text-white font-bold text-[14px]">
                    {skill.percentage}%
                  </p>
                  <div className="bg-slate-500 w-[100px] h-[5px] md:w-[160px] md:h-[10px] rounded-3xl overflow-hidden">
                <div
                  className="bg-lightThirdColor dark:bg-Color5 h-full rounded-full"
                  style={{ width: `${parseInt(skill.percentage)}%` }}
                ></div>
                </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row: Last 2 items */}
          <div className="flex justify-start gap-4 mt-4">
            {skills.slice(4, 6).map((skill, index) => (
              <div
                key={index}
                className="bg-lightCard dark:bg-[#242424]  w-[200px] h-[150px] md:w-[230px] md:h-[230px] flex flex-col gap-4 items-center justify-center rounded-3xl cursor-pointer transition-all duration-300 hover:scale-[1.03]"
              >
                <img
                  src={skill.image}
                  alt="Icon"
                  className="w-8 md:w-12 h-[28px] md:h-[48px]"
                />
                <p className="text-lightText dark:text-white font-poppins font-bold text-[15px] md:text-[18px]">
                  {skill.title}
                </p>
                <p className="text-lightText dark:text-white font-bold text-[14px]">
                  {skill.percentage}%
                </p>
                <div className="bg-slate-500 w-[100px] h-[5px] md:w-[160px] md:h-[10px] rounded-3xl overflow-hidden">
                <div
                  className="bg-yellow-400 h-full rounded-full"
                  style={{ width: `${parseInt(skill.percentage)}%` }}
                ></div>
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
