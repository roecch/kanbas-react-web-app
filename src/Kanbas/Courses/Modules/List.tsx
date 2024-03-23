import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./reducer";
import { KanbasState } from "../../store";
import * as client from "./client";
import "./index.css"
import { useEffect } from "react";


function ModuleList() {
  const { courseId } = useParams();

  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();

  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId: string) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };


  
  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules: any) =>
        dispatch(setModules(modules))
    );
  }, [courseId, dispatch]); ////////////////
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
          onClick={() => handleAddModule}>
          Add
        </button>
        <button className="upBtn"
          onClick={() => handleUpdateModule}>
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
                  onClick={() => handleDeleteModule(module._id)}>
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

