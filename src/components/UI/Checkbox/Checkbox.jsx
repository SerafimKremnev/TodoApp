import React from 'react';
import style from './Checkbox.module.css'

const Checkbox = ({...props}) => {
  return (
    <button {...props} className={style.checkbox}>
        <div className={style.complete}></div>
    </button>
  );
};

export default Checkbox;