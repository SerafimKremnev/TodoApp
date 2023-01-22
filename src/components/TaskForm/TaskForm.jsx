import React, {useEffect, useState} from 'react';
import styles from './TaskForm.module.css'
import MyInput from "../UI/MyInput/MyInput";
import SettingsTask from "../SettingsTask/SettingsTask";
import MyButton from "../UI/MyButton/MyButton";
import {useForm} from "react-hook-form";
import {Form, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addTodo, toggleTodo} from "../../store/todoSlice";


const TaskForm = ({isEditable = false, task}) => {
  const [value, setValue] = useState(() => isEditable ? task.taskname : '')
  const { register, control, handleSubmit } = useForm()
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addTask = (task) => {
    dispatch(addTodo(task))
  }

  const onSubmit = (data) => {
    if (isEditable) {
      navigate(-1)
      dispatch(toggleTodo(data))
    } else {
      addTask(data)
      navigate("/tasks");
    }
  }

  return (
    <Form action={'/create'} method={'post'} onSubmit={handleSubmit(onSubmit)} className={styles.taskForm}>
      <MyInput task={task} isEditable={isEditable} register={register} required setValue={setValue} value={value} placeholder={"Название задачи"}/>
      <SettingsTask task={task} isEditTask={isEditable} register={register} control={control}/>
      <input type={'hidden'} {...register('id')} defaultValue={isEditable ? task.id : Date.now()}/>
      {
        isEditable ?
          <MyButton type="submit">Редактировать задачу</MyButton> :
          <MyButton type="submit">Добавить задачу</MyButton>
      }
    </Form >
  );
}

export default TaskForm;