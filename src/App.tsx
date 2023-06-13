import TodoList from './components/TodoList';
import Filters from './components/Filters';
import TodoSidebar from './components/TodoSidebar';
import styles from './styles/App.module.scss';
import TodoInput from './components/TodoInput';

function App() {
  return (
    <div className={styles.app}>
      <h1>Todos</h1>
      <TodoSidebar />
      <TodoInput />
      <TodoList />
      <Filters />
    </div>
  );
}

export default App;
