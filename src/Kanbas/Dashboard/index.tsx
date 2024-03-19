import { Link } from "react-router-dom";
import "./index.css"
function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse } : 
    {courses: any, course : any, setCourse: any, addNewCourse : any, 
    deleteCourse : any, updateCourse : any}
  ) {
    
    console.log(courses)
  return (
    <div className="p-4">
      <h1>Dashboard</h1>
      <h5>Course</h5>
      <input value={course.name} className="form-control"
            onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input value={course.number} className="form-control"
            onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control" type="date"
            onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control" type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
      <button onClick={addNewCourse} className="btn btn-primary addBtn">
        Add
      </button>

      <button onClick={updateCourse} className="btn btn-primary upBtn">
        Update
      </button>
    
      <hr />
      <h2>Published Courses ({courses.length})</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course: any) => (
            <div
             key={course._id}
             className="col" style={{ width: 300 }}>
              <div className="card">
                <img src={`/images/${course.image}`} className="card-img-top"
                     alt={`${course.image}`} style={{ height: 150 }}/>
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name} 
                    </Link>
                    
                    <p className="card-text">{course.name}</p>
                    <div id="buttons">
                        <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                          Go </Link>

                          <div className="editAndDel">
                            <button className="editBtn btn btn-primary" onClick={(event) => {
                                event.preventDefault();
                                setCourse(course);
                              }}>
                              Edit
                            </button>

                            <button className="delBtn btn btn-primary" onClick={(event) => {
                                      event.preventDefault();
                                      deleteCourse(course._id);
                                    }}>
                                    Delete
                            </button>
                    </div>
                    
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
     </div>
  );
}
export default Dashboard;