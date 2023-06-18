import classes from './Filters.module.scss';

import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { sortedTodos, statusFilterChanged } from '../../redux/todoAppSlice';

const Filters = () => {
  const dispatch = useAppDispatch();

  const selectedList = useSelector((state: RootState) => state.app.selectedList);
  const todos = useSelector((state: RootState) => state.app.todos);

  const remainingTodos = todos.filter(
    (todo) => selectedList && todo.listId === selectedList.id && todo.completed !== true,
  );

  return (
    <nav className={classes.nav}>
      <div className={classes.actions}>
        <h3 className={classes.heading}>Actions</h3>
        <div className={classes[`actions-btns`]}>
          <button
            className={classes[`action-btn`]}
            onClick={() => dispatch(statusFilterChanged(true))}>
            Mark all completed
          </button>
          <button
            className={classes[`action-btn`]}
            onClick={() => dispatch(statusFilterChanged(false))}>
            Clear completed
          </button>
        </div>
      </div>

      <div className={classes.active}>
        <h3 className={classes.heading}>Remaining Todos</h3>
        <p>
          {remainingTodos.length === 1
            ? remainingTodos.length + ' item left'
            : remainingTodos.length + ' items left'}
        </p>
      </div>

      <ul className={classes['status-filter']}>
        <h3 className={classes.heading}>Filter by Status</h3>
        <li>
          <button className={classes['status-btn']} onClick={() => dispatch(sortedTodos(''))}>
            All
          </button>
        </li>
        <li>
          <button className={classes['status-btn']} onClick={() => dispatch(sortedTodos('active'))}>
            Active
          </button>
        </li>
        <li>
          <button
            className={classes['status-btn']}
            onClick={() => dispatch(sortedTodos('completed'))}>
            Completed
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Filters;
