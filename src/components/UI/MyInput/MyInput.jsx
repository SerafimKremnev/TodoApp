import React from 'react';
import styles from './MyInput.module.css'

const MyInput = ({value, setValue, placeholder, ...props}) => {
  return (
    <input required {...props} className={styles.input} placeholder={placeholder} value={value} onChange={(e)=>setValue(e.target.value)} type="text"/>
  );
};

export default MyInput;