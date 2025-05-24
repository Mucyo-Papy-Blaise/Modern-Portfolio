import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Education =()=> {
  const navigate = useNavigate() 
  const [formData, setFormData] =  useState({
    startYear:"",
    endYear: "",
    program: "",
    school: "",
    degree: "",
  })

  const handleInputChange =(e: React.ChangeEvent<HTMLInputElement>)=>{
    setFormData({...formData, [e.target.name]: e.target.value})
  }

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
    } catch (error) {
      console.log('enter education failed', error)
    }
  }

  return (
    <div className="min-h-screen bg-Color1 flex flex-col items-center justify-center p-6 font-poppins">
      <div className="bg-Color2 shadow-2xl rounded-2xl p-8 w-full max-w-4xl">
        <div 
        className='flex flex-row gap-3 mb-5 cursor-pointer text-white hover:text-teal-800'
        onClick={()=> navigate('/')}
        >
        <ArrowLeft />
        <p>Back Home</p>
      </div>
        <h2 className="text-2xl font-bold text-white mb-6">Upload Education</h2>
        <form onSubmit={handleSubmitChange} className="flex flex-col gap-4">
          {/* Start Year */}
          <div className='flex flex-col md:flex-row gap-5 md:gap-16'>
            <div className="flex flex-col gap-2">
            <label className="block text-sm font-medium text-white">Start Year</label>
            <input
              type="date"
              value={formData.startYear}
              onChange={handleInputChange}
              name="startYear"
              className="w-full md:w-96 rounded border border-gray-300 p-2 outline-none"
            />
          </div>
          {/* Ending Year */}
          <div className="flex flex-col gap-2">
            <label className="block text-sm font-medium text-white">End Year</label>
            <input
              type="date"
              value={formData.endYear}
              onChange={handleInputChange}
              name="endYear"
              className="w-full md:w-96 rounded border border-gray-300 p-2 outline-none "
            />
          </div>
          </div>
          {/* Program */}
          <div className="md:col-span-2 flex flex-col gap-2">
            <label className="block text-sm font-medium text-white">Program</label>
            <input
              type="text"
              value={formData.program}
              onChange={handleInputChange}
              name="program"
              className="w-full rounded border border-gray-300 p-2 outline-none"
            />
          </div>
          {/* School */}
          <div className="md:col-span-2 flex flex-col gap-2">
            <label className="block text-sm font-medium text-white">School</label>
            <input
              type="text"
              value={formData.school}
              onChange={handleInputChange}
              name="school"
              className="w-full rounded border border-gray-300 p-2 outline-none"
            />
          </div>
          {/* degree */}
          <div className="md:col-span-2 flex flex-col gap-2">
            <label className="block text-sm font-medium text-white">Degree</label>
            <input
              type="text"
              value={formData.degree}
              onChange={handleInputChange}
              name="degree"
              className="w-full rounded border border-gray-300 p-2 outline-none"
            />
          </div>
            <button type="submit" className="bg-Color3 text-white p-2 rounded hover:bg-Color1 font-bold">
              Submit
            </button>
        </form>
      </div>
    </div>
  );
}
export default Education
