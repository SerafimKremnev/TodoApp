import React, {useState} from 'react';
import styles from './Comment.module.css'
import Textarea from 'react-expanding-textarea'

const Comment = () => {

  return (
    <div className={styles.descriptipon}>
      Описание
      <Textarea
        className={styles.comment}
      />
    </div>
  );
};

export default Comment;