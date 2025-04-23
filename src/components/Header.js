import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: 'var(--nav-bg)' }}
    >
      <div className="container">
      <NavLink className="navbar-brand fw-bold" to="/">
+          ⚛️ EntangleMe
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto align-items-center">
            {['Home','Login','Sign Up'].map((label, i) => (
              <li className="nav-item" key={i}>
                <NavLink className="nav-link" to={label==='Home'?'/':`/${label.toLowerCase().replace(' ','')}`}>
                  {label}
                </NavLink>
              </li>
            ))}
            <li className="nav-item ms-3">
              <button className="btn btn-outline-light" onClick={toggleTheme}>
                {theme==='light'?'🌙':'☀️'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
