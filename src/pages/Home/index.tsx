import { useState } from 'react';

import CustomInput from '../../components/CustomInput';
import Filters from '../../components/Filters';
import Modal from '../../components/Modal';
import TodoList from '../../components/TodoList';
import TodoSidebar from '../../components/TodoSidebar';
import CustomLogo from '../../components/UI/CustomLogo';

import styles from '../../styles/App.module.scss';
import CustomButton from '../../components/UI/CustomButton';

const Home = () => {
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);

  return (
    <div className={styles.app}>
      {modalIsVisible && <Modal setModalIsVisible={setModalIsVisible} />}
      <CustomLogo />
      <TodoSidebar />
      <CustomInput />
      <TodoList />
      <CustomButton onClick={() => setModalIsVisible((prevState) => !prevState)} />
      <Filters />
    </div>
  );
};

export default Home;
