import * as React from "react";
import {
  createBrowserRouter, createRoutesFromElements, Route,
  RouterProvider, Routes,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import CreateTask from "./pages/CreateTask";
import Today from "./pages/Today";
import Tasks from "./pages/Tasks";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
    <Route path={'/tasks'} element={<Tasks/>} />
    <Route path={'/create'} element={<CreateTask/>} />
    <Route path={'/today'} element={<Today/>} />
  </Route>
  )
);

export default router
