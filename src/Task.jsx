import React from 'react'

const Task = (props) => {
  return (
    <div style={{ display: 'flex', gap: '3rem', height: '40px', padding: '1rem 2rem', backgroundColor: props.completed ? "green" : "transparent" }}>
      <h1 style={{ margin: 0 }}>{props.taskName}</h1>
      <div className="buttons" style={{ display: "flex", gap: '4px' }}>
        <button onClick={() => props.completeTask(props.id)}>Complete</button>
        <button onClick={() => props.deleteTask(props.id)}> x </button>
      </div>
    </div>
  )
}

export default Task