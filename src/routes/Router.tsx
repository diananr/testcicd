import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import HomePage from '../pages/home/HomePage';
import UsersPage from '../pages/users/UsersPage';
import SettingsPage from '../pages/settings/SettingsPage';
import { AppRoutes } from '../constants/routes.constants';

const Router: React.FC = () => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route
          path={AppRoutes.Home}
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path={AppRoutes.Users}
          element={
            <Layout>
              <UsersPage />
            </Layout>
          }
        />
        <Route
          path={AppRoutes.Settings}
          element={
            <Layout>
              <SettingsPage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
