import React from 'react';
import { Link, Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Sidebar from "./Sidebar/Sidebar";
import styles from './Layout.module.css'
import Tracking from "./Tracking/Tracking";
import {useSelector} from "react-redux";

const Layout = () => {
  const isTracking = useSelector(state => state.tasks.track.isTracking)
  return (
    <div className={styles.layout}>
      <Header className={styles.header}/>
      <Sidebar className={styles.sidebar}/>
      <Main className={styles.main}>
        <Outlet/>
        {isTracking ? <Tracking/> : <></>}
      </Main>
    </div>
  );
};

export default Layout;