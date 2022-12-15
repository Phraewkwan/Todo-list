import React from "react";
import "./Task.css";

const Task = (props) => {
  return (
    <div className="task">
      <h1 style={{ textDecoration: props.completed ? "line-through" : "none" }}>
        {props.taskName}
      </h1>
      <div className="content__container">
        <button onClick={() => props.completeTask(props.id)}>Complete</button>
        <button onClick={() => props.deleteTask(props.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Task;
