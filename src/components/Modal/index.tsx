import React, { Dispatch, FC, FormEvent, SetStateAction, useState } from 'react';
// import { addList } from '../../features/listsSlice';
import classes from './Modal.module.scss';
import { addList } from '../../features/todoAppSlice';
import { useAppDispatch } from '../../features/store';

type ModalProps = {
  setModalIsVisible: Dispatch<SetStateAction<boolean>>;
};

const Modal: FC<ModalProps> = ({ setModalIsVisible }) => {
  const [title, setTitle] = useState('');
  const dispatch = useAppDispatch();

  const createList = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title.trim()) {
      dispatch(addList(title));
      setModalIsVisible(false);
    } else {
      alert('Input field is empty.');
    }
  };

  // const hideModal = () => {
  //   setShowModal(false);
  // };

  return (
    <div className={classes.wrapper}>
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={(e) => createList(e)}
        className={classes.form}>
        <label htmlFor="form-input">Write folder's name</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="form-input"
          placeholder="Work..."
        />
        <button type="submit">Create folder</button>
      </form>
    </div>
  );
};

export default Modal;
