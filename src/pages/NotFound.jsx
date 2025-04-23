import React from 'react';
import { NavLink } from 'react-router-dom';

function NotFound() {
  return (
    <div className="vh-75 d-flex flex-column justify-content-center align-items-center text-center">
      <h1 className="display-1 fw-bold">404</h1>
      <p className="lead">Looks like you’re lost in space 🌌</p>
      <NavLink to="/" className="btn btn-outline-primary mt-3">
        🏠 Back to Home
      </NavLink>
    </div>
  );
}

export default NotFound;
