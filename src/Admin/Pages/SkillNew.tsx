"use client"

import type React from "react"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../Component/Card"
import Button from "../Component/Button"
import Input from "../Component/Input"
import Textarea from "../Component/Textarea"
import Select from "../Component/Select"

const SkillNew =()=> {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    level: "",
    proficiency: 50,
    category: "",
    yearsOfExperience: "",
    description: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Skill data:", formData)
    navigate("/skills")
  }

  const getLevelFromProficiency = (proficiency: number) => {
    if (proficiency >= 90) return "Expert"
    if (proficiency >= 70) return "Advanced"
    if (proficiency >= 50) return "Intermediate"
    return "Beginner"
  }

  const handleProficiencyChange = (value: number) => {
    setFormData((prev) => ({
      ...prev,
      proficiency: value,
      level: getLevelFromProficiency(value),
    }))
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Skill Information</CardTitle>
              <CardDescription>Enter the basic details of your skill</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Skill Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  placeholder="e.g., React, Python, Figma"
                  required
                />
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
                  <option value="Frontend">Frontend</option>
                  <option value="Backend">Backend</option>
                  <option value="Programming Language">Programming Language</option>
                  <option value="Database">Database</option>
                  <option value="Cloud">Cloud</option>
                  <option value="Design">Design</option>
                  <option value="DevOps">DevOps</option>
                  <option value="Mobile">Mobile</option>
                  <option value="Testing">Testing</option>
                  <option value="Other">Other</option>
                </Select>
              </div>

              <div>
                <label htmlFor="yearsOfExperience" className="block text-sm font-medium text-white mb-2">
                  Years of Experience
                </label>
                <Input
                  id="yearsOfExperience"
                  value={formData.yearsOfExperience}
                  placeholder="e.g., 2.5"
                  required
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-white mb-2">
                  Description
                </label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                  placeholder="Describe your experience with this skill..."
                  rows={4}
                  required
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Proficiency Level</CardTitle>
              <CardDescription>Set your proficiency level for this skill</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-medium text-white">Proficiency</label>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{formData.proficiency}%</div>
                    <div className="text-sm text-white">{getLevelFromProficiency(formData.proficiency)}</div>
                  </div>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value={formData.proficiency}
                  onChange={(e) => handleProficiencyChange(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-white mt-2">
                  <span>Beginner</span>
                  <span>Intermediate</span>
                  <span>Advanced</span>
                  <span>Expert</span>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium text-white">Proficiency Guidelines:</h4>
                <div className="space-y-2 text-sm text-white">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                    <span>
                      <strong>Beginner (0-49%):</strong> Basic understanding
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span>
                      <strong>Intermediate (50-69%):</strong> Can work independently
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span>
                      <strong>Advanced (70-89%):</strong> Deep knowledge and experience
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>
                      <strong>Expert (90-100%):</strong> Can teach and lead others
                    </span>
                  </div>
                </div>
              </div>
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
    </div>
  )
}
export default SkillNew