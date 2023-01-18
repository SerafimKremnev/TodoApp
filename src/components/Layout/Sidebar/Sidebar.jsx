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
    </div>
  );
};

export default Sidebar;