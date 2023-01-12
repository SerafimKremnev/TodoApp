import React from 'react';
import styles from './Task.module.css'

import { ReactComponent as StarIcon } from "../../components/SettingsTask/Complexity/star.svg"

const Task = ({complexity, priority, task_name, due_date, description}) => {
  return (
    <div className={styles.task}>
      <div className={styles.taskName}>{task_name}</div>
      <div className={styles.complexity}>
        <StarIcon className={styles.star}/>
        <div className={styles.num}>{complexity}</div>
      </div>
      <div className={styles.priority}>{priority}</div>
      <div className={styles.dueDate}>{due_date}</div>
    </div>
  );
};

export default Task;