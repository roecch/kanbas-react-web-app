/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";

function WorkingWithArrays() {
  const API = "http://localhost:4000/a5/todos";
  const [todo, setTodo] = useState({
      id: 0,
      title: "",
      description: "",
      due: "",
      completed: false
  });
  const [todos, setTodos] = useState<any[]>([]);

  const fetchTodos = async () => {
    const response = await axios.get(API);
    console.log(response.data)
    setTodos(response.data);
  };
  
  const postTodo = async () => {
    console.log(todo)
    const response = await axios.post(API, todo);
    console.log(response.data)
    setTodos([...todos, response.data]);
  };

  const fetchTodoById = async (id: any) => {
    const response = await axios.get(`${API}/${id}`);
    setTodo(response.data);
  };
  
  const deleteTodo = async (todo : any) => {
    const response = await axios.delete(`${API}/${todo.id}`);
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const updateTodo = async () => {
    const response = await axios.put(`${API}/${todo.id}`, {todo});
    setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
    setTodo({
      id: 0,
      title: "",
      description: "",
      due: "",
      completed: false
  });
  };




  useEffect(() => { fetchTodos() }, []);
  return (
    <div>
      <h2>Working with Arrays</h2>
      <input value={todo.id} readOnly />
      <input onChange={(e) => setTodo({ ...todo,
          title: e.target.value })}
        value={todo.title} type="text" />
      <textarea value={todo.description}
        onChange={(e) => setTodo({ ...todo,
          description: e.target.value })} />
      <input value={todo.due} type="date"
        onChange={(e) => setTodo({
          ...todo, due: e.target.value })} />
      <label>
        <input checked={todo.completed} type="checkbox"
          onChange={(e) => setTodo({
            ...todo, completed: e.target.checked })} />
        Completed
      </label>
      <button onClick={postTodo}> Post Todo </button>
      <button onClick={updateTodo}>
        Update Todo
      </button>

      <ul className="list-group">
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <input checked={todo.completed}
              type="checkbox" readOnly />
            {todo.title}
            <p>{todo.description}</p>
            <p>{todo.due}</p>
            <button className="btn btn-primary"onClick={() => fetchTodoById(todo.id)} >
              Edit
            </button>
            <button onClick={() => deleteTodo(todo)}
              className="btn btn-danger float-end ms-2">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkingWithArrays