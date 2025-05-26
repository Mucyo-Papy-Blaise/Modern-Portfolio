import { Link } from "react-router-dom"
import Button from "../Component/Button"
import { Card, CardContent } from "../Component/Card"
import { useEffect, useState } from "react"
import axios from "axios"
import Badge from "../Component/Badge"
import {BriefcaseBusiness,Clock11Icon, MapPlus,TrashIcon,ArrowUpRightFromSquare} from "lucide-react"
import DateFormat from '../../Component/DateFormat'
import Spinner from "../../Component/Spinner"

const Experience = () => {

  const [isloading,setIsLoading] =  useState<boolean>(false)
  const [experiences, setExperiences] =  useState<{
    id: number
    company: string,
    role: string,
    employment: string,
    startDate: Date,
    endDate?: Date,
    current: boolean,
    description: string,
  }[]>([])

  useEffect(()=>{
    const getExperiences = async()=>{
      try {
        setIsLoading(true)
        const res = await axios.get('http://localhost:5000/experience')
        setExperiences(res.data)
      } catch (error: any) {
        console.log('Error fetching experience Data', error)
      }finally{
        setIsLoading(false)
      }
    }
    getExperiences()
  },[])

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this experience?")) {
      setExperiences(experiences.filter((exp) => exp.id !== id))
    }
  }
  return (
    <div className="space-y-6 font-poppins">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Experience</h1>
          <p className="mt-2 text-white">Manage your work experience</p>
        </div>
        <Link to="/admin/experience/new">
          <Button className="bg-color5 text-Color1 hover:bg-[#fad28d]">
            <span className="mr-2"><MapPlus /></span>
            Add Experience
          </Button>
        </Link>
      </div>
      {isloading ? (
        <Spinner />
      ): 
        experiences.length > 0 ? 
      <div className="flex flex-col gap-10">
        {experiences.map((experience, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                <div className="flex-1">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 ">
                        <span className="text-2xl text-white"><BriefcaseBusiness/></span>
                        <div>
                          <p className="text-lg text-color5 font-medium">{experience.company}</p>
                        </div>
                        <div className="flex flex-row gap-5 items-center">
                          <Clock11Icon size={15} className="text-white"/>
                          <p className="text-white">{DateFormat(experience.startDate)}</p> <span className="font-bold text-xl text-white">-</span>
                        {experience.current ? (
                          <Badge variant="default" className="bg-color5 text-Color1">
                            Current
                          </Badge>
                        ) : (
                          <p className="text-white">{DateFormat(experience.endDate ?? new Date())}</p>
                        )}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 ml-4">
                      <button
                        className="p-2 text-blue-400 hover:text-blue-300 hover:bg-blue-500 hover:bg-opacity-20 rounded-md transition-colors"
                        title="Edit Experience"
                        onClick={() => console.log(`Edit experience ${experience.id}`)}
                      >
                        <span className="text-lg"><ArrowUpRightFromSquare/></span>
                      </button>
                      <button
                        className="p-2 text-red-500 hover:text-red-300 hover:bg-red-700 hover:bg-opacity-20 rounded-md transition-colors"
                        title="Delete Experience"
                        onClick={() => handleDelete(index)}
                      >
                        <span className="text-lg"><TrashIcon /></span>
                      </button>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-white mb-4 leading-relaxed">{experience.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      : 
      <Card>
        {/* Empty State */}
        <CardContent className="text-center py-12">
          <div className="text-6xl mb-4">💼</div>
          <h3 className="text-lg font-medium text-white mb-2">No experience entries yet</h3>
          <p className="text-white mb-4">Add your work experience to showcase your career journey.</p>
          <Link to="/admin/experience/new">
            <Button>
              <span className="mr-2">➕</span>
              Add Experience
            </Button>
          </Link>
        </CardContent>
      </Card>
      }
    </div>
  )
}

export default Experience
