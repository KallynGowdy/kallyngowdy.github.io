import React from 'react'
import { Link } from 'gatsby'
import posed from 'react-pose';
import './header.css';

const Header = ({ siteTitle, className }) => (
  <div className="top-bar-container">
    <div className={`top-bar ${className || ''}`}>
      <h1 className="top-bar-header top-bar-link">
        <Link exact to="/" activeClassName="active">
          {siteTitle}
        </Link>
      </h1>
      <div className="top-bar-end">
        <h2 className="top-bar-link">
          <Link exact to="/about" activeClassName="active">
            About
          </Link>
        </h2>
      </div>
    </div>
  </div>
)

export default Header
