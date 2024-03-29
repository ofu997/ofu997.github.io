import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaRegEnvelope } from 'react-icons/fa';
import backgroundImage2 from '../images/galaxyDust.jpg';
import backgroundImage3 from '../images/milkyWay.jpg';
import backgroundImage8 from '../images/northernlights.jpg';
import backgroundImage9 from '../images/northernlights2.jpg';
import backgroundImage4 from '../images/purplenightsky.jpg';
import backgroundImage5 from '../images/satelliteOverLand.jpg';
import backgroundImage6 from '../images/viewFromSpacecraft.jpg';
import backgroundImage from '../images/wallpaper.jpg';
import backgroundImage7 from '../images/wallpaper2.png';
import './layout.css';

const Layout = ({ children }) => {
  const [image, setImage] = useState('');
  useEffect( ()=>{
    const random=Math.floor((Math.random()*9) + 1);
    console.log(random);
    if (random===1) { setImage(backgroundImage) }
    if (random===2) { setImage(backgroundImage2) }
    if (random===3) { setImage(backgroundImage3) }
    if (random===4) { setImage(backgroundImage4) }
    if (random===5) { setImage(backgroundImage5) }
    if (random===6) { setImage(backgroundImage6) }
    if (random===7) { setImage(backgroundImage7) }
    if (random===8) { setImage(backgroundImage8) }
    if (random===9) { setImage(backgroundImage9) }
  }, []);
  return(
    <div>
      {/* |^|^| parent div */}
      {/* intro section */}
      <div className='pictureForTopSection' style={{ backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <p>&nbsp;</p>
        <div style={{ padding: '0% 10%', marginTop: 0, display: 'flex',  }}>
          <a style={{ margin: '0% 4%' }} href='#projects'><h3 className='HeaderFont'>Projects</h3></a>
          <a style={{ margin: '0% 4%' }} href='#skills'><h3 className='HeaderFont'>Skills</h3></a>
          <a style={{ margin: '0% 4%' }} href='#contact'><h3 className='HeaderFont'>Contact</h3></a>
        </div>
        <section style={{ margin: "20% 10% 0% 10%", paddingBottom: '1%' }}>
          <h2 className='HeaderFont'>
            Are you looking for a web/software developer? 
          </h2>        
          <p style={{ margin: '20% 0% 10% 0%' }} className='introduction'>
            My name is Oliver, and I'm a developer based on the West Coast. I provide value through problem solving, design, and making features come to life.
          </p>
        </section>
      </div>
      {/* projects section */}
      <section id='projects'>
        <div 
          style={{ 
            justifyContent: 'center',
            display: 'flex'
          }}
        >
          <h3 
            style={{ 
              justifyContent: 'center',
              textAlign: 'center',
              padding: '1% 2%',
              borderTop: '1px solid black',
              borderBottom: '1px solid black', 
              marginTop: '5%',
            }}
          >
            Projects
          </h3>
        </div>
        <main className='content'>
          { children }
        </main>
      </section>

      {/* skills section */}
      <section id='skills'>
        <div 
          style={{ 
            justifyContent: 'center',
            display: 'flex',
            paddingBottom: '10%',
          }}
        >
          <h3 
            style={{ 
              justifyContent: 'center',
              textAlign: 'center',
              padding: '1% 2%',
              borderTop: '1px solid black',
              borderBottom: '1px solid black', 
              marginTop: '15%',
            }}
          >
            Skills
          </h3>
        </div>      

        <div 
          style={{ 
            justifyContent: 'center',
            display: 'flex',
            marginTop: '5%',
            paddingBottom: '10%',
            flexWrap: 'wrap',
          }}
        >
          {skillBoxes.map( skillbox => 
            <SkillsContainer 
              item={skillbox}
            />
            )
          }
        </div>
      </section>
        
      {/* contact section */}
      <section id='contact'>
        <div 
          style={{ 
            justifyContent: 'center',
            display: 'flex'
          }}
        >
          <h3 id='contact'
            style={{ 
              justifyContent: 'center',
              padding: '1% 2%',
              borderTop: '1px solid black',
              borderBottom: '1px solid black', 
              marginTop: '15%',
            }}
          >
            Contact
          </h3>
    
        </div>           
        
        {/* contact icons here */}
        <div style={{ height: 250, width: '90%', margin: '20% auto 0% auto', justifyContent: 'space-around', display: 'flex' }}>
          <a href='https://github.com/ofu997' rel="noopener noreferrer" target='_blank' className='iconAnchor'><FaGithub size={35} /></a>
          <a href='mailto:ofu997@gmail.com' rel="noopener noreferrer" target='_blank' className='iconAnchor'><FaRegEnvelope size={35} /></a>
          <a href='https://linkedin.com/in/oliverfu' rel="noopener noreferrer" target='_blank' className='iconAnchor'><FaLinkedin size={35} /></a>
        </div>     
      </section>
      {/* \v/\v/ parent div */}
    </div>
  )
}

const skillBoxes = [
  {
    headline: 'Languages',
    skills: ['HTML', 'CSS', 'JavaScript', 'SQL', 'GraphQL', 'C#', 'Dart'],
  },
  {
    headline: 'Frameworks',
    skills: ['React', 'jQuery', '.NET (MVC and WebAPI)', 'Gatsby', 'NextJS', 'RedwoodJS', 'Flutter'],
  },
  {
    headline: 'Other',
    skills: ['Git', 'MS SQL Server', 'MongoDB', 'Prisma ORM', 'Geographic Information Systems', 'Visual Studio Code'],
  }
]

const SkillsContainer = (props) => {
  return (
    <div className='skillsContainer' style={{
        padding: '2%',
        borderTop: '2px solid goldenrod',
        borderBottom: '2px solid goldenrod',
      }}
    >
      <h4 style={{ textAlign: 'center' }}>{props.item.headline}</h4>
      {props.item.skills.map(item=>
        <p style={{ textAlign: 'left', marginLeft: '30%', marginTop: '5%' }}>{item}</p>
      )}
    </div>
  )
}

export default Layout; 

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */