import { useState } from "react"
import { Link } from "react-router-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../Component/Card"
import Button from "../Component/Button"
import Input from "../Component/Input"
import Textarea from "../Component/Textarea"
import Select from "../Component/Select"
import Badge from "../Component/Badge"
import FileUpload from "../Component/FileUpload"
import axios from "axios"
import Notification from "../Component/Notification"

export default function BlogNew() {
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    content: "",
    author: "",
    readTime: "",
    category: "",
    image: null as File | null,
    tags: [] as string[],
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
  const [newTag, setNewTag] = useState("")
  const [isPreview, setIsPreview] = useState(false)

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault()
    const data = new FormData()
    data.append('title',formData.title)
    data.append('summary',formData.summary)
    data.append('content',formData.content)
    data.append('author',formData.author)
    data.append('readTime',formData.readTime)
    data.append('category',formData.category)
    
    if(formData.image){
      data.append('image', formData.image)
    }
    data.append('tags', JSON.stringify(formData.tags))

    try {
      const res = await axios.post('http://localhost:5000/blog', data)
      console.log(res.data)

      setNotification({
        message: "Experience created successfully!",
        type: "success",
        visible: true,
      })
    } catch (error) {
      console.log('Failed to Post Blog in Data Base', error)

      setNotification({
        message: "Experience created successfully!",
        type: "error",
        visible: true,
      })
    }
  }

  const addTag = () => {
    if(newTag.trim() && !formData.tags.includes(newTag.trim())){
      setFormData((prev)=> ({...prev, tags: [...prev.tags, newTag.trim()]}))
    }
  }

  const removeTag = (tag: string) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((t) => t !== tag),
    }))
  }

  const handleImageUpload = (files: File[]) => {
    if (files.length > 0) {
      setFormData((prev) => ({ ...prev, image: files[0] }))
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-4">
          <Link to="/admin/blogs">
            <Button variant="ghost" size="sm">
              <span className="mr-2">←</span>
              Back to Blogs
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-white">Add New Blog Post</h1>
            <p className="mt-2 text-white">Create a new blog post</p>
          </div>
        </div>
        <Button variant="outline" onClick={() => setIsPreview(!isPreview)}>
          <span className="mr-2">👁️</span>
          {isPreview ? "Edit" : "Preview"}
        </Button>
      </div>

      {!isPreview ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Blog Content</CardTitle>
                  <CardDescription>Write your blog post content</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-white mb-2">
                      Title
                    </label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                      placeholder="Enter blog post title"
                      required                   
                      />
                  </div>

                  <div>
                    <label htmlFor="excerpt" className="block text-sm font-medium text-white mb-2">
                      Summary
                    </label>
                    <Textarea
                      id="excerpt"
                      value={formData.summary}
                      onChange={(e) => setFormData((prev) => ({ ...prev, summary: e.target.value }))}
                      placeholder="Brief description of the blog post"
                      rows={3}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="content" className="block text-sm font-medium text-white mb-2">
                      Content
                    </label>
                    <Textarea
                      id="content"
                      value={formData.content}
                      onChange={(e) => setFormData((prev) => ({ ...prev, content: e.target.value }))}
                      placeholder="Write your blog post content here..."
                      rows={15}
                      className="font-mono"
                      required
                    />
                    <p className="text-sm text-white mt-1">You can use Markdown formatting</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tags</CardTitle>
                  <CardDescription>Add relevant tags for your blog post</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      placeholder="Enter tag name"
                    />
                    <Button type="button" onClick={addTag}>
                      Add
                    </Button>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {formData.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                        {tag}
                        <button
                          type="button"
                          onClick={() => removeTag(tag)}
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

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Post Settings</CardTitle>
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
                      <option value="Technology">Technology</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Programming">Programming</option>
                      <option value="Design">Design</option>
                      <option value="Tutorial">Tutorial</option>
                      <option value="Personal">Personal</option>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="readTime" className="block text-sm font-medium text-white mb-2">
                      Uploaded Date
                    </label>
                    <Input
                      id="author"
                      value={formData.author}
                      onChange={(e) => setFormData((prev) => ({ ...prev, author: e.target.value }))}
                      placeholder="e.g., Don Joe"
                    />
                  </div>
                  <div>
                    <label htmlFor="readTime" className="block text-sm font-medium text-white mb-2">
                      Uploaded Date
                    </label>
                    <Input
                      id="text"
                      value={formData.readTime}
                      onChange={(e) => setFormData((prev) => ({ ...prev, readTime: e.target.value }))}
                      placeholder="e.g., Don Joe"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Featured Image</CardTitle>
                  <CardDescription>Upload a featured image for your blog post</CardDescription>
                </CardHeader>
                <CardContent>
                  <FileUpload
                    onFileSelect={handleImageUpload}
                    accept="image/*"
                    maxSize={5 * 1024 * 1024} // 5MB
                  />
                </CardContent>
              </Card>

              <div className="flex gap-2">
                <Button type="submit" className="flex-1">
                  Create Post
                </Button>
                <Link to="/admin/blogs">
                  <Button type="button" variant="outline">
                    Cancel
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </form>
      ) : (
        /* Preview Mode */
        <Card>
          <CardContent className="pt-6">
            <div className="prose max-w-none">
              <h1 className="text-white text-3xl font-bold mb-4">{formData.title}</h1>
              <p className="text-white mb-4">{formData.summary}</p>
              <div className="flex flex-wrap gap-2 my-4">
                {formData.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="whitespace-pre-wrap text-white">
                {formData.content || "Blog post content will appear here..."}
              </div>
            </div>
          </CardContent>
        </Card>
      )}
        {notification.visible && (
        <Notification 
        message={notification.message}
        type={notification.type}
        />
        )}
    </div>
  )
}
