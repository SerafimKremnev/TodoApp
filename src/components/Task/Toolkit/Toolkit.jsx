import React from 'react';
import styles from "../Task.module.css";
import {ReactComponent as Timer} from '../icons/clock.svg'
import {ReactComponent as Pencil} from '../icons/pencil.svg'
import {ReactComponent as Delete} from '../icons/delete.svg'

const Toolkit = () => {
  return (
    <div className={styles.toolkit}>
      <Timer className={styles.icon}/>
      <div>
        <Pencil className={styles.icon}/>
        <Delete className={styles.icon}/>
      </div>
    </div>
  );
};

export default Toolkit;