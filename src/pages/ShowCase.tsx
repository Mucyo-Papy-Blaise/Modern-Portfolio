import React, { useEffect } from "react";
import "../index.css";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Globe,ArrowUpRightFromSquareIcon } from "lucide-react";
import PageTransition from '../Component/PageTransition';
import axios from "axios";
import Spinner from "../Component/Spinner";

const Projects: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsloading] =  useState<boolean>(false)
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isScrollable, setIsScrollable] = useState(false);
  const [projects, setProjects] = useState<{
    projectName: string,
    category:string,
    image: string,
    description:string,
    tools: string[]
    features:string[]
    link: string
  }[]>([])

  useEffect(()=>{
    const getProjects = async()=>{
      setIsloading(true)
      try {
        const res = await axios.get('http://localhost:5000/project')
        setProjects(res.data)
      } catch (error) {
        console.log("Fail to Fetch Project Data Entry!")
      }finally{
        setIsloading(false)
      }
    }
    getProjects()
  },[])

  const handleClick = (projectId: number) => {
  setSelectedId(selectedId === projectId ? null : projectId);
  setIsScrollable(selectedId !== projectId);

};
  return (
    <PageTransition>
      <div className="w-full min-h-screen bg-[#111111] p-8">
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="container mx-auto px-4 md:px-8 lg:px-40">
          <button
            className="pb-8 flex flex-row items-center justify-center gap-1"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="text-gray-400" />
            <p className="text-gray-400 text-[20px]">Back</p>
          </button>
          
          <div className="flex items-center justify-center gap-4 pb-5">
            <h1 className="font-bold text-[30px] text-[#ffc86b]">Projects</h1>
            <div className="flex-1 bg-[#1A1A1A] h-[1px]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                layoutId={`project-${index}`}
                onClick={() => handleClick(index)}
                className={`bg-[#1A1A1A] max-h-[400px] rounded-2xl overflow-hidden cursor-pointer group transition-all duration-300 scrollbar-thumb-[#fa0153] scrollbar-track-[#161720]  
                    ${isScrollable ? "overflow-y-auto" : "overflow-hidden"}
                    ${selectedId && selectedId !== index ? 'opacity-50 scale-95' : ''
                }`}
              >
                <motion.div
                  initial={false}
                  animate={{ height: selectedId === index ? 'auto' : '100%' }}
                  transition={{ duration: 0.3 }}
                >
                  {selectedId === index ? (
                    <motion.div
                      className="p-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-2xl font-semibold text-white">
                          {project.projectName}
                        </h3>
                        <ArrowRight className="text-[#ffc86b]" size={20} />
                      </div>
                      <p className="text-gray-400 mb-4">{project.description}</p>

                      <div className="mb-4">
                        <h4 className="text-[#ffc86b] font-medium mb-2">
                          Tools Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tools.map((tool, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-[#252525] rounded-full text-sm text-white"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-[#ffc86b] font-medium mb-2">
                          Features
                        </h4>
                        <div className="flex flex-row text-Color1 gap-3">
                          {project.features.map((feature, index) => (
                            <p key={index} className="text-sm mb-1 bg-Color5 p-1 rounded">
                              {feature}
                            </p>
                          ))}
                        </div>
                      </div>

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#ffc86b] hover:underline"
                      >
                        <Globe size={16} />
                        Visit Project
                      </a>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.projectName}
                          className="w-full h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="px-6 py-2 bg-[#ffc86b] text-black rounded-full font-medium">
                            View Details
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <p className="text-gray-400 text-sm mb-2">
                          {project.category}
                        </p>
                        <div className="flex flex-row gap-3 justify-between">
                          <h3 className="text-xl font-semibold text-white">{project.projectName}</h3>
                          <a href={project.link} className="flex flex-row gap-2 items-center text-Color5 hover:underline"><ArrowUpRightFromSquareIcon size={15}/><span>Demo</span></a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
        )}
      </div>
    </PageTransition>
  );
};

export default Projects;