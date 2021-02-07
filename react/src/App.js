import React, { useState } from "react";
import "./App.css";
import Form from "./Form.js";
import List from "./List.js";

function App() {
  const [toDos, setToDos] = useState([
    "Review Recursion",
    "Study React",
    "Look again for trees"
  ]);

  const handleToDos = newToDos => {
    setToDos(state => [...state, newToDos]);
  };

  return (
    <div className="App text-center mt-4">
      <h1 className="text-success fw-bold">To Do List</h1>
      <Form newToDo={newToDo => handleToDos(newToDo)} />
      {/* {console.log(toDos)} */}
      <List pendingTasks={toDos} />
    </div>
  );
}

export default App;

//put 3 default items

//create a Form component (item added after clicking the component)

//create a List component.

//cross out the item once it is done

//bonus: alphabetical ordered list
