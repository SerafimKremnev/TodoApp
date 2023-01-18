import React, {useState} from 'react';
import styles from './SettingsTask.module.css'
import Complexity from "./Complexity/Complexity";
import Priority from "./Priority/Priority";
import TimeEstimate from "./TimeEstimate/TimeEstimate";
import Comment from "./Comment/Comment";
import {Controller} from "react-hook-form";

const SettingsTask = ({register, control}) => {
  return (
    <div className={styles.settings}>
      <Controller
        name={'complexity'}
        control={control}
        render={({field}) => (
          <Complexity isEditable name={"complexity"} setComplexity={field.onChange} complexity={field.value}/>
        )}
      />
      <TimeEstimate register={register} name={"time"}/>
      <Priority control={control} register={register} name={"priority"}/>
      <Comment register={register} name={"description"}/>
    </div>
  );
};

export default SettingsTask;