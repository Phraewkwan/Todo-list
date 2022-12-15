import { useState } from "react";
import "./App.css"
import Task from "./components/Task/Task";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value)
  };

  const handleClick = () => {
    // 👇️ clear input value
    setNewTask('');
  };

  const addTask = () => {
    // first way //

    // const newTodoList = [...todoList, newTask];
    // setTodoList(newTodoList);

    // Working in the same way from above
    // setTodoList([...todoList, newTask]);

    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      complete: false,
    };

    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    // first way //

    // const newTodoList = todoList.filter((task) => task !== taskName);
    // setTodoList(newTodoList);

    // Working in the same way from above but it will delete if we put the same name of task
    console.log(id)
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    )
  }

  return (
    <div className="App">
      <div className="headerText">
        <h1>Today's Task</h1>
      </div>
      <div className="addTask">
        <input type="text" value={newTask} onChange={handleChange} />
        <button
          type="submit"
          disabled={!newTask}
          onClick={() => { addTask(); handleClick(); }}
        > + Add Task
        </button>
      </div>
      
      <div className="list">
        {todoList.map((task, id) => {
          return (
            <Task
              key={id}
              taskName={task.taskName}
              id={task.id}
              deleteTask={deleteTask}
              completed={task.completed}
              completeTask={completeTask} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
