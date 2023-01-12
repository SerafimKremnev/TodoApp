import React from 'react';
import { Link, Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Sidebar from "./Sidebar/Sidebar";
import styles from './Layout.module.css'

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header className={styles.header}/>
      <Sidebar className={styles.sidebar}/>
      <Main className={styles.main}>
        <Outlet/>
      </Main>
    </div>
  );
};

export default Layout;