import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Layout from "../components/layout";
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
          shortDescription
          description
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
    }
  }    
`);

  const projects = data.allProjectsJson.edges;

  return (
    <Layout>
      <div 
        style={{ 
          display: 'flex', 
          justifyContent: 'space-around', 
          flexWrap: 'wrap-reverse', 
          flexDirection: 'row-reverse',
          margin: '0 auto',
          width: '100%',
        }}
      >
        { 
          projects.map(({ node: project }) => {
            const { title, shortDescription, slug } = project;
            const imageData = project.image.childImageSharp.fluid; 
            const secondImageData = project.secondImage.childImageSharp.fluid;           
            return (
              <ProjectPreview 
                title={ title }
                shortDescription={ shortDescription }
                imageData={ imageData }
                secondImageData={ secondImageData }
                slug={ slug }
                key={ title }
              />
            )
          })
        }
      </div>
    </Layout>
  )

}

// index uses components/ProjectPreview to show project sections
// gatsby-node uses templates/ProjectTemplate, which uses components/project to show project page


