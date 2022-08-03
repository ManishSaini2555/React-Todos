import React, { useState, useEffect } from "react";

const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) alert("Title and Description can't be empty.");
    else {
      props.addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };
  useEffect(() => {
    if (props.editTodo.title) {
      setTitle(props.editTodo.title);
      setDesc(props.editTodo.desc);
    }
  }, [props.editTodo]);
  return (
    <div className="container my-3">
      <h3 className="text-center fw-bold text-decoration-underline">
        Add ToDo to the list
      </h3>
      <div className="class">
        <form onSubmit={submit} className="border class-body px-5 py-5">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Todo Title
            </label>
            <input
              type="text"
              value={title}
              className="form-control"
              onChange={(e) => setTitle(e.target.value)}
              id="title"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Todo Description
            </label>
            <input
              type="text"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className="form-control"
              id="description"
            />
          </div>
          <button type="submit" className="btn btn-sm btn-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
