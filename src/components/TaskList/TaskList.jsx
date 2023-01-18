import React, {useState} from 'react';
import Task from "../Task/Task";
import {useSelector} from "react-redux";
import {dateDMY} from "../../time";

const TaskList = ({isToday = false}) => {
  const tasks = useSelector(state => state.tasks.tasks)

  function checknull(item, value) {
    if (item) {
      return item
    }
    return  value
  }

  const editDate = (str) => {
    if (str) {
      let arr = str.split('-')
      const [y, m, d] = arr
      return  `${d}.${m}.${y}`
    }
    return ''
  }


  const todayTasks = () => {
    console.log(dateDMY(Date.now()))
    return tasks.filter(task => editDate(task.time) == dateDMY(Date.now()))

  }

  return (
    <div>
      {
        isToday ?
          todayTasks().map(task => (
            <Task complexity={checknull(task.complexity, 0)} task_name={task.taskname} priority={checknull(task.priority?.value, '')} due_date={editDate(task.time)}/>
        )) :

          tasks.map(task => (
            <Task complexity={checknull(task.complexity, 0)} task_name={task.taskname} priority={checknull(task.priority?.value, '')} due_date={editDate(task.time)}/>
        ))
      }
    </div>
  );
};

export default TaskList;