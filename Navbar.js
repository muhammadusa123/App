import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar({ title = 'Set title here', aboutText = 'About text here', toggleTheme, theme }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{title}</a> {/* Using destructured title */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">{aboutText}</a> {/* Using destructured aboutText */}
              </li>
            </ul>

            {/* Search form */}
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>

            {/* Theme toggle button */}
            <button 
              onClick={toggleTheme} 
              className="btn ms-3"
              style={{
                backgroundColor: theme === 'light' ? '#007bff' : '#444',
                color: 'white',
                padding: '10px 20px', 
                borderRadius: '5px',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              {/* Optionally add an icon for light/dark mode */}
              {theme === 'light' ? '🌙' : '🌞'}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

// PropTypes for validation (optional but recommended)
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
  toggleTheme: PropTypes.func.isRequired, // Ensure toggleTheme function is passed
  theme: PropTypes.string.isRequired,    // Ensure theme is passed
};
