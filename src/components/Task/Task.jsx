import React, {useState} from 'react';
import styles from './Task.module.css'
import Toolkit from "./Toolkit/Toolkit";
import Add from "./Add/Add";
import Checkbox from "../UI/Checkbox/Checkbox";
import {useDispatch} from "react-redux";
import {completeTodo} from "../../store/todoSlice";

const Task = ({complexity, priority, task_name, due_date, description, id}) => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  const openAdd = () => {
    setOpen(!open)
    console.log(open)
  }
  return (
    <div className={styles.taskBlock}>
      <div className={styles.task}>
        <div onClick={() => openAdd()} className={styles.taskName}><Checkbox onClick={()=>dispatch(completeTodo({complexity, priority, task_name, due_date, description, id}))}/><div>{task_name}</div></div>
        <div className={styles.priority}>{priority}</div>
        <div className={styles.dueDate}>{due_date}</div>
      </div>
      <Add isOpen={open} complexity={complexity} description={description} />
      <Toolkit id={id}/>
    </div>
  );
};

export default Task;