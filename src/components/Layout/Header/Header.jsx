import React from 'react';
import styles from './Header.module.css'
import cn from "classnames";

const Header = ({className}) => {
  return (
    <header className={cn(styles.header, className)}>
      To Do
    </header>
  );
};

export default Header;