import React from 'react';

function Footer() {
  return (
    <footer
      className="text-center text-white py-3 mt-auto"
      style={{ backgroundColor: 'var(--nav-bg)' }}
    >
      <div className="container">
      © {new Date().getFullYear()} EntangleMe Inc. 🚀
      </div>
    </footer>
  );
}

export default Footer;
