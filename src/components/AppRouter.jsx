import React, { useContext } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';
import { publicRoutes, routes } from '../router/router';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext)

  if (isLoading) {
    return <Loader />
  }

  return (
    isAuth
      ?
      <Routes>
        {routes.map(route =>
          <Route exact={route.exact}
            path={route.path}
            element={route.element}
            key={route.path}
          />
        )}
      </Routes>
      :
      <Routes>
        {publicRoutes.map(route =>
          <Route exact={route.exact}
            path='*'
            element={route.element}
            key={route.path}
          />
        )}
      </Routes>
  );
}

export default AppRouter;