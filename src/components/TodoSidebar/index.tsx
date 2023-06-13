import React, { useState, useEffect } from 'react';
import classes from './TodoSidebar.module.scss';
import Modal from '../Modal';
import { useDispatch, useSelector } from 'react-redux';
import // deleteList,
// deleteListRequest,
// fetchListsTodos,
// selectAllLists,
'../../features/listsSlice';
// import { addTasks, fetchTodos } from '../../features/todosSlice';

import { ReactComponent as CloseSvg } from '../../assets/close.svg';
import { RootState, useAppDispatch } from '../../features/store';
import { removeList, selectList } from '../../features/todoAppSlice';

const TodoSidebar = () => {
  const todosLists = useSelector((state: RootState) => state.app.todosLists);
  const dispatch = useAppDispatch();

  const handleDeleteButtonClicked = (id: string) => {
    dispatch(removeList(id));
  };

  const listClickedHadler = (id: string) => {
    dispatch(selectList(id));
    console.log(id, 'working');
  };

  return (
    <>
      <aside className={classes.sidebar}>
        <div className={classes.sidebar__top}>
          <ul className={classes['folders-list']}>
            {todosLists.map((list) => (
              <li key={list.id}>
                <button
                  className={classes['folders-btn']}
                  onClick={() => listClickedHadler(list.id)}>
                  {list.name}
                </button>
                <button
                  className={classes['folders-delete-btn']}
                  onClick={() => handleDeleteButtonClicked(list.id)}>
                  <CloseSvg />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default TodoSidebar;
