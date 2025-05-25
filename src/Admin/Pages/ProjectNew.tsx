import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../Component/Card'
import Button from "../Component/Button"
import Input from "../Component/Input"
import Textarea from "../Component/Textarea"
import Select from "../Component/Select"
import Badge from "../Component/Badge"
import FileUpload from "../Component/FileUpload"

const ProjectNew =()=> {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    longDescription: "",
    status: "Draft",
    liveUrl: "",
    githubUrl: "",
    technologies: [] as string[],
    category: "",
    images: [] as File[],
  })
  const [newTech, setNewTech] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Project data:", formData)
    navigate("/projects")
  }

  const addTechnology = () => {
    if (newTech.trim() && !formData.technologies.includes(newTech.trim())) {
      setFormData((prev) => ({
        ...prev,
        technologies: [...prev.technologies, newTech.trim()],
      }))
      setNewTech("")
    }
  }

  const removeTechnology = (tech: string) => {
    setFormData((prev) => ({
      ...prev,
      technologies: prev.technologies.filter((t) => t !== tech),
    }))
  }

  const handleImageUpload = (files: File[]) => {
    setFormData((prev) => ({ ...prev, images: [...prev.images, ...files] }))
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
                    value={formData.title}
                    onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                    placeholder="Enter project title"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-white mb-2">
                    Short Description
                  </label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                    placeholder="Brief description of the project"
                    rows={3}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="longDescription" className="block text-sm font-medium text-white mb-2">
                    Detailed Description
                  </label>
                  <Textarea
                    id="longDescription"
                    value={formData.longDescription}
                    onChange={(e) => setFormData((prev) => ({ ...prev, longDescription: e.target.value }))}
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
                      value={formData.liveUrl}
                      onChange={(e) => setFormData((prev) => ({ ...prev, liveUrl: e.target.value }))}
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
                      value={formData.githubUrl}
                      onChange={(e) => setFormData((prev) => ({ ...prev, githubUrl: e.target.value }))}
                      placeholder="https://github.com/username/repo"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Technologies</CardTitle>
                <CardDescription>Add technologies used in this project</CardDescription>
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
                  {formData.technologies.map((tech) => (
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
                <CardTitle>Project Images</CardTitle>
                <CardDescription>Upload images for your project</CardDescription>
              </CardHeader>
              <CardContent>
                <FileUpload
                  onFileSelect={handleImageUpload}
                  accept="image/*"
                  multiple={true}
                  maxSize={10 * 1024 * 1024} // 10MB
                />
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Project Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label htmlFor="status" className="block text-sm font-medium text-white mb-2">
                    Status
                  </label>
                  <Select
                    id="status"
                    value={formData.status}
                    onChange={(value) => setFormData((prev) => ({ ...prev, status: value }))}
                  >
                    <option value="Draft">Draft</option>
                    <option value="Published">Published</option>
                  </Select>
                </div>

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
    </div>
  )
}
export default ProjectNew
