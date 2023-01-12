import React, {useState} from 'react';
import styles from './TaskForm.module.css'
import MyInput from "../UI/MyInput/MyInput";
import SettingsTask from "../SettingsTask/SettingsTask";
import MyButton from "../UI/MyButton/MyButton";
import {useForm} from "react-hook-form";
import Comment from "../SettingsTask/Comment/Comment";
import {NavLink} from "react-router-dom";


const TaskFrom = () => {
  const [value, setValue] = useState('');


  return (
    <form className={styles.taskForm}>
      <MyInput required setValue={setValue} value={value} placeholder={"Название задачи"}/>
      <SettingsTask/>
      <NavLink type="submit" className={styles.addTask} to={'/tasks'}><MyButton type="submit">Добавить задачу</MyButton></NavLink>
    </form>
  );
};

export default TaskFrom;