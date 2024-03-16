import classNames from 'classnames';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar:FC = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            to="/"
            className={
              ({ isActive }) => classNames(
                'navbar-item',
                { 'is-active': isActive },
              )
            }
          >
            Загальне
          </NavLink>

          <NavLink
            className={
              ({ isActive }) => classNames(
                'navbar-item',
                { 'is-active': isActive },
              )
            }
            to="/tabs"
          >
            Інформаційна система
          </NavLink>

          <NavLink
            to="/clasification"
            className={
              ({ isActive }) => classNames(
                'navbar-item',
                { 'is-active': isActive },
              )
            }
          >
            Класифікація
          </NavLink>
          <NavLink
            to="/map"
            className={
              ({ isActive }) => classNames(
                'navbar-item',
                { 'is-active': isActive },
              )
            }
          >
            Інтелект карта
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
