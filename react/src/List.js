import React, { useState } from "react";

export default function List({ pendingTasks }) {
  const [taskComplete, setTaskComplet] = useState(false);
  const [crossOut, setCrossOut] = useState("badge bg-dark text-wrap mb-3 fs-5");

  const handleDone = event => {
    console.log("clicked!");

    setTaskComplet(!taskComplete);

    setCrossOut("badge bg-success text-wrap mb-3 fs-5 ");
  };

  return (
    <div className="mt-4 text-start mx-5">
      <h2 className="text-danger fs-1 mb-4">PENDING</h2>
      <div>
        {pendingTasks.map(task => (
          <div key={task}>
            <label className={crossOut}>
              {task}
              <input
                type="checkbox"
                onClick={handleDone}
                className="btn-check btn-light mx-2"
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}

//done component add the className="text-decoration-line-through" in each item.

//const markTask = "text-decoration-line-through"
