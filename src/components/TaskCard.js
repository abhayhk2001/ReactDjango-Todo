import React from "react";
import "./static/TaskCard.css";

function TaskCard(props) {
  const deleteTask = () => {
    fetch(process.env.REACT_APP_API_URL + "/delete-task/" + props.task.id).then(
      () => {
        props.reRender();
      }
    );
  };
  const editTask = () => {
    props.setEdit(props.task);
  };
  return (
    <div className="task-card">
      {props.task.recurring ? (
        <>
          {" "}
          <h2>{props.task.title}</h2>
          <h4>recurring</h4>
        </>
      ) : (
        <h2>{props.task.title}</h2>
      )}

      <div className="info">
        {props.task.contexts.map((ind, index) => {
          return (
            <div key={index}>
              <h4>{props.contexts[ind].name}</h4>
            </div>
          );
        })}
      </div>
      <div className="options">
        <button className="delete" onClick={deleteTask}>
          Delete
        </button>
        <button className="edit" onClick={editTask}>
          Edit
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
