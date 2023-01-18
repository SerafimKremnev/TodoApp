import React, {useEffect, useState} from 'react';
import styles from './TaskForm.module.css'
import MyInput from "../UI/MyInput/MyInput";
import SettingsTask from "../SettingsTask/SettingsTask";
import MyButton from "../UI/MyButton/MyButton";
import {useForm} from "react-hook-form";
import {Form, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addTodo} from "../../store/todoSlice";


const TaskForm = () => {
  const [value, setValue] = useState('')
  const { register, control, handleSubmit } = useForm()
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addTask = (task) => {
    dispatch(addTodo(task))
  }

  const onSubmit = (data) => {
    console.log(data)
    addTask(data)
    navigate("/tasks");
  }

  return (
    <Form action={'/create'} method={'post'} onSubmit={handleSubmit(onSubmit)} className={styles.taskForm}>
      <MyInput register={register} required setValue={setValue} value={value} placeholder={"Название задачи"}/>
      <SettingsTask register={register} control={control}/>
      <MyButton type="submit">Добавить задачу</MyButton>
    </Form >
  );
}

export default TaskForm;