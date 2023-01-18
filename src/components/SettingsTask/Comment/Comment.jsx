import React, {useState} from 'react';
import styles from './Comment.module.css'
import Textarea from 'react-expanding-textarea'

const Comment = ({register, ...props}) => {

  return (
    <div className={styles.descriptipon}>
      Описание
      <Textarea
        {...props}
        {...register('comment')}
        className={styles.comment}
      />
    </div>
  );
};

export default Comment;