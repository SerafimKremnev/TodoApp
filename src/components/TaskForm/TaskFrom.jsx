import React, {useState} from 'react';
import styles from './TaskForm.module.css'
import MyInput from "../UI/MyInput/MyInput";
import SettingsTask from "../SettingsTask/SettingsTask";
import MyButton from "../UI/MyButton/MyButton";
import {useForm} from "react-hook-form";
import Comment from "../SettingsTask/Comment/Comment";

const TaskFrom = () => {
  const [value, setValue] = useState('');
  const {register, control, handleSubmit} = useForm()
    const onSubmit = (d) => {
      console.log(d)
    }

  const addTask = (e) => {
    setValue('')
  }

  return (
    <form className={styles.taskForm} onSubmit={handleSubmit(onSubmit)}>
      <MyInput setValue={setValue} value={value} placeholder={"Название задачи"} task={register}/>
      <SettingsTask task={register} controlComplexity={control}/>
      <MyButton type="submit" onClick={() =>setValue('')}>Добавить задачу</MyButton>
    </form>
  );
};

export default TaskFrom;