import { KeyboardEvent, useState } from 'react';
import classes from './TodoInput.module.scss';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../features/store';

export default function CustomInput() {
  const [title, setTitle] = useState('');

  const dispatch = useAppDispatch();
  const todos = useSelector((state: RootState) => state.app.todos);

  const keyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (title !== '') {
        // dispatch(addNewTask({ title, id: todos[0]['folders-listId'] || 0 }));
        // dispatch(addNewTodo(todos.length ? todos.length - 1 : 0, title));
        setTitle('');
      }
    }
  };

  return (
    <div className={classes.input}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="What needs to be done?"
        onKeyDown={keyDownHandler}
      />
    </div>
  );
}
