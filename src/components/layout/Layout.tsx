import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../constants/routes.constants';
import './layout.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const { children } = props;
  const [activePath, setActivePath] = useState<string | null>(null);
  const navigate = useNavigate();

  const goTo = (route: AppRoutes) => {
    navigate(route);
  };

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, [window.location.pathname]);

  return (
    <section className="layout">
      <nav className="layout__nav">
        <a
          className={`navItem ${
            activePath === AppRoutes.Home ? 'navItem--active' : ''
          }`}
          onClick={() => {
            goTo(AppRoutes.Home);
          }}
        >
          Home
        </a>
        <a
          className={`navItem ${
            activePath === AppRoutes.Users ? 'navItem--active' : ''
          }`}
          onClick={() => {
            goTo(AppRoutes.Users);
          }}
        >
          Users
        </a>
        <a
          className={`navItem ${
            activePath === AppRoutes.Settings ? 'navItem--active' : ''
          }`}
          onClick={() => {
            goTo(AppRoutes.Settings);
          }}
        >
          Settings
        </a>
      </nav>
      <main className="layout__main">{children}</main>
    </section>
  );
};

export default Layout;
