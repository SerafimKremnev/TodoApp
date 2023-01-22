import React from 'react';
import styles from "./Add.module.css";
import { ReactComponent as StarIcon } from "../../SettingsTask/Complexity/star.svg"
import Complexity from "../../SettingsTask/Complexity/Complexity";
import cn from "classnames";
import Desc from "./Desc";

const Add = ({description, complexity, isOpen,...props}) => {
  console.log(description)
  return (
    <div className={cn({
      [styles.add]: complexity || description || false,
      [styles.active]: isOpen
    })}>
      <div className={cn({
        [styles.items]: description && complexity
      })}>
        {complexity ? <Complexity isEditable={false} complexity={complexity}/> : <></>}
        {description && <Desc description={description}/>}
      </div>
    </div>
  );
};

export default Add;