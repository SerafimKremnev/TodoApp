import React, {useState} from 'react';
import Task from "../Task/Task";
import {useSelector} from "react-redux";
import {dateDMY} from "../../time";

const TaskList = ({isToday = false, isComplete = false}) => {
  const tasks = useSelector(state => state.tasks.tasks)
  const completedTasks = useSelector(state => state.tasks.completedTasks)

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
  const checkPage = (arr) => {
    return (
      arr.map(task => (
        <Task id={task.id} isComplete={isComplete} isToday={isToday} complexity={checknull(task.complexity, 0)} task_name={task.taskname} priority={checknull(task.priority?.value, '')} due_date={editDate(task.time)} description={task.comment}/>
      ))
    )
  }

  const returnPage = () => {
    if(isToday) {
      return checkPage(todayTasks())
    } else if (isComplete) {
      return checkPage(completedTasks)
    }
    return checkPage(tasks)
  }

  return (
    <div>
      {
        returnPage()
      }
    </div>
  );
};

export default TaskList;