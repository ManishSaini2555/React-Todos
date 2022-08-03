import Header from "./Components/Header.js";
import ToDos from "./Components/ToDos";
import AddToDo from "./Components/AddTodo";
import Footer from "./Components/Footer";
import About from "./Components/About";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let toDoList = [];
  const [editTodo, setEditTodo] = useState("");
  if (localStorage.getItem("toDo"))
    toDoList = JSON.parse(localStorage.getItem("toDo"));

  const onDelete = (todo) => {
    //delete todo
    console.log("delete is called", todo);
    settodos(todos.filter((item) => item !== todo));
  };

  const edit = (todo) => {
    //edit todo
    console.log("delete is called", todo);
    settodos(todos.filter((item) => item !== todo));
    setEditTodo(todo);
  };

  const addTodo = (title, desc) => {
    //add todo
    settodos(
      todos.concat({
        sno: todos.length ? todos[todos.length - 1].sno + 1 : 1,
        title: title,
        desc: desc,
      })
    );
    setEditTodo("");
  };

  const [todos, settodos] = useState(toDoList);

  useEffect(() => {
    localStorage.setItem("toDo", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <Router>
        <Header title="To Dos" search={false} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <AddToDo addTodo={addTodo} editTodo={editTodo} />
                <ToDos todos={todos} onDelete={onDelete} edit={edit} />
              </>
            }
          ></Route>
          <Route exact path="/about" element={<About />}></Route>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
