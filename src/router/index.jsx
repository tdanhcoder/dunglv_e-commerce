import Root from '#pages';
import HomePage from '#pages/Home';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Root />}>
        <Route index element={<HomePage />} />
      </Route>
    </>,
  ),
);

export default router;
