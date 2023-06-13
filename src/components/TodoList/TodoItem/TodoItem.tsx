import styles from './TodoItem.module.scss';
import { FC, useState } from 'react';
import { useAppDispatch } from '../../../features/store';

type TodoItemProps = {
  id: string;
  title: string;
  completed: boolean;
};

const TodoItem: FC<TodoItemProps> = ({ id, title, completed }) => {
  const [deleteBtnIsShown, setDeleteBtnIsShown] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const deleteTask = () => {
    // dispatch(deleteRequest(id));
  };

  const changeStatus = () => {
    // dispatch(changeTaskStatusRequest(task));
  };

  return (
    <li
      className={styles.item}
      onMouseOver={() => setDeleteBtnIsShown(true)}
      onMouseOut={() => setDeleteBtnIsShown(false)}>
      <div onClick={changeStatus}>
        <span className={completed ? `${styles.mark} ${styles.completed}` : styles.mark}></span>
        <p className={completed ? `${styles.title} ${styles.done}` : styles.title}>{title}</p>
      </div>
      {deleteBtnIsShown && (
        <button onClick={deleteTask}>
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <g id="cross">
              <line
                stroke="rgb(255, 213, 213)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3px"
                x1="7"
                x2="25"
                y1="7"
                y2="25"
              />
              <line
                stroke="rgb(255, 213, 213)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3px"
                x1="7"
                x2="25"
                y1="25"
                y2="7"
              />
            </g>
          </svg>
        </button>
      )}
    </li>
  );
};

export default TodoItem;
