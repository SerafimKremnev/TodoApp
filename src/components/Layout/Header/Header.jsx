import React from 'react';
import styles from './Header.module.css'
import cn from "classnames";
import {ReactComponent as User} from "./user.svg";
import {supabase} from "../../../supabase/supabase";

const Header = ({className, activeSidebar, setActiveSidebar}) => {

  const auth = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google'
    })
  }


  return (
    <header className={cn(styles.header, className)}>
      <div className={styles.title}>To Do</div><div onClick={()=>setActiveSidebar(()=>!activeSidebar)} className={cn(styles.burger, {
        [styles.burgerClose]: activeSidebar
    })}></div>
      <User onClick={auth} className={styles.user}/>
    </header>
  );
};

export default Header;