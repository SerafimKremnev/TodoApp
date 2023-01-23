import React from 'react';
import styles from './Sidebar.module.css'
import cn from 'classnames'
import {NavLink} from "react-router-dom";

const Sidebar = ({className}) => {
  return (
    <div className={cn(styles.sidebar, className)}>
      <NavLink className={styles.sidebarLink} to={'/create'}>Создать задачу</NavLink>
      <NavLink className={styles.sidebarLink} to={'/tasks'}>Все задачи</NavLink>
      <NavLink className={styles.sidebarLink} to={'/today'}>Сегодня</NavLink>
      <NavLink className={styles.sidebarLink} to={'/important'}>Важно</NavLink>
      <NavLink className={styles.sidebarLink} to={'/complete'}>Завершенные</NavLink>
    </div>
  );
};

export default Sidebar;