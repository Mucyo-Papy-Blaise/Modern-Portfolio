import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../Component/Card"
import Button from "../Component/Button"
import Input from "../Component/Input"
import Notification from "../Component/Notification"

const EducationNew = ()=> {

  const [notification, setNotification] = useState<{
    message: string
    type: "success" | "error"
    visible: boolean
  }>({
    message: "",
    type: "success",
    visible: false
  })

  const [formData, setFormData] =  useState({
    startYear:"",
    endYear: "",
    program: "",
    school: "",
    degree: "",
  })

  const handleSubmitChange = async(e: React.FormEvent)=>{
    e.preventDefault()

    const data = new FormData()

    data.append('startYear', formData.startYear)
    data.append('endYear', formData.endYear)
    data.append('program', formData.program)
    data.append('school', formData.school)
    data.append('degree', formData.degree)

    try {
      const response = await axios.post('http://localhost:5000/education', formData) 
      console.log(response.data)

      setFormData({
        startYear:"",
        endYear: "",
        program: "",
        school: "",
        degree: "",
      })

      setNotification({
        message: "Experience created successfully!",
        type: "success",
        visible: true
      })
    } catch (error) {
      console.log('enter education failed', error)

      setNotification({
        message: "Failed to create experience. Try again",
        type: "error",
        visible: true
      })
    }finally{
      setTimeout(() => {
        setNotification((prev)=>({...prev, visible:false}))
      }, 3000);
    }
  }

  return (
    <div className="w-full h-screen  bg-Color1">
    <div className="font-poppins">
      <div className="flex flex-col items-start gap-4 mb-5">
        <Link to="/admin/education">
          <Button variant="ghost" size="sm">
            <span className="mr-2">←</span>
            Back to Education
          </Button>
        </Link>
      </div>

      <form onSubmit={handleSubmitChange} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Enter the basic details of your education</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Program I studied */}
              <div>
                <label htmlFor="program" className="block text-sm font-medium text-white mb-2">
                  Program
                </label>
                <Input
                  id="program"
                  name = 'program'
                  value={formData.program}
                 onChange={(e) => setFormData((prev) => ({ ...prev, program: e.target.value }))}
                  placeholder="e.g., Bachelor of Computer Science"
                  required
                />
              </div>
              {/* Which School I studied it */}
              <div>
                <label htmlFor="institution" className="block text-sm font-medium text-white mb-2">
                  Institution
                </label>
                <Input
                  id="school"
                  name = 'school'
                  value={formData.school}
                  onChange={(e) => setFormData((prev) => ({ ...prev, school: e.target.value }))}
                  placeholder="e.g., University of Technology"
                  required
                />
              </div>
              {/* Degree I got */}
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-white mb-2">
                  Degree
                </label>
                <Input
                  id="degree"
                  name="degree"
                  value={formData.degree}
                  onChange={(e) => setFormData((prev) => ({ ...prev, degree: e.target.value }))}
                  placeholder="e.g., Bachelor, Masters, ..."
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="startDate" className="block text-sm font-medium text-white mb-2">
                    Start Date
                  </label>
                  <Input
                    id="startYear"
                    type="date"
                    name="startYear"
                    value={formData.startYear}
                    onChange={(e) => setFormData((prev) => ({ ...prev, startYear: e.target.value }))}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="endDate" className="block text-sm font-medium text-white mb-2">
                    End Date
                  </label>
                  <Input
                    id="endYear"
                    type="date"
                    name="endYear"
                    value={formData.endYear}
                    onChange={(e) => setFormData((prev) => ({ ...prev, endYear: e.target.value }))}
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

    <div className="flex gap-2">
          <Button type="submit">Create Education Entry</Button>
          <Link to="/education">
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </Link>
    </div>
    </form>
    {notification.visible && (
        <Notification 
        message={notification.message}
        type={notification.type}
        />
      )}
    </div>
    </div>
  )
}

export default EducationNew
