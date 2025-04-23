import React from 'react';

function Signup() {
  return (
    <div className="row justify-content-center">
      <div className="col-md-6 col-lg-4">
        <h2 className="mb-4 text-center">📝 Sign Up</h2>
        <div className="card shadow-sm">
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" required />
              </div>
              <button type="submit" className="btn btn-success w-100">
                🎉 Create Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
