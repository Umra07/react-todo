import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import WelcomeBlock from './components/WelcomeBlock';
import TasksBlock from './components/TasksBlock';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <WelcomeBlock />,
      },
      {
        path: 'lists/:listId',
        element: <TasksBlock />,
      },
    ],
  },
]);
