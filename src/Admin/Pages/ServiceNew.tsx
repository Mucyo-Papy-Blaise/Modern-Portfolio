import { useState } from "react"
import { Link } from "react-router-dom"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../Component/Card"
import Button from "../Component/Button"
import Input from "../Component/Input"
import Textarea from "../Component/Textarea"
import Badge from "../Component/Badge"
import Notification from "../Component/Notification"
import IconPicker from "../Component/IconPicker"
import axios from "axios"

const ServiceNew = () => {
  const [formData, setFormData] = useState({
    icon: "",
    serviceName: "",
    description: "",
    features: [] as string[],
  })

  const [notification, setNotification] = useState({
    message: "",
    type: "success" as "success" | "error",
    visible: false,
  })

  const [newFeature, setNewFeature] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/service`, formData)
      console.log(response.data)
      setNotification({
        message: "Service created successfully!",
        type: "success",
        visible: true,
      })
      setFormData({
        icon: "",
        serviceName: "",
        description: "",
        features: [] as string[],
      })
    } catch (error) {
      setNotification({
        message: "Failed to create service. Try again",
        type: "error",
        visible: true,
      })
    } finally {
      setTimeout(() => {
        setNotification((prev) => ({ ...prev, visible: false }))
      }, 3000)
    }
  }

  const addFeature = () => {
    if (newFeature.trim() && !formData.features.includes(newFeature.trim())) {
      setFormData((prev) => ({
        ...prev,
        features: [...prev.features, newFeature.trim()],
      }))
      setNewFeature("")
    }
  }

  const removeFeature = (feature: string) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.filter((f) => f !== feature),
    }))
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4">
        <Link to="/admin/projects">
          <Button variant="ghost" size="sm">
            <span className="mr-2">←</span>
            Back to Services
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-white">Add New Service</h1>
          <p className="mt-2 text-white">Create a new Service for your portfolio</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Service Details</CardTitle>
                <CardDescription>Basic information about your Services</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-white mb-2">
                    Service Title
                  </label>
                  <Input
                    id="title"
                    value={formData.serviceName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, serviceName: e.target.value }))}
                    placeholder="Enter service title"
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
                    placeholder="Detailed description..."
                    rows={6}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Select Icon</label>
                  <IconPicker
                    selectedIcon={formData.icon}
                    onChange={(iconName) => setFormData((prev) => ({ ...prev, icon: iconName }))}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Features</CardTitle>
                <CardDescription>Add features of this service</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    value={newFeature}
                    onChange={(e) => setNewFeature(e.target.value)}
                    placeholder="Enter feature name"
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
          </div>

          <div className="space-y-6">
            <div className="flex gap-2">
              <Button type="submit" className="flex-1">
                Create Service
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
        <Notification message={notification.message} type={notification.type} />
      )}
    </div>
  )
}
export default ServiceNew
