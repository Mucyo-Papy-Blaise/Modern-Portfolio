import { Link } from "react-router-dom"
import { Card, CardContent } from "../Component/Card"
import Button from "../Component/Button"

const Skills =()=> {

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Skills</h1>
          <p className="mt-2 text-white">Manage your technical and professional skills</p>
        </div>
        <Link to="/admin/skills/new">
          <Button>
            <span className="mr-2">➕</span>
            Add Skill
          </Button>
        </Link>
      </div>

      {/* Empty State */}
      <Card>
        <CardContent className="text-center py-12">
          <div className="text-6xl mb-4">🏆</div>
          <h3 className="text-lg font-medium text-white mb-2">No skills yet</h3>
          <p className="text-white mb-4">Add your skills to showcase your expertise.</p>
          <Link to="/admin/skills/new">
            <Button>
              <span className="mr-2">➕</span>
              Add Skill
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
export default Skills
