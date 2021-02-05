import React, { useState } from "react";
import "./App.css";
import Form from "./Form.js";
import List from "./List.js";

function App() {
  const [toDos, setToDos] = useState(["Go shopping", "Cook", "Clean Windows"]);

  const handleToDos = newToDos => {
    setToDos(state => [...state, newToDos]);
  };

  return (
    <div className="App text-center mt-4">
      <h3 className="succes">To Do List</h3>
      <Form newToDo={newToDo => handleToDos(newToDo)} />
      {console.log(toDos)}
      <List />
    </div>
  );
}

export default App;

//put 3 default items

//create a Form component (item added after clicking the component)

//create a List component.

//cross out the item once it is done

//bonus: alphabetical ordered list
