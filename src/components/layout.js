import React from 'react';
import './layout.css';

const Layout = ({ children }) => 
  <div>
    {/* |^|^| parent div */}
    <h1 className='HeaderFont'>
    Looking for a web/software developer? 
    </h1>
    <p>I'm a programmer based on the West Coast. I can provide value through problem solving, design, and making features come to life.</p>
    <React.Fragment>
      <header className='header SectionFont'>    
        Projects
      </header>
      {/* <h4 className='SectionFont'>Projects</h4> */}
      <main className='content'>
        { children }
      </main>
      <header className='header SectionFont'>
        Skills
      </header>

      <p>content</p>
      <p>content</p>
      <p>content</p>
      
      <header className='header SectionFont'>
        Contact
      </header>

      <p>content</p>
      <p>content</p>
      <p>content</p>
    </React.Fragment>    
    {/* \v/\v/ parent div */}
  </div>


export default Layout; 

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */