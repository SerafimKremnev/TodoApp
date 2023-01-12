import React, {useState} from 'react';
import styles from './SettingsTask.module.css'
import Complexity from "./Complexity/Complexity";
import Priority from "./Priority/Priority";
import TimeEstimate from "./TimeEstimate/TimeEstimate";
import Comment from "./Comment/Comment";
import {Controller} from "react-hook-form";

const SettingsTask = () => {
  const [complexity, setComplexity] = useState(0)
  return (
    <div className={styles.settings}>
      <Complexity setComplexity={setComplexity} complexity={complexity}/>
      <TimeEstimate/>
      <Priority/>
      <Comment />
    </div>
  );
};

export default SettingsTask;