import { useState } from "react"
import { Link } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../Component/Card'
import Button from "../Component/Button"
import Input from "../Component/Input"
import Textarea from "../Component/Textarea"
import Select from "../Component/Select"
import Badge from "../Component/Badge"
import FileUpload from "../Component/FileUpload"
import Notification from "../Component/Notification"
import axios from "axios"

const ProjectNew =()=> {
  const [formData, setFormData] = useState({
    projectName: "",
    category: "",
    image: null as File | null,
    description: "",
    tools: [] as string[],
    features: [] as string[],
    Livelink: "",
    githubLink: "",
  })
  const [notification, setNotification] = useState<{
    message: string
    type: "success" | "error"
    visible: boolean
  }>({
    message: "",
    type: "success",
    visible: false
  })

  const [newTech, setNewTech] = useState("")
  const [newFeature, setNewFeature] =  useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const data = new FormData()
    data.append('projectName', formData.projectName)
    data.append('category', formData.category)
    if (formData.image) {
        data.append('image', formData.image)
      }
    data.append('description', formData.description)
    data.append('tools',JSON.stringify(formData.tools))
    data.append('features', JSON.stringify(formData.features))
    data.append('Livelink', formData.Livelink)
    data.append('githubLink', formData.githubLink)
    try {
      const response = await axios.post('http://localhost:5000/project', data, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      })
      console.log(response.data)
      setNotification({
        message: "Experience created successfully!",
        type: "success",
        visible: true,
      })
    } catch (error) {
      setNotification({
        message: "Failed to create experience. Try again",
        type: "error",
        visible: true,
      })
    }finally{
      setTimeout(() => {
        setNotification((prev)=>({...prev, visible: false}))
      }, 3000);
    }
  }

  const addTechnology = () => {
    if (newTech.trim() && !formData.tools.includes(newTech.trim())) {
      setFormData((prev) => ({
        ...prev,
        tools: [...prev.tools, newTech.trim()],
      }))
      setNewTech("")
    }
  }

  const removeTechnology = (tech: string) => {
    setFormData((prev) => ({
      ...prev,
      tools: prev.tools.filter((t) => t !== tech),
    }))
  }

  const handleImageUpload = (files: File[]) => {
  if (files.length > 0) {
    setFormData((prev) => ({ ...prev, image: files[0] }))
  }
}

const addFeature = () =>{
  if(newFeature.trim() && !formData.features.includes(newFeature.trim())){
    setFormData((prev)=>({...prev, features:[...prev.features, newFeature.trim()]}))
    setNewFeature('')
  }
}

const removeFeature =(feature: string)=>{
  setFormData((prev)=> ({...prev, features: prev.features.filter((f)=> f !== feature)}))
}
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <Link to="/admin/projects">
          <Button variant="ghost" size="sm">
            <span className="mr-2">←</span>
            Back to Projects
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-white">Add New Project</h1>
          <p className="mt-2 text-white">Create a new project for your portfolio</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Project Details</CardTitle>
                <CardDescription>Basic information about your project</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-white mb-2">
                    Project Title
                  </label>
                  <Input
                    id="title"
                    value={formData.projectName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, projectName: e.target.value }))}
                    placeholder="Enter project title"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="longDescription" className="block text-sm font-medium text-white mb-2">
                    Description
                  </label>
                  <Textarea
                    id="longDescription"
                    value={formData.description}
                    onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                    placeholder="Detailed description, features, challenges, etc."
                    rows={6}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="liveUrl" className="block text-sm font-medium text-white mb-2">
                      Live URL
                    </label>
                    <Input
                      id="liveUrl"
                      type="url"
                      value={formData.Livelink}
                      onChange={(e) => setFormData((prev) => ({ ...prev, Livelink: e.target.value }))}
                      placeholder="https://example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="githubUrl" className="block text-sm font-medium text-white mb-2">
                      GitHub URL
                    </label>
                    <Input
                      id="githubUrl"
                      type="url"
                      value={formData.githubLink}
                      onChange={(e) => setFormData((prev) => ({ ...prev, githubLink: e.target.value }))}
                      placeholder="https://github.com/username/repo"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Tools</CardTitle>
                <CardDescription>Add Tools used in this project</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    value={newTech}
                    onChange={(e) => setNewTech(e.target.value)}
                    placeholder="Enter technology name"
                  />
                  <Button type="button" onClick={addTechnology}>
                    Add
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {formData.tools.map((tech) => (
                    <Badge key={tech} variant="secondary" className="flex items-center gap-1">
                      {tech}
                      <button
                        type="button"
                        onClick={() => removeTechnology(tech)}
                        className="ml-1 text-white hover:text-red-300"
                      >
                        ✕
                      </button>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Features</CardTitle>
                <CardDescription>Add Features of this project</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    value={newFeature}
                    onChange={(e) => setNewFeature(e.target.value)}
                    placeholder="Enter Feature name"
                  />
                  <Button type="button" onClick={addFeature}>
                    Add
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {formData.features.map((feature) => (
                    <Badge key={feature} variant="secondary" className="flex items-center gap-1">
                      {feature}
                      <button
                        type="button"
                        onClick={() => removeFeature(feature)}
                        className="ml-1 text-white hover:text-red-300"
                      >
                        ✕
                      </button>
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Project Images</CardTitle>
                <CardDescription>Upload images for your project</CardDescription>
              </CardHeader>
              <CardContent>
                <FileUpload
                  onFileSelect={handleImageUpload}
                  accept="image/*"
                  multiple={false}
                  maxSize={10 * 1024 * 1024}
                />
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Project Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-white mb-2">
                    Category
                  </label>
                  <Select
                    id="category"
                    value={formData.category}
                    onChange={(value) => setFormData((prev) => ({ ...prev, category: value }))}
                  >
                    <option value="">Select category</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile App">Mobile App</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Full Stack">Full Stack</option>
                    <option value="Other">Other</option>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-2">
              <Button type="submit" className="flex-1">
                Create Project
              </Button>
              <Link to="/admin/projects">
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </form>
      {notification.visible && (
        <Notification 
        message={notification.message}
        type={notification.type}
        />
      )}
    </div>
  )
}
export default ProjectNew
