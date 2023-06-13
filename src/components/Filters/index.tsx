import classes from './Filters.module.scss';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../features/store';
// import { selectAllTasks, selectListId } from '../../features/todosSlice';
// import { changeAllTasksStatusRequest } from '../../features/filtersSlice';

const Filters = () => {
  const dispatch = useDispatch();

  const selectedList = useSelector((state: RootState) => state.app.selectedList);
  const todos = useSelector((state: RootState) => state.app.todos);

  const completedTasks = todos.map((task) => {
    if (selectedList && task.listId === selectedList.id) {
      return { ...task, completed: true };
    }
  });

  const lists = useSelector((state: RootState) => state.app.todosLists);

  // const list = listId ? lists.find((item) => item.id === listId) : null;

  // const toggleStatus = () => {
  //   dispatch(changeAllTasksStatusRequest({ listId, list, completedTasks }));
  // };

  const remainingTodos = todos.filter((todo) => {
    if (selectedList && todo.listId === selectedList.id) {
      return todo.completed !== true;
    }
  });

  const clickedActiveTodos = () => {
    // dispatch(showActiveTodos());
  };

  const ClickedCompletedTodos = () => {
    // dispatch(showCompletedTodos());
  };

  return (
    <nav className={classes.nav}>
      <div className={classes.actions}>
        <h3>Actions</h3>
        <div className={classes[`actions-btns`]}>
          <button>Mark all completed</button>
          <button>Clear completed</button>
        </div>
      </div>

      <div className={classes.active}>
        <h3>Remaining Todos</h3>
        <p>
          {remainingTodos.length === 1
            ? remainingTodos.length + ' item left'
            : remainingTodos.length + ' items left'}
        </p>
      </div>

      <ul className={classes['status-filter']}>
        <h3>Filter by Status</h3>
        <li>
          <button>All</button>
        </li>
        <li>
          <button onClick={clickedActiveTodos}>Active</button>
        </li>
        <li>
          <button onClick={ClickedCompletedTodos}>Completed</button>
        </li>
      </ul>
    </nav>
  );
};

export default Filters;
