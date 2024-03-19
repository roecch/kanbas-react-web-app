import React from "react";
import { FaCheckCircle, FaClipboard, FaEllipsisV, FaPlus, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
function Assignments() {
  const { courseId } = useParams();
  let assignments = db.assignments
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
    console.log(assignments)
    console.log(courseId)
  return (
    <div>
      <input placeholder="Search for Assignments"/>
            <span className="float-end">
                    <button><FaPlus/> Group</button>
                    <button><FaPlus/> Assignment</button>
                    <select>
                        <option>Edit Assignment Dates</option>
                        <option>Assignment Group Weights</option>
                    </select>
                    
                    <select>
                        <option>Edit</option>
                        <option>Speed Grader</option>
                        <option>Duplicate</option>
                        <option>Delete</option>
                        <option>Move To...</option>
                        <option>Send To...</option>
                        <option>Copy To...</option>
                        <option>Share To Commons</option>
                    </select>
                    </span>

      <br/>

      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
              40% of Total
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <FaClipboard className="me-2" />
                  <Link
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>
    </div>
);}
export default Assignments;