import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Card, CardContent } from "../Component/Card"
import {MapPlus,TrashIcon,ArrowUpRightFromSquare} from "lucide-react"
import Button from "../Component/Button"
import Input from "../Component/Input"
import axios from "axios"
import Spinner from "../../Component/Spinner"
import ConfirmDialog from "../Component/ConfirmDialog"
import IconRenderer from "../Component/IconRender"

const Services = ()=> {
  const [isLoading, setIsloading] = useState<boolean>(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedId, setSelectedId] =  useState<string | null>(null)
  const [showDialog, setShowDialog] = useState<boolean>(false)
  const [services, setServices] = useState<{
    _id: string,
    icon: string,
    serviceName: string,
    description: string,
    features: string[],
  }[]>([])

  useEffect(()=>{
    const getServices = async()=>{
      setIsloading(true)
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/service`)
        setServices(res.data.services)
        console.log(res.data)
      } catch (error) {
        console.log("Failed to Fetch Projects data", error)
      }finally{
        setIsloading(false)
      }
    }
    getServices()
  },[])
  const handleConfirmDelete =async()=>{
    if(!showDialog) return null
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/service/${selectedId}`) 
      setServices((services.filter((prev)=>prev._id !== selectedId)))
    } catch (error) {
      console.log('Failed to delete Service!')
    }finally{
      setShowDialog(false)
      setSelectedId(null)
    }
  }
  
const handleDelete =(id: string)=>{
    setSelectedId(id)
    setShowDialog(true)
}
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Services</h1>
          <p className="mt-2 text-white">Manage your Services portfolio</p>
        </div>
        <Link to="/admin/service/new">
          <Button>
            <span className="mr-2"><MapPlus/></span>
            Add Service
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
        services.length > 0 ? 
        <div className="flex flex-col gap-3">
          {services.map((service, index)=>
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex flex-col gap-4">
                  <div className="bg-Color4 p-1 w-16 h-16 rounded-full flex items-center justify-center">
                    <IconRenderer 
                    iconName={service.icon}
                    className="w-12 h-12 text-Color5"
                  />
                  </div>
                  {/* Header */}
                  <div className="flex items-start w-full">
                      <div className="flex flex-1 flex-col gap-2">
                          <p className="text-lg text-Color5 font-medium">{service.serviceName}</p>
                          <p className='font-bold text-white text-2xl '>{service.description}</p>
                            <div className="flex flex-row gap-3">
                              {service.features.map((feature,index)=>
                              <p 
                              key={index}
                              className='text-color4 text-[13px] text-white bg-Color3 p-1 rounded-lg w-fit font-normal'>
                                {feature}</p>
                              )}
                            </div>
                      </div>

                    {/* Action Buttons */}
                    <div className="flex  shrink-0 items-center gap-2">
                      <button
                        className="p-2 text-blue-400 hover:text-blue-300 hover:bg-blue-500 hover:bg-opacity-20 rounded-md transition-colors"
                        title="Edit Service"
                        onClick={() => console.log(`Edit experience ${service._id}`)}
                      >
                        <span className="text-lg"><ArrowUpRightFromSquare/></span>
                      </button>
                      <button
                        className="p-2 text-red-500 hover:text-red-300 hover:bg-red-700 hover:bg-opacity-20 rounded-md transition-colors"
                        title="Delete Service"
                        onClick={() => handleDelete(service._id)}
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
          <h3 className="text-lg font-medium text-white mb-2">No Service yet</h3>
          <p className="text-white mb-4">Get started by creating your first Service.</p>
          <Link to="/admin/projects/new">
            <Button>
              <span className="mr-2"><MapPlus/></span>
              Add Service
            </Button>
          </Link>
        </CardContent>
      </Card> 
      }
    </div>
  )
}
export default Services
