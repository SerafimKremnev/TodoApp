import React from 'react';
import styles from './MyInput.module.css'

const MyInput = ({value, task, setValue, placeholder }) => {
  return (
    <input className={styles.input} placeholder={placeholder} {...task('task-name')} value={value} onChange={(e)=>setValue(e.target.value)} type="text"/>
  );
};

export default MyInput;