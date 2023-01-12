import * as React from "react";
import {
  createBrowserRouter, createRoutesFromElements, Route,
  RouterProvider, Routes,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import TaskList from "./components/TaskList/TaskList";
import TaskFrom from "./components/TaskForm/TaskFrom";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path={'/tasks'} element={<TaskList/>} />
    <Route path='/task-form' element={<TaskFrom/>}/>
  </Route>
  )
);

export default router
