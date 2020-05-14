import { Link } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';
const Project = ({ title, description, url, secondImageData }) => {
  return (
  <div className='project'>
    <h1>{ title }</h1>
    <div style={{display: "flex"}}>
      <Image fluid={ secondImageData } alt={ title } style={{ minWidth: '55%' }} />
      <p style={{ marginLeft: '5%'}}>{ description }</p>
    </div>
      <p>
        <a href={ url } target='_blank' rel='noopener noreferrer'>View this project online &rarr;</a>
      </p>
      <p>
        <Link to='/'>&larr; Home</Link>
      </p>
  </div>
  );
};

export default Project; 


