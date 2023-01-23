import React, {useState} from 'react';
import styles from './Task.module.css'
import Toolkit from "./Toolkit/Toolkit";
import Add from "./Add/Add";
import Checkbox from "../UI/Checkbox/Checkbox";
import {useDispatch} from "react-redux";
import {completeTodo, returnTodo} from "../../store/todoSlice";

const Task = ({complexity, isComplete, priority, task_name, due_date, description, id}) => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()
  const task = {complexity, priority, task_name, due_date, description, id}

  const openAdd = () => {
    setOpen(!open)
    console.log(open)
  }
  return (
    <div className={styles.taskBlock}>
      <div className={styles.task}>
        <div onClick={() => openAdd()} className={styles.taskName}>
          <Checkbox isComplete={isComplete} onClick={()=>dispatch(
            isComplete ? returnTodo(task) : completeTodo(task)
          )}/>
          <div>{task_name}</div>
        </div>
        <div className={styles.priority}>{priority}</div>
        <div className={styles.dueDate}>{due_date}</div>
      </div>
      <Add isOpen={open} complexity={complexity} description={description} />
      <Toolkit isComplete={isComplete} id={id}/>
    </div>
  );
};

export default Task;