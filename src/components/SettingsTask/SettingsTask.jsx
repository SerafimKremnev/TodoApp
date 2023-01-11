import React, {useState} from 'react';
import styles from './SettingsTask.module.css'
import Complexity from "./Complexity/Complexity";
import Priority from "./Priority/Priority";
import TimeEstimate from "./TimeEstimate/TimeEstimate";
import Comment from "./Comment/Comment";
import {Controller} from "react-hook-form";

const SettingsTask = ({task, controlComplexity}) => {
  return (
    <div className={styles.settings}>
      <Controller
        control={controlComplexity}
        name='complexity'
        render={({field}) => (
          <Complexity setComplexity={field.onChange} complexity={field.value}/>
        )}
      />
      <TimeEstimate task={task}/>
      <Priority controlComplexity={controlComplexity} task={task}/>
      <Comment task={task} controlComplexity={controlComplexity}/>
    </div>
  );
};

export default SettingsTask;