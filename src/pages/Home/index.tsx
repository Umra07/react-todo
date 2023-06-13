import CustomInput from '../../components/CustomInput';
import Filters from '../../components/Filters';
import TodoList from '../../components/TodoList';
import TodoSidebar from '../../components/TodoSidebar';
import CustomLogo from '../../components/UI/CustomLogo';

import styles from '../../styles/App.module.scss';

const Home = () => {
  return (
    <div className={styles.app}>
      <CustomLogo />
      <TodoSidebar />
      <CustomInput />
      <TodoList />
      <Filters />
    </div>
  );
};

export default Home;
