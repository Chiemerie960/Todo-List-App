import React from "react";
import { useState } from "react";
import Task from "./Task";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
    // console.log(task);
  };

  const deleteTask = (id) => {
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
    );
  };

  return (
    <div className="App">
      <div
        className="addTask"
        style={{
          display: "flex",
          width: "90vw",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem 1px",
          outline: "none",
          border: "none",
        }}>
        <input
          type="text"
          onChange={handleChange}
          style={{ padding: "7px" }}
        />
        <button onClick={addTask} style={{ padding: "7px 0rem" }}>
          Add Task
        </button>
      </div>
      <div className="list">
        {todoList.map((task, key) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              deleteTask={deleteTask}
              completed={task.completed}
              completeTask={completeTask}
              key={key}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
