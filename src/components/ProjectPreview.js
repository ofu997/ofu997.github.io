import { Link } from 'gatsby';
import Image from 'gatsby-image';
import React from 'react';

const ProjectPreview = ({ slug, title, shortDescription, imageData }) => 
  <div className='project-preview project-container'>
    <Link to={ `/${ slug }/` }>
      <Image fluid={ imageData } alt={ title } />
    </Link>
      <h2>
        <Link to={ `/${ slug }/` }>{ title }</Link>
      </h2>
      <p>
        { shortDescription }
      </p>
      <p>
        <Link to={ `/${ slug }/` }>View this project</Link>
      </p>
  </div>

export default ProjectPreview;