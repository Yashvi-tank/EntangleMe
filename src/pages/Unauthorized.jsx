import React from 'react';
import { NavLink } from 'react-router-dom';

function Unauthorized() {
  return (
    <div className="vh-75 d-flex flex-column justify-content-center align-items-center text-center">
      <h1 className="display-1 fw-bold">401</h1>
      <p className="lead">You don’t have permission to view this page.</p>
      <NavLink to="/login" className="btn btn-primary mt-3">
        🔑 Go Log In
      </NavLink>
    </div>
  );
}

export default Unauthorized;
