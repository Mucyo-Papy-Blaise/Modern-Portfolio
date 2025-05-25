import { Link } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "../Component/Card"
import Button from "../Component/Button"

 const Dashboard =()=> {
  const stats = [
    { name: "Projects", value: 0, icon: "📁", href: "/projects" },
    { name: "Blog Posts", value: 0, icon: "📝", href: "/blogs" },
    { name: "Experience", value: 0, icon: "💼", href: "/experience" },
    { name: "Skills", value: 0, icon: "🏆", href: "/skills" },
    { name: "Education", value: 0, icon: "🎓", href: "/education" },
  ]

  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <p className="mt-2 text-white">Manage your portfolio content</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {stats.map((stat) => (
          <Card key={stat.name}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-white">{stat.name}</CardTitle>
              <span className="text-2xl">{stat.icon}</span>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <Link to={stat.href}>
                <button className="text-xs text-blue-400 hover:text-blue-300 mt-1">View all</button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-white text-lg">
              <span className="mr-2 text-xl">📁</span>
              Projects
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-white mb-4">Create and manage your projects</p>
            <Link to="/projects/new">
              <Button className="w-full">Add Project</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-white text-lg">
              <span className="mr-2 text-xl">📝</span>
              Blog Posts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-white mb-4">Write and publish blog posts</p>
            <Link to="/blogs/new">
              <Button className="w-full">Add Blog</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-white text-lg">
              <span className="mr-2 text-xl">💼</span>
              Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-white mb-4">Add your work experience</p>
            <Link to="/experience/new">
              <Button className="w-full">Add Experience</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-white text-lg">
              <span className="mr-2 text-xl">🏆</span>
              Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-white mb-4">Showcase your skills</p>
            <Link to="/skills/new">
              <Button className="w-full">Add Skill</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-white text-lg">
              <span className="mr-2 text-xl">🎓</span>
              Education
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-white mb-4">Add your education background</p>
            <Link to="/education/new">
              <Button className="w-full">Add Education</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
export default Dashboard
