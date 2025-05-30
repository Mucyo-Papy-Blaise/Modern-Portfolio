import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Card, CardContent } from "../Component/Card"
import {MapPlus,TrashIcon,ArrowUpRightFromSquare} from "lucide-react"
import Button from "../Component/Button"
import Input from "../Component/Input"
import axios from "axios"
import Spinner from "../../Component/Spinner"
import ConfirmDialog from "../Component/ConfirmDialog"

const Projects = ()=> {
  const [isLoading, setIsloading] = useState<boolean>(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedId, setSelectedId] =  useState<string | null>(null)
  const [showDialog, setShowDialog] = useState<boolean>(false)
  const [projects, setProjects] = useState<{
    _id: string,
    projectName: string,
    category: string,
    image: string,
    description: string,
    tools: string[],
    features: string[],
    link: string,
  }[]>([])

  useEffect(()=>{
    const getProjects = async()=>{
      setIsloading(true)
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/project`)
        setProjects(res.data)
        console.log(res.data)
      } catch (error) {
        console.log("Failed to Fetch Projects data", error)
      }finally{
        setIsloading(false)
      }
    }
    getProjects()
  },[])

  const handleDelete =(id: string)=>{
    setSelectedId(id)
    setShowDialog(true)
  }

  const handleConfirmDelete =async()=>{
    if(!showDialog) return null
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/project/${selectedId}`)
      setProjects(projects.filter((prev)=> prev._id !== selectedId))
    } catch (error) {
      console.log('Failed to delete Projects Entry!')
    }finally{
      setSelectedId(null)
      setShowDialog(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Projects</h1>
          <p className="mt-2 text-white">Manage your project portfolio</p>
        </div>
        <Link to="/admin/projects/new">
          <Button>
            <span className="mr-2"><MapPlus/></span>
            Add Project
          </Button>
        </Link>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white">🔍</span>
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {isLoading ? (
        <Spinner />
      ): 
        projects.length > 0 ? 
        <div className="flex flex-col gap-3">
          {projects.map((project, index)=>
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex flex-col gap-4">
                  <img src={project.image} alt={project.projectName} className="w-20 h-20" />
                  {/* Header */}
                  <div className="flex items-start w-full">
                      <div className="flex flex-1 flex-col gap-2">
                          <p className="text-lg text-Color5 font-medium">{project.projectName}</p>
                          <p className='font-bold text-white text-2xl '>{project.category}</p>
                            <p className="text-Color4 text-xl">{project.description}</p> 
                            <div className="flex flex-row gap-3">
                              {project.tools.map((tool,index)=>
                              <p 
                              key={index}
                              className='text-color4 text-[13px] text-white bg-Color3 p-1 rounded-lg w-fit font-normal'>
                                {tool}</p>
                              )}
                            </div>
                            <div className="flex flex-row gap-3">
                             {project.features.map((feature, index)=>
                            <p 
                            key={index}
                            className="text-white bg-Color3 p-1 rounded-lg text-[13px] font-normal"
                            >
                              {feature}</p>
                            )}
                            </div>
                            <a href={project.link} className="text-white hover:text-Color5 cursor-pointer underline">Link  of project</a>
                      </div>

                    {/* Action Buttons */}
                    <div className="flex  shrink-0 items-center gap-2">
                      <button
                        className="p-2 text-blue-400 hover:text-blue-300 hover:bg-blue-500 hover:bg-opacity-20 rounded-md transition-colors"
                        title="Edit Experience"
                        onClick={() => console.log(`Edit experience ${project._id}`)}
                      >
                        <span className="text-lg"><ArrowUpRightFromSquare/></span>
                      </button>
                      <button
                        className="p-2 text-red-500 hover:text-red-300 hover:bg-red-700 hover:bg-opacity-20 rounded-md transition-colors"
                        title="Delete Experience"
                        onClick={() => handleDelete(project._id)}
                      >
                        <span className="text-lg"><TrashIcon /></span>
                      </button>
                    </div>
                  </div>
              </div>
              <ConfirmDialog 
                  open = {showDialog}
                  title='Confirm Deletion'
                  message='Do you want to delete this education entry?'
                  onConfirm={handleConfirmDelete}
                  onCancel={()=> setShowDialog(false)}
              />
            </CardContent>
          </Card>
          )}
        </div>
        :
        <Card>
        <CardContent className="text-center py-12">
          <div className="text-6xl mb-4">📁</div>
          <h3 className="text-lg font-medium text-white mb-2">No projects yet</h3>
          <p className="text-white mb-4">Get started by creating your first project.</p>
          <Link to="/admin/projects/new">
            <Button>
              <span className="mr-2"><MapPlus/></span>
              Add Project
            </Button>
          </Link>
        </CardContent>
      </Card> 
      }
    </div>
  )
}
export default Projects