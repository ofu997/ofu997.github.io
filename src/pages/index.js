import React from "react"
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout"
import ProjectPreview from '../components/ProjectPreview'; 

export default () => {
  const data = useStaticQuery(graphql`
  {
    allProjectsJson {
      edges {
        node {
          slug
          title
          url
          description
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          } 
        }
      }
    }
  }    
`);

  const projects = data.allProjectsJson.edges;

  return (
    <Layout>
      { 
        projects.map(({ node: project }) => {
          const { title } = project;
          const { description } = project; 
          const { slug } = project;
          const imageData = project.image.childImageSharp.fluid; 
          
          return (
            <ProjectPreview 
              title={ title }
              description={ description }
              imageData={ imageData }
              slug={ slug }
              key={ title }
            />
          )
        })
      }
    </Layout>
  )
}

// index uses components/ProjectPreview to show project sections
// gatsby-node uses templates/ProjectTemplate, which uses components/project to show project section


