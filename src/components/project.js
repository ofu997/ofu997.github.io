import { Link } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';
const Project = ({ title, description, url, secondImageData }) => {
  return (
  <div className='project'>

    <h2 style={{ margin: '10% 0% 2% 10%' }}>{ title }</h2>

    <div style={{ margin: '5%' }}>
      <p>
        <a href={ url } target='_blank' rel='noopener noreferrer'>View this project online &rarr;</a>
      </p>
      <p>
        <Link to='/'>&larr; Home</Link>
      </p>
      <p>{ description }</p>
    </div>

    <div  className='projectPageImageContainer'>
      <Image fluid={ secondImageData } alt={ title } style={{ maxHeight: '25%' }} />
    </div>      
  </div>
  );
};

export default Project; 


