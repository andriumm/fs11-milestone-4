import React, { useState } from "react";

export default function Form(props) {
  const [newTask, setNewTask] = useState("");

  const handleInput = ({ target }) => {
    //const name = target.name;
    const value = target.value;
    setNewTask(value);
  };

  const AddTasks = event => {
    event.preventDefault();
    //console.log("clicked!");
    props.newToDo(newTask);
  };

  return (
    <div className="mt-4">
      <form onSubmit={AddTasks}>
        <label>
          <input
            type="text"
            id="inputTask"
            onChange={handleInput}
            className="form-control"
          />
        </label>
        <button className="btn btn-dark mx-2">Add to the Task List</button>
      </form>
    </div>
  );
}

//REVIEW:
// TAKE AWAY NAME FROM LINE 25
