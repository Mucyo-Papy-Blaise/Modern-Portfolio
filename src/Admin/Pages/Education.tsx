import { Link } from 'react-router-dom';
import { Card, CardContent } from '../Component/Card';
import Button from '../Component/Button';

const Education =()=> {

  return (
    <div className='w-full h-screen bg-Color1'>
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Education</h1>
          <p className="mt-2 text-white">Manage your educational background</p>
        </div>
        <Link to="/admin/education/new">
          <Button>
            <span className="mr-2">➕</span>
            Add Education
          </Button>
        </Link>
      </div>

      {/* Empty State */}
      <Card>
        <CardContent className="text-center py-12">
          <div className="text-6xl mb-4">🎓</div>
          <h3 className="text-lg font-medium text-white mb-2">No education entries yet</h3>
          <p className="text-white mb-4">Add your educational background and certifications.</p>
          <Link to="/admin/education/new">
            <Button>
              <span className="mr-2">➕</span>
              Add Education
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
    </div>
  );
}
export default Education
