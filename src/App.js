import './css/App.css';
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import {Routes, Route, Link, RouterProvider, useLocation} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import router from "./router";
import React from "react";

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}


export default App;
