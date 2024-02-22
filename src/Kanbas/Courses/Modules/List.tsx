import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";

function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);

  return (
    <div className="modlist">
      <div className="mod-buttons">
            <button type="button" className="mod-button">Collapse All</button>
            <button type="button" className="mod-button">View Progress</button>
            <select className="mod-button" id="mod-button-select">
              <option>Publish All</option>
              <option>Publish All Modules and Items</option>
              <option>Publish Modules only</option>
              <option>Unpublish All Modules</option>
            </select>
            <button className="mod-button" id="mod-button-module"><i className="fa fa-sharp fa-solid fa-plus"></i> Module</button>
          </div>
      <ul className="list-group wd-modules">  
        {modulesList.map((module) => (
          <li
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ModuleList;