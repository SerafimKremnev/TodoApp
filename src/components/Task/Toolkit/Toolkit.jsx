import React from 'react';
import styles from "../Task.module.css";
import {ReactComponent as Timer} from '../icons/clock.svg'
import {ReactComponent as Pencil} from '../icons/pencil.svg'
import {ReactComponent as Delete} from '../icons/delete.svg'
import {Link, useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {removeTodo} from "../../../store/todoSlice";

const Toolkit = ({id}) => {
  const dispatch = useDispatch()

  return (
    <div className={styles.toolkit}>

      <Timer className={styles.icon}/>
      <div>
        <Link to={`/tasks/${id}/edit`}><Pencil className={styles.icon}/></Link>
        <Delete onClick={() => dispatch(removeTodo(id))} className={styles.icon}/>
      </div>
    </div>
  );
};

export default Toolkit;