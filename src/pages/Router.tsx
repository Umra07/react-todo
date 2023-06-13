import { Routes, Route } from 'react-router-dom';
import { routerType } from './router.types';
import pagesData from './pagesData';
import { v4 } from 'uuid';

const Router = () => {
  const pagesRoutes = pagesData.map(({ path, title, element }: routerType) => (
    <Route key={v4()} path={`/${path}`} element={element} />
  ));

  return <Routes>{pagesRoutes}</Routes>;
};

export default Router;
