import React, {useState} from 'react';
import Task from "../Task/Task";
import {useSelector} from "react-redux";
import {dateDMY} from "../../time";

const TaskList = ({isToday = false, isComplete = false, isImportant =false}) => {
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
    return tasks.filter(task => editDate(task.time) == dateDMY(Date.now()))
  }
  const importantTasks = () => {
    return tasks.filter(task => task.priority.value == "High")
  }
  const checkPage = (arr) => {
    return (
      arr.map(task => (
        <Task editDate={editDate} isComplete={isComplete} isToday={isToday} task={task}/>
      ))
    )
  }

  const returnPage = () => {
    if(isToday) {
      return checkPage(todayTasks())
    } else if (isComplete) {
      return checkPage(completedTasks)
    } else if(isImportant) {
      return checkPage(importantTasks())
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