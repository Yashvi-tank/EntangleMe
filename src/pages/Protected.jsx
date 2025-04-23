// src/pages/Protected.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Protected() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/protected')
      .then(res => {
        if (res.status === 401) {
          // not authorized—kick them to the 401 page
          navigate('/unauthorized');
          return;
        }
        return res.json();
      })
      .then(json => {
        if (json) setData(json);
      })
      .catch(err => {
        console.error(err);
      });
  }, [navigate]);

  if (!data) {
    return <p>Loading protected data…</p>;
  }

  return (
    <div className="container">
      <h2>Protected Data</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Protected;
