import React from "react";
import ToDo from "./ToDo";

const ToDos = (props) => {
  const todosStyle = {
    minHeight: "500px",
    marginBottom: "50px",
  };
  return (
    <div className="container" style={todosStyle}>
      <h3 className="text-center my-3 fw-bold text-decoration-underline">
        ToDos
      </h3>
      <div className="card">
        <div className="card-body">
          {!props.todos.length
            ? "No todos in the list"
            : props.todos.map((todo) => {
                return (
                  <ToDo
                    todo={todo}
                    key={todo.sno}
                    onDelete={props.onDelete}
                    hrShow={props.todos[props.todos.length - 1].sno}
                    edit={props.edit}
                  />
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default ToDos;
