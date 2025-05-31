import { Link } from "react-router-dom"
import { Card, CardContent } from "../Component/Card"
import Button from "../Component/Button"
import { useEffect, useState } from "react"
import axios from "axios"
import Spinner from "../../Component/Spinner"
import { ArrowUpRightFromSquare, TrashIcon } from "lucide-react"
import ConfirmDialog from "../Component/ConfirmDialog"

const Skills =()=> {
  const[isloading, setIsLoading] = useState<boolean>(false)
  const [showDialog, setShowDialog] = useState<boolean>(false)
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const [skills, setSkills] =  useState<{
    _id: string,
    title: string,
    level: string,
    percentage: string,
    image: string,
  }[]>([])


  useEffect(()=>{
    const getSkills = async()=>{
      setIsLoading(true)
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/skill`)
        console.log(res.data)
        setSkills(res.data)
      } catch (error) {
        console.log('Failed to Fetch Data', error)
      }finally{
        setIsLoading(false)
      }
    }
    getSkills()
  },[])

  const handleConfirmDelete =async()=>{
    if(!selectedId) return null
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/skill/${selectedId}`)
      setSkills(skills.filter((prev)=> prev._id !== selectedId))
    } catch (error) {
      console.log("Failed to Delete Skill", error)
    }finally{
      setSelectedId(null)
      setShowDialog(false)
    }
  }

  const handleDelete=(id: string)=>{
    setSelectedId(id)
    setShowDialog(true)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Skills</h1>
          <p className="mt-2 text-white">Manage your technical and professional skills</p>
        </div>
        <Link to="/admin/skills/new">
          <Button>
            <span className="mr-2">➕</span>
            Add Skill
          </Button>
        </Link>
      </div>

      {isloading ? (
        <Spinner />
      ):
      skills.length > 0 ? 
      <div className="flex flex-col gap-3">
      {skills.map((skill, index)=>
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex flex-col gap-4">
                  <div className="bg-Color4 w-16 h-16 rounded flex items-center justify-center">
                    <img src={skill.image} alt={skill.title} 
                    className="w-full h-full rounded"
                    />
                  </div>
                  {/* Header */}
                  <div className="flex items-start w-full">
                      <div className="flex flex-1 flex-col gap-2">
                          <p className="text-lg text-Color5 font-medium">{skill.title}</p>
                          <p className='font-bold text-white text-2xl '>{skill.level}</p>
                      </div>

                    {/* Action Buttons */}
                    <div className="flex  shrink-0 items-center gap-2">
                      <button
                        className="p-2 text-blue-400 hover:text-blue-300 hover:bg-blue-500 hover:bg-opacity-20 rounded-md transition-colors"
                        title="Edit Service"
                        onClick={() => console.log(`Edit experience ${skill._id}`)}
                      >
                        <span className="text-lg"><ArrowUpRightFromSquare/></span>
                      </button>
                      <button
                        className="p-2 text-red-500 hover:text-red-300 hover:bg-red-700 hover:bg-opacity-20 rounded-md transition-colors"
                        title="Delete Service"
                        onClick={() => handleDelete(skill._id)}
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
      :<Card>
        <CardContent className="text-center py-12">
          <div className="text-6xl mb-4">🏆</div>
          <h3 className="text-lg font-medium text-white mb-2">No skills yet</h3>
          <p className="text-white mb-4">Add your skills to showcase your expertise.</p>
          <Link to="/admin/skills/new">
            <Button>
              <span className="mr-2">➕</span>
              Add Skill
            </Button>
          </Link>
        </CardContent>
      </Card>
      }

    </div>
  )
}
export default Skills
