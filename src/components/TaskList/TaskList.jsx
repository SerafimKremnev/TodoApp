import React, {useState} from 'react';
import Task from "../Task/Task";
import {useLocation} from "react-router";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);



  return (
    <div>
        <Task complexity={4} task_name={'Создать компонент React'} priority={'High'} due_date={'2022-01-12'}/>
    </div>
  );
};

export default TaskList;