import { KeyboardEvent, useState } from 'react';
import classes from './CustomInput.module.scss';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../redux/store';
import { addNewTodo } from '../../../redux/todoAppSlice';
import { v4 } from 'uuid';

export default function CustomInput() {
  const [title, setTitle] = useState('');

  const dispatch = useAppDispatch();
  const selectedList = useSelector((state: RootState) => state.app.selectedList);

  const keyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (title.trim()) {
        dispatch(
          addNewTodo({
            listId: selectedList?.id,
            id: v4(),
            text: title,
            completed: false,
          }),
        );
        setTitle('');
      } else {
        alert('Input field is empty!');
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
