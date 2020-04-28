import React from 'react';
import { graphql } from 'gatsby';
import Project from '../components/project';
export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      shortDescription
      description
      url
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      secondImage {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }      
    }
  }
`;

const ProjectTemplate = ({ data }) => {
  const project = data.projectsJson; 
  const { title, description, url } = project; 
  const secondImageData = project.secondImage.childImageSharp.fluid; 

  return (
    <Project 
      title={ title }
      description={ description }
      url={ url }
      secondImageData={ secondImageData }
    />
  )
}

export default ProjectTemplate; 

