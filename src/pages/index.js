import React from "react"
// import { Link } from "gatsby"
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
    { projects.map(({ node: project }) => {
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
      />
      )
    })}
  </Layout>
  )
}


// import Image from "../components/image"
// import SEO from "../components/seo"

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link>
//   </Layout>
// )

// export default IndexPage