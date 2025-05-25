import { useState } from "react"
import { Link } from "react-router-dom"
import { Card, CardContent } from "../Component/Card"
import Button from "../Component/Button"
import Input from "../Component/Input"

const Projects = ()=> {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("All")

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Projects</h1>
          <p className="mt-2 text-white">Manage your project portfolio</p>
        </div>
        <Link to="/admin/projects/new">
          <Button>
            <span className="mr-2">➕</span>
            Add Project
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
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button variant={statusFilter === "All" ? "primary" : "outline"} onClick={() => setStatusFilter("All")}>
                All
              </Button>
              <Button
                variant={statusFilter === "Published" ? "primary" : "outline"}
                onClick={() => setStatusFilter("Published")}
              >
                Published
              </Button>
              <Button
                variant={statusFilter === "Draft" ? "primary" : "outline"}
                onClick={() => setStatusFilter("Draft")}
              >
                Draft
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Empty State */}
      <Card>
        <CardContent className="text-center py-12">
          <div className="text-6xl mb-4">📁</div>
          <h3 className="text-lg font-medium text-white mb-2">No projects yet</h3>
          <p className="text-white mb-4">Get started by creating your first project.</p>
          <Link to="/admin/projects/new">
            <Button>
              <span className="mr-2">➕</span>
              Add Project
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
export default Projects