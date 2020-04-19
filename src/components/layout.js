import React from 'react';
import { Link } from 'gatsby';
import './layout.css' 

const Layout = ({ children }) => 
  <React.Fragment>
    <header className='header'>    
      <Link to='/'>My portfolio</Link>
    </header>
    <main className='content'>
      { children }
    </main>
  </React.Fragment>

export default Layout; 

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */