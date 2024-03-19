import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";
import "./index.css"
function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <input className="newname"
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }/>
          <br/>
        <textarea className="newdescription"
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }/>
          <button className="addBtn"
          onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
          Add
        </button>
        <button className="upBtn"
          onClick={() => dispatch(updateModule(module))}>
          Update
        </button>
      </li>
      {moduleList
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item">
            <h3>{module.name}</h3>
              <div className="editAndDel">
                <button className="editBtn"
                  onClick={() => dispatch(setModule(module))}>
                  Edit
                </button>
                <button className="delBtn"
                  onClick={() => dispatch(deleteModule(module._id))}>
                  Delete
                </button>
              </div>
            <p>{module.description}</p>
          </li>
        ))}
    </ul>
  );
}
export default ModuleList;

