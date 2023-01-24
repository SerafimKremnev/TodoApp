import React, {useState} from 'react';
import styles from './Sidebar.module.css'
import cn from 'classnames'
import {NavLink} from "react-router-dom";
import Groups from "../Groups/Groups";

const Sidebar = ({className}) => {
  const [openGroup, setOpenGroup] = useState(true)
  return (
    <div className={cn(styles.sidebar, className)}>
      <NavLink className={styles.sidebarLink} to={'/create'}>Создать задачу</NavLink>
      <NavLink className={styles.sidebarLink} to={'/tasks'}>Все задачи</NavLink>
      <NavLink className={styles.sidebarLink} to={'/today'}>Сегодня</NavLink>
      <NavLink className={styles.sidebarLink} to={'/important'}>Важно</NavLink>
      <NavLink className={styles.sidebarLink} to={'/complete'}>Завершенные</NavLink>
      <div className={styles.stick}></div>
      <button onClick={()=>setOpenGroup(()=>!openGroup)} className={styles.button}>Группы</button>
      <Groups openGroup={openGroup}/>
    </div>
  );
};

export default Sidebar;