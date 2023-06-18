import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { removeList, selectList } from '../../redux/todoAppSlice';
import { NavLink } from 'react-router-dom';

import classes from './TodoSidebar.module.scss';

import { ReactComponent as CloseSvg } from '../../assets/close.svg';

const TodoSidebar = () => {
  const todosLists = useSelector((state: RootState) => state.app.todosLists);
  const dispatch = useAppDispatch();

  const handleDeleteButtonClicked = (id: string) => {
    dispatch(removeList(id));
  };

  const listClickedHadler = (id: string) => {
    dispatch(selectList(id));
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
                  <NavLink className={classes['nav-btn']} to={`lists/${list.id}`}>
                    {list.name}
                  </NavLink>
                </button>
                <NavLink
                  to="/"
                  className={classes['folders-delete-btn']}
                  onClick={() => handleDeleteButtonClicked(list.id)}>
                  <CloseSvg />
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default TodoSidebar;
