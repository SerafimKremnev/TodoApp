import React from 'react';
import styles from "../Task.module.css";
import {ReactComponent as Timer} from '../icons/clock.svg'
import {ReactComponent as Pencil} from '../icons/pencil.svg'
import {ReactComponent as Delete} from '../icons/delete.svg'
import {Link, useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {removeCompleteTodo, removeTodo} from "../../../store/todoSlice";

const Toolkit = ({id, isComplete}) => {
  const dispatch = useDispatch()

  return (
    <div className={styles.toolkit}>

      {isComplete ? <div></div> : <Timer className={styles.icon}/>}
      <div>
        {isComplete ? <div></div> : <Link to={`/tasks/${id}/edit`}><Pencil className={styles.icon}/></Link>}
        <Delete onClick={() => dispatch( isComplete ? removeCompleteTodo(id) : removeTodo(id))} className={styles.icon}/>
      </div>
    </div>
  );
};

export default Toolkit;