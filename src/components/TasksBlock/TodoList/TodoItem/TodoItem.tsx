import styles from './TodoItem.module.scss';
import { FC, useState } from 'react';
import { useAppDispatch } from '../../../../redux/store';
import { todoStatusChanged, removeTodo } from '../../../../redux/todoAppSlice';
import { ReactComponent as DeleteIcon } from '../../../../assets/delete.svg';

type TodoItemProps = {
  id: string;
  title: string;
  completed: boolean;
};

const TodoItem: FC<TodoItemProps> = ({ id, title, completed }) => {
  const [deleteBtnIsShown, setDeleteBtnIsShown] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const deleteTask = (id: string) => {
    dispatch(removeTodo(id));
  };

  const changeStatus = (id: string) => {
    dispatch(todoStatusChanged(id));
  };

  return (
    <li
      className={styles.item}
      onMouseOver={() => setDeleteBtnIsShown(true)}
      onMouseOut={() => setDeleteBtnIsShown(false)}>
      <div onClick={() => changeStatus(id)}>
        <span className={completed ? `${styles.mark} ${styles.completed}` : styles.mark} />
        <p className={completed ? `${styles.title} ${styles.done}` : styles.title}>{title}</p>
      </div>
      {deleteBtnIsShown && (
        <button onClick={() => deleteTask(id)}>
          <DeleteIcon />
        </button>
      )}
    </li>
  );
};

export default TodoItem;
