import type React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../Component/Card";
import Button from "../Component/Button";
import Input from "../Component/Input";
import FileUpload from "../Component/FileUpload";
import axios from "axios";
import Notification from "../Component/Notification";

const SkillNew = () => {
  const [formData, setFormData] = useState({
    title: "",
    level: "",
    percentage: "",
    image: null as File | null
  });

  const [notification, setNotification] = useState<{
    message: string
    type: "success" | "error"
    visible: boolean
  }>({
    message: "",
    type: "success",
    visible: false
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = new FormData()
    data.append('title', formData.title)
    data.append('level', formData.level)
    data.append('percentage', formData.percentage)

    if(formData.image){
      data.append('image', formData.image)
    }

    try {
      const response = await axios.post('http://localhost:5000/skill', data)
      console.log(response.data)

      setFormData({
          title: "",
          level: "",
          percentage: "",
          image: null as File | null
      })
      setNotification({
        message: "Experience created successfully!",
        type: "success",
        visible: true,
      })
    } catch (error) {
      console.log('Fails to send data into database',error)
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
  };

  const handleImageUpload = (files: File[]) => {
  if (files.length > 0) {
    setFormData((prev) => ({ ...prev, image: files[0] }))
  }
}

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link to="/admin/skills">
          <Button variant="ghost" size="sm">
            <span className="mr-2">←</span>
            Back to Skills
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-white">Add New Skill</h1>
          <p className="mt-2 text-white">Add a new skill to your portfolio</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Skill Information</CardTitle>
              <CardDescription>
                Enter the basic details of your skill
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Skill Name
                </label>
                <Input
                  id="name"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, title: e.target.value }))
                  }
                  placeholder="e.g., React, Python, Figma"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="yearsOfExperience"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Level
                </label>
                <Input
                  id="yearsOfExperience"
                  value={formData.level}
                  placeholder="e.g., Expert"
                  required
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, level: e.target.value }))
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="yearsOfExperience"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Percentage
                </label>
                <Input
                  id="yearsOfExperience"
                  value={formData.percentage}
                  placeholder="e.g., 50"
                  required
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, percentage: e.target.value }))
                  }
                />
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

        <div className="flex gap-2">
          <Button type="submit">Create Skill</Button>
          <Link to="/admin/skills">
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
  );
};
export default SkillNew
