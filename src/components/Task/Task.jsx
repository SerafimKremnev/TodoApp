import React, {useState} from 'react';
import styles from './Task.module.css'
import Toolkit from "./Toolkit/Toolkit";
import Add from "./Add/Add";

const Task = ({complexity, priority, task_name, due_date, description}) => {
  const [open, setOpen] = useState(false)

  const openAdd = () => {
    setOpen(!open)
    console.log(open)
  }
  return (
    <div className={styles.taskBlock}>
      <div className={styles.task}>
        <div onClick={() => openAdd()} className={styles.taskName}>{task_name}</div>
        <div className={styles.priority}>{priority}</div>
        <div className={styles.dueDate}>{due_date}</div>
      </div>
      <Add isOpen={open} complexity={complexity} description={description} />
      <Toolkit/>
    </div>
  );
};

export default Task;