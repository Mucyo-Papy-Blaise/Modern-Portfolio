import axios from "axios"
import { useState } from "react"

const Experience = () => {
    const [formData, setFormData] = useState({
        company: "",
        role: "",
        employment: "",
        startDate: "",
        endDate: "",
        description: "",
    })

    const handleInputChange =(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmitChange = async(e: React.FormEvent)=>{
        e.preventDefault()

        try {
            const response =  await axios.post('http://localhost:5000/experience', formData)
            console.log(response.data)

            setFormData({
              company: "",
              role: "",
              employment: "",
              startDate: "",
              endDate: "",
              description: "",
            })
        } catch (error) {
            console.log('enter experience in database failed', error)
        }
    }
  return (
    <div className="min-h-screen bg-Color1 flex items-center justify-center p-6 font-poppins">
      <div className="bg-Color2 shadow-2xl rounded-2xl p-8 w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-white mb-6">Upload Education Background</h2>
        <form onSubmit={handleSubmitChange} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-white">Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 p-2"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-white">Role</label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 p-2"
            />
          </div>
          <div 
            className="md:col-span-2"
          >
            <label className="block text-sm font-medium text-white">Employment Type</label>
            <select
              name="employment"
              value={formData.employment}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 p-2"
            >
              <option value="Full-Time">Full-Time</option>
              <option value="Partial">Partial</option>
              <option value="Seasonal">Seasonal</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-white">Start Year</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white">End Year</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 p-2"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-white">Description</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full rounded-lg border border-gray-300 p-2"
            />
          </div>
            <button type="submit" className="bg-Color3 text-white p-2 rounded hover:bg-Color1 font-bold">
              Submit
            </button>
        </form>
      </div>
    </div>
  )
}

export default Experience
