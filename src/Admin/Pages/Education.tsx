import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '../Component/Card';
import Button from '../Component/Button';
import {Clock11Icon, MapPlus,TrashIcon,ArrowUpRightFromSquare} from "lucide-react"
import Spinner from '../../Component/Spinner';
import DateFormat from '../../Component/DateFormat'
import ConfirmDialog from '../Component/ConfirmDialog';

const Education =()=> {
  const [isLoading, setIsloading] = useState<boolean>(false)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [showDialog, setShowDialog] = useState<boolean>(false)
  const [educations, setEducations] = useState<{
    _id: string;
    startYear: Date,
    endYear:Date,
    program: string,
    school: string,
    degree: string
  }[]>([])

  useEffect(()=>{
    const getEducations = async()=>{
      try {
        setIsloading(true)
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/education`)
        setEducations(res.data)
      } catch (error) {
        console.log('Failed to Get Education Data', error)
      }finally{
        setIsloading(false)
      }
    }
    getEducations()
  },[])

  const handleDelete =(id: string)=>{
    setSelectedId(id)
    setShowDialog(true)
  }

  const handleConfirmDelete = async() => {
   if(!selectedId) return null
   try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/education/${selectedId}`)
      setEducations(educations.filter((prev)=> prev._id !== selectedId))
   } catch (error) {
    console.log('Failed to delete selected education')
   }finally{
    setSelectedId(null)
    setShowDialog(false)
   }
  }

  return (
    <div className='w-full min-h-screen bg-Color1 font-poppins'>
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Education</h1>
          <p className="mt-2 text-white">Manage your educational background</p>
        </div>
        <Link to="/admin/education/new">
          <Button>
            <span className="mr-2"><MapPlus/></span>
            Add Education
          </Button>
        </Link>
      </div>
      {isLoading ? (
        <Spinner />
      ): 
        educations.length > 0 ? 
      <div className="flex flex-col gap-3">
        {educations.map((education, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                <div className="flex-1">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex flex-col gap-3 ">
                        <div className='flex flex-col'>
                            <p className="text-lg text-Color5 font-medium">{education.program}</p>
                          <p className='font-bold text-white text-2xl '>{education.school}</p>
                        </div>

                        <div className="flex flex-row gap-5 items-center">
                            <Clock11Icon size={13} className="text-white"/>
                            <p className="text-Color4 text-[13px]">{DateFormat(education.startYear)}</p> 
                            <span className="font-bold text-xl text-white">-</span>
                            <p className='text-color4 text-[13px] text-Color4'>{DateFormat(education.endYear)}</p>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 ml-4">
                      <button
                        className="p-2 text-blue-400 hover:text-blue-300 hover:bg-blue-500 hover:bg-opacity-20 rounded-md transition-colors"
                        title="Edit Experience"
                        onClick={() => console.log(`Edit experience ${education._id}`)}
                      >
                        <span className="text-lg"><ArrowUpRightFromSquare/></span>
                      </button>
                      <button
                        className="p-2 text-red-500 hover:text-red-300 hover:bg-red-700 hover:bg-opacity-20 rounded-md transition-colors"
                        title="Delete Experience"
                        onClick={() => handleDelete(education._id)}
                      >
                        <span className="text-lg"><TrashIcon /></span>
                      </button>
                    </div>
                  </div>
                  <ConfirmDialog 
                  open = {showDialog}
                  title='Confirm Deletion'
                  message='Do you want to delete this education entry?'
                  onConfirm={handleConfirmDelete}
                  onCancel={()=> setShowDialog(false)}
                  />
                
                  {/* Description */}
                  <p className="text-white mb-4 leading-relaxed">{education.degree}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      : 
      <Card>
        <CardContent className="text-center py-12">
          <div className="text-6xl mb-4">🎓</div>
          <h3 className="text-lg font-medium text-white mb-2">No education entries yet</h3>
          <p className="text-white mb-4">Add your educational background and certifications.</p>
          <Link to="/admin/education/new">
            <Button>
              <span className="mr-2">➕</span>
              Add Education
            </Button>
          </Link>
        </CardContent>
      </Card>
      }
      
    </div>
    </div>
  );
}
export default Education