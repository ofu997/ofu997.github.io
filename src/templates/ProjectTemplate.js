import React from 'react';
import { graphql } from 'gatsby';
// import Layout from '../components/layout';
import Project from '../components/project';
// shows project in its section
// uses components/layout to show header and child, which is components/project 
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
    }
  }
`;

const ProjectTemplate = ({ data }) => {
  const project = data.projectsJson; 
  const title = project.title;
  const shortDescription = project.shortDescription;
  const description = project.description;
  const url = project.url;
  const imageData = project.image.childImageSharp.fluid; 

  return (
    // <Layout>
      <Project 
        title={ title }
        shortDescription={ shortDescription }
        description={ description }
        url={ url }
        imageData={ imageData }
      />
    // </Layout>
  )
}

export default ProjectTemplate; 

