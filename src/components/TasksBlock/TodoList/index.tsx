import { useSelector } from 'react-redux';

import TodoItem from './TodoItem/TodoItem';
import classes from './TodoList.module.scss';
import { RootState } from '../../../redux/store';

export default function TodoList() {
  const selectedList = useSelector((state: RootState) => state.app.selectedList);
  const todos = useSelector((state: RootState) => state.app.todos);
  const sort = useSelector((state: RootState) => state.app.sort);

  const relevantTodos = todos.filter((todo) => {
    if (sort === 'active') return todo.listId === selectedList?.id && todo.completed === false;

    if (sort === 'completed') return todo.listId === selectedList?.id && todo.completed === true;
    return todo.listId === selectedList?.id;
  });

  return (
    <section className={classes['todo-list']}>
      {selectedList && <h2 className={classes.heading}>Folder's name: {selectedList.name}</h2>}
      <ul className={classes.list}>
        {relevantTodos.map((todo) => (
          <TodoItem key={todo.id} id={todo.id} title={todo.text} completed={todo.completed} />
        ))}
      </ul>
    </section>
  );
}
