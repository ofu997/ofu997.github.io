import React, { useEffect, useState } from 'react';
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
    <div className='pictureForTopSection' style={{ backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <p>&nbsp;</p>
      <div style={{ padding: '0% 10%', marginTop: 0, display: 'flex',  }}>
        <a style={{ margin: '0% 4%', textDecoration: 'none' }} href='#projects'><h3 className='HeaderFont'>Projects</h3></a>
        <a style={{ margin: '0% 4%' }} href='#skills'><h3 className='HeaderFont'>Skills</h3></a>
        <a style={{ margin: '0% 4%' }} href='#contact'><h3 className='HeaderFont'>Contact</h3></a>
      </div>
      <section style={{ margin: "20% 10% 0% 10%" }}>
        <h2 className='HeaderFont'>
        Are you looking for a web/software developer? 
        </h2>        
        <p style={{ marginTop: '20%', fontFamily: 'sans-serif' }} className='introduction'>
          My name is Oliver, and I'm a developer based on the West Coast. I provide value through problem solving, design, and making features come to life.
        </p>
        <p>&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p>
      </section>
    </div>
    <React.Fragment>
      <header className='header SectionFont'>    
        <div id='projects'>Projects</div>
      </header>
      <main className='content'>
        { children }
      </main>
      <header className='header SectionFont'>
        <div id='skills'>Skills</div>
      </header>

      <p>content</p>
      <p>content</p>
      <p>content</p>
      
      <header className='header SectionFont'>
        <div id='contact'>Contact</div>
      </header>

      <p>content</p>
      <p>content</p>
      <p>content</p>
    </React.Fragment>    
    {/* \v/\v/ parent div */}
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