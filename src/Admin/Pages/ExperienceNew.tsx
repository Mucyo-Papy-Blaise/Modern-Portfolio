import { useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../Component/Card"
import Button from "../Component/Button"
import Input from "../Component/Input"
import Textarea from "../Component/Textarea"

export default function ExperienceNew() {
  const [formData, setFormData] = useState({
          company: "",
          role: "",
          employment: "",
          startDate: "",
          endDate: "",
          description: "",
          current: false
      })
  
      const handleInputChange =(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
          setFormData({...formData, [e.target.name]: e.target.value})
      }
  
      const handleSubmitChange = async(e: React.FormEvent)=>{
          e.preventDefault()
  
          try {
              const response =  await axios.post('http://localhost:5000/experience', formData)
              console.log(response.data)
          } catch (error) {
              console.log('enter experience in database failed', error)
          }
      }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/admin/experience">
          <Button variant="ghost" size="sm">
            <span className="mr-2">←</span>
            Back to Experience
          </Button>
        </Link>
      </div>

      <form onSubmit={handleSubmitChange} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Enter the basic details of your work experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-white mb-2">
                  Company Name
                </label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                  placeholder="e.g., Tech Corp"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                  Job Title
                </label>
                <Input
                  id="job"
                  value={formData.role}
                  onChange={(e) => setFormData((prev) => ({ ...prev, company: e.target.value }))}
                  placeholder="e.g., Senior Front-end developer"
                  required
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-white mb-2">
                  Employment
                </label>
                <Input
                  id="employment"
                  value={formData.employment}
                  onChange={(e) => setFormData((prev) => ({ ...prev, location: e.target.value }))}
                  placeholder="e.g., Full Time or Partial"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="startDate" className="block text-sm font-medium text-white mb-2">
                    Start Date
                  </label>
                  <Input
                    id="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData((prev) => ({ ...prev, startDate: e.target.value }))}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="endDate" className="block text-sm font-medium text-white mb-2">
                    End Date
                  </label>
                  <Input
                    id="endDate"
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => setFormData((prev) => ({ ...prev, endDate: e.target.value }))}
                  />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  id="current"
                  type="checkbox"
                  checked={formData.current}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      current: e.target.checked,
                      endDate: e.target.checked ? "" : prev.endDate,
                    }))
                  }
                  className="rounded border-gray-300"
                />
                <label htmlFor="current" className="text-sm text-white">
                  I currently work here
                </label>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Description</CardTitle>
              <CardDescription>Describe your role and responsibilities</CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-white mb-2">
                  Job Description
                </label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                  placeholder="Describe your role, responsibilities, and what you accomplished..."
                  rows={8}
                  required
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex gap-2">
          <Button type="submit">Create Experience</Button>
          <Link to="/admin/experience">
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </Link>
        </div>
      </form>
    </div>
  )
}
