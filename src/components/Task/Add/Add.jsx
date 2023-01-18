import React from 'react';
import styles from "./Add.module.css";
import { ReactComponent as StarIcon } from "../../SettingsTask/Complexity/star.svg"
import Complexity from "../../SettingsTask/Complexity/Complexity";
import cn from "classnames";

const Add = ({description, complexity, isOpen,...props}) => {
  return (
    <div className={cn({
      [styles.add]: complexity || description,
      [styles.active]: isOpen
    })}>
      <div className={styles.complexity}>
        {complexity==0 ?
          <></> :
            <Complexity isEditable={false} complexity={complexity}/>
        }
      </div>
    </div>
  );
};

export default Add;