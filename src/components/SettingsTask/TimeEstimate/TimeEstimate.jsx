import React from 'react';
import styles from './TimeEstimate.module.css'

const TimeEstimate = ({task, register,...props}) => {
  const today = () => {
    const date = new Date()
    let yyyy = date.getFullYear()
    let mm = date.getMonth() + 1
    if (mm < 10) {
      mm = '0' + mm
    }
    let dd = date.getDate()
    return `${yyyy}-${mm}-${dd}`
  }
  today()
  return (
    <div className={styles.timeEstimate} style={{margin: '20px 0px 0px 0px'}}>
      Завершить до <input {...props} {...register('time')} className={styles.date} type='date' min={today()}/>
    </div>
  );
};

export default TimeEstimate;