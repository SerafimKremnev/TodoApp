import React from 'react';
import Select, { StylesConfig } from 'react-select';
import styles from './Priority.module.css'
import {Controller} from "react-hook-form";

const Priority = () => {
  const options = [
    { value: 'Low', label: 'Low'},
    { value: 'Middle', label: 'Middle' },
    { value: 'High', label: 'High' },
  ];
  return (
    <div>
    Приоритет задачи
          <Select
            defaultValue={options[0]}
            options={options}
            className={styles.select}
            placeholder='Select'
            theme={(theme) => ({
              ...theme,

              colors: {
                ...theme.colors,
                primary25: '#ece9e9',
                primary: '#2564cf',
              },
            })}
          />
    </div>
  );
};

export default Priority;