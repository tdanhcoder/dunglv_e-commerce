import DefaultLayout from '#layouts/Default';
import { Outlet } from 'react-router-dom';

function Root() {
  return (
    <>
      <DefaultLayout>
        <Outlet />
      </DefaultLayout>
    </>
  );
}

export default Root;
