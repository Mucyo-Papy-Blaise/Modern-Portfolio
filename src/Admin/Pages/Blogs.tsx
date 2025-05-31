import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Card, CardContent } from "../Component/Card"
import Button from "../Component/Button"
import Input from "../Component/Input"
import axios from "axios"
import Spinner from "../../Component/Spinner"
import ConfirmDialog from "../Component/ConfirmDialog"
import { ArrowUpRightFromSquare, TrashIcon } from "lucide-react"

export default function Blogs() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isloading, setIsLoading] =  useState<boolean>(false)
  const [selectedId, setSelectedId] =  useState<string | null>(null)
  const [showDialog, setShowDialog] = useState<boolean>(false)
  const [blogs, setBlogs] =  useState<{
    _id: string,
    title: string,
    summary: string,
    content: string,
    author: string,
    date: Date,
    readTim: string,
    category: string,
    image: string,
    tags:string[],
  }[]>([])

  useEffect(()=>{
    const getBlogs = async()=>{
      setIsLoading(true)
      try {
        const res  = await axios.get(`${import.meta.env.VITE_API_URL}/blog`)
        setBlogs(res.data)
        console.log(res.data)
      } catch (error) {
        console.log('Failed to Fetch Blogs Data', error)
      }finally{
        setIsLoading(false)
      }
    }
    getBlogs()
  },[])

  const handleConfirmDelete =async()=>{
    if(!selectedId) return null
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/blog/${selectedId}`)
      setBlogs(blogs.filter((prev)=> prev._id !== selectedId))
      console.log('Blog deleted Successfully!') 
    } catch (error) {
      console.log('Failed to delete Blog!')
    }
  }

  const handleDelete=(id: string)=>{
    setSelectedId(id)
    setShowDialog(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Blog Posts</h1>
          <p className="mt-2 text-white">Manage your blog content</p>
        </div>
        <Link to="/admin/blogs/new">
          <Button>
            <span className="mr-2">➕</span>
            Add Blog Post
          </Button>
        </Link>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white">🔍</span>
              <Input
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {isloading ? (
        <Spinner />
      ):
      blogs.length > 0 ? 
      <div className="flex flex-col gap-3">
        {blogs.map((blog, index)=>
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex flex-col gap-4">
                  <img src={blog.image} alt={blog.title} className="w-20 h-20" />
                  {/* Header */}
                  <div className="flex items-start w-full">
                      <div className="flex flex-1 flex-col gap-2">
                          <p className="text-lg text-Color5 font-medium">{blog.title}</p>
                          <p className='font-bold text-white text-2xl '>{blog.category}</p>
                            <p className="text-Color4 text-xl">{blog.readTim}</p> 
                            <div className="flex flex-row gap-3">
                              {blog.tags.map((tag,index)=>
                              <p 
                              key={index}
                              className='text-color4 text-[13px] text-white bg-Color3 p-1 rounded-lg w-fit font-normal'>
                                {tag}</p>
                              )}
                            </div>
                      </div>

                    {/* Action Buttons */}
                    <div className="flex  shrink-0 items-center gap-2">
                      <button
                        className="p-2 text-blue-400 hover:text-blue-300 hover:bg-blue-500 hover:bg-opacity-20 rounded-md transition-colors"
                        title="Edit Experience"
                        onClick={() => console.log(`Edit experience ${blog._id}`)}
                      >
                        <span className="text-lg"><ArrowUpRightFromSquare/></span>
                      </button>
                      <button
                        className="p-2 text-red-500 hover:text-red-300 hover:bg-red-700 hover:bg-opacity-20 rounded-md transition-colors"
                        title="Delete Experience"
                        onClick={() => handleDelete(blog._id)}
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
      :<Card>
        <CardContent className="text-center py-12">
          <div className="text-6xl mb-4">📝</div>
          <h3 className="text-lg font-medium text-white mb-2">No blog posts yet</h3>
          <p className="text-white mb-4">Start writing your first blog post.</p>
          <Link to="/admin/blogs/new">
            <Button>
              <span className="mr-2">➕</span>
              Add Blog Post
            </Button>
          </Link>
        </CardContent>
      </Card> 
      }
    </div>
  )
}

