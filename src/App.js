import './css/App.css';
import {RouterProvider} from "react-router-dom";
import router from "./router";
import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getFullData} from "./store/todoSlice";

function App() {
  const dispatch = useDispatch()
  // async function getData(){
  //   const { data, error } = await supabase
  //   .from('ToDo')
  //   .select()
  //   dispatch(getFullData(data.map(task=> task.task)))
  // }
  // useEffect(async ()=> {
  //   getData()
  // }, [])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}


export default App;
