import './css/App.css';
import TaskFrom from "./components/TaskForm/TaskFrom";
import TaskList from "./components/TaskList/TaskList";
import {Routes, Route, Link, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import CreateTask, {createTaskAction} from "./components/CreateTask/CreateTask";
import router from "./router";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}


export default App;
