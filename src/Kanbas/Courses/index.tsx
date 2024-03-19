import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { HiMiniBars3, HiOutlineArrowRight } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import "./index.css"
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";

function Courses({courses} : {courses : any}) {
  const {courseId } = useParams();
  const course = courses.find((course: { _id: string | undefined; }) => course._id === courseId);
  const courIDstr = courseId?.toString()!
  const location = useLocation();
  const { pathname } = location;
  const loc = pathname.toString()
  const titlePathstr = loc.substring(loc.indexOf(courIDstr) + courIDstr.length + 1);

  return (
    <div>
      <div className="courseBar">
      <h1><HiMiniBars3 /> Course {course?.name} {titlePathstr.split("/").map((pathPart) => (<div className="path-course-bar"> <HiOutlineArrowRight/> {pathPart} </div>))}</h1>
      <hr/>
    </div>
    <CourseNavigation />
    <div>
      <div
        className="coursebody overflow-y-scroll position-fixed bottom-0 end-0">
        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="Home" element={<Home/>} />
          <Route path="Home" element={<h1>Home</h1>} />
          <Route path="Modules" element={<Modules/>} />
          <Route path="Piazza" element={<h1>Piazza</h1>} />
          <Route path="Assignments" element={<Assignments/>} />
          <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
          <Route path="Grades" element={<h1>Grades</h1>} />
        </Routes>
      </div>
    </div>
    </div>
  );
}
export default Courses;