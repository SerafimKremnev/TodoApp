import React from 'react';
import TaskFrom from "../TaskForm/TaskFrom";
import {redirect} from "react-router";

const CreateTask = () => {
  return (
    <div>
      <TaskFrom/>
    </div>
  );
};

const createTaskAction = async ({request}) => {
  const formData = await request.formData()

  return redirect('/tasks')
}
export default CreateTask;
export {createTaskAction}