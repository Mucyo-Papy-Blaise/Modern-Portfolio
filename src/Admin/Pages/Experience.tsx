import { Link } from "react-router-dom"
import Button from "../Component/Button"
import { Card, CardContent } from "../Component/Card"

const Experience = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Experience</h1>
          <p className="mt-2 text-white">Manage your work experience</p>
        </div>
        <Link to="/admin/experience/new">
          <Button>
            <span className="mr-2">➕</span>
            Add Experience
          </Button>
        </Link>
      </div>

      {/* Empty State */}
      <Card>
        <CardContent className="text-center py-12">
          <div className="text-6xl mb-4">💼</div>
          <h3 className="text-lg font-medium text-white mb-2">No experience entries yet</h3>
          <p className="text-white mb-4">Add your work experience to showcase your career journey.</p>
          <Link to="/admin/experience/new">
            <Button>
              <span className="mr-2">➕</span>
              Add Experience
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}

export default Experience
