import React, { useState } from 'react';
import styles from './TaskInput.module.scss';
import { useAppDispatch } from '../../../features/store';

const TaskInput = () => {
  // const dispatch = useAppDispatch();

  const [title, setTitle] = useState('');
  const [showInput, setShowInput] = useState(false);

  const onClickToggle = () => {
    setShowInput(!showInput);
  };

  const addNewTask = () => {
    const newTask = {
      title,
      completed: false,
      // listId,
    };
  };

  return (
    <div className={styles['task-form']}>
      {!showInput && (
        <button onClick={onClickToggle} className={styles['list-btn']}>
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <style></style>
            </defs>
            <title />
            <g id="plus">
              <line stroke="#B4B4B4" x1="16" x2="16" y1="7" y2="25" />
              <line stroke="#B4B4B4" x1="7" x2="25" y1="16" y2="16" />
            </g>
          </svg>
          Новая задача
        </button>
      )}
      {showInput && (
        <div className={styles.input}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="What needs to be done?"
          />
          <button onClick={addNewTask} className={styles['btn-add']}>
            Add task
          </button>
          <button onClick={onClickToggle} className={styles['btn-cancel']}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskInput;
