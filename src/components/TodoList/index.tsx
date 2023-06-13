import { useSelector } from 'react-redux';
import TaskInput from './AddTaskForm';

import TodoItem from './TodoItem/TodoItem';
import styles from './TodoList.module.scss';
import { RootState } from '../../features/store';

export default function TodoList() {
  const todos = useSelector((state: RootState) => state.app.todos);

  return (
    <section className="todo-list">
      <ul className={styles.list}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} id={todo.id} title={todo.text} completed={todo.completed} />
        ))}
      </ul>
      {/* <TaskInput /> */}
    </section>
  );
}
