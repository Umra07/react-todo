import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './styles/App.module.scss';
import Modal from './components/Modal';
import CustomLogo from './components/UI/CustomLogo';
import TodoSidebar from './components/TodoSidebar';
import CustomButton from './components/UI/CustomButton';
import Filters from './components/Filters';

function App() {
  const [modalIsVisible, setModalIsVisible] = useState<boolean>(false);

  return (
    <div className={styles.app}>
      {modalIsVisible && <Modal setModalIsVisible={setModalIsVisible} />}
      <CustomLogo />
      <TodoSidebar />
      <Outlet />
      <CustomButton onClick={() => setModalIsVisible((prevState) => !prevState)} />
      <Filters />
    </div>
  );
}

export default App;
