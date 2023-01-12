import React from 'react';
import styles from './Sidebar.module.css'
import cn from 'classnames'
import {NavLink} from "react-router-dom";

const Sidebar = ({className}) => {
  return (
    <div className={cn(styles.sidebar, className)}>
      <NavLink className={styles.sidebarLink} p to={'/task-form'}>Создать задачу</NavLink>
      <NavLink className={styles.sidebarLink} to={'/tasks'}>Все задачи</NavLink>
    </div>
  );
};

export default Sidebar;