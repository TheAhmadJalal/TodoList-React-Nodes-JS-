import './App.css';
import Header from "./MyComponent/Header";
import  Todos from "./MyComponent/Todos";
import  Footer  from "./MyComponent/Footer";
import  AddTodo  from "./MyComponent/AddTodo";
import { About } from "./MyComponent/About";
import React, { useState, useEffect } from 'react';
import  {BrowserRouter as Router,Route} from "react-router-dom";
// import {Switch} from 'react-router-dom';
import { Routes  } from 'react-router-dom';
function App() {
  // Create react app with this command
  // npx create-react-app todos-list
  // Start with this
  // npm start

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const onDelete = (todo) => {
    // console.log("I am ondelete of todo", todo);
    // Deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    // console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title_, desc_) => {
    // console.log("I am adding this todo", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].src + 1;
    }
    const myTodo = {
      src: sno,
      title: title_,
      desc: desc_,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return ( 
    <> 
    <Router>
      <Header title="My Todos List" searchBar={false} /> 
      <Routes>
        <Route path="/" element={
        <>
          <AddTodo addTodo={addTodo} />
          <Todos todos={todos} onDelete={onDelete} />
        </>
      }/>
        

          {/* <Route path="/" render={()=>{
            return(
            <>
            <AddTodo addTodo={addTodo} />
            <Todos todos={todos} onDelete={onDelete} /> 
            </>)
          }}> 
          </Route> */}
          <Route path="/about"  element={<About />} /> 
         
        </Routes> 
      <Footer />
    </Router>
    </>
  );
}

export default App;
