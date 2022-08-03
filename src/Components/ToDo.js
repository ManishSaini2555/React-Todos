import React from "react";

const ToDo = ({ todo, onDelete, edit, hrShow }) => {
  return (
    <div>
      <h4 className="mt-3">{todo.title}</h4>
      <p>{todo.desc}</p>
      <button
        className="btn btn-sm btn-warning me-4"
        onClick={() => {
          edit(todo);
        }}
      >
        edit
      </button>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => {
          onDelete(todo);
        }}
      >
        Delete
      </button>
      {todo.sno !== hrShow ? <hr /> : ""}
    </div>
  );
};

export default ToDo;
