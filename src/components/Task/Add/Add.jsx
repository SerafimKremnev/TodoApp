import React from 'react';
import styles from "./Add.module.css";
import { ReactComponent as StarIcon } from "../../SettingsTask/Complexity/star.svg"
import Complexity from "../../SettingsTask/Complexity/Complexity";
import cn from "classnames";
import Desc from "./Desc";
import msToHms from "ms-to-hms";

const Add = ({description, complexity, isOpen, trackTime, ...props}) => {
  console.log(description)
  const msToHms = require('ms-to-hms')
  return (
    <div className={cn({
      [styles.add]: complexity || description || trackTime>-1,
      [styles.active]: isOpen
    })}>
      <div className={cn(styles.items)}>
        {complexity ? <Complexity isEditable={false} complexity={complexity}/> : <></>}
        <div>Затраченное время {msToHms(trackTime)}</div>
        {description && <Desc description={description}/>}
      </div>
    </div>
  );
};

export default Add;