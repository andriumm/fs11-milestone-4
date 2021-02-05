import React, { useState } from "react";

export default function Form(props) {
  // const [tasks, setTasks] = useState(["Go shopping", "Cook", "Clean Windows"]);
  const [newTask, setNewTask] = useState({ name: "" });

  const handleInput = ({ target }) => {
    const name = target.name;
    const value = target.value;
    setNewTask(state => ({ ...state, [name]: value }));
  };

  const AddTasks = event => {
    event.preventDefault();
    console.log("clicked!");
    props.newToDo(newTask);
  };

  return (
    <div>
      {/* {tasks} */}
      <form onSubmit={AddTasks} className="form-control">
        <label className="form-label">
          New Task
          <input type="text" name="newTask" onChange={handleInput} />
        </label>
        <button className="btn btn-dark mx-2">Add to the Task List</button>
      </form>
    </div>
  );
}
