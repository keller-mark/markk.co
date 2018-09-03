import React, { Component } from 'react';
import Link from 'gatsby-link';
import './header.css';

const Header = ({ siteTitle }) => (
  <div className="header">
    <div className="wrap">
      <Link to="/" className="title">{ siteTitle }</Link>
      <div className="header-right">
        <span>Student at the University of Maryland</span>
      </div>
    </div>
  </div>
)

export default Header;
