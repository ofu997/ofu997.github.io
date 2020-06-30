import React, { useEffect, useState } from 'react';
import backgroundImage2 from '../images/galaxyDust.jpg';
import backgroundImage3 from '../images/milkyWay.jpg';
import backgroundImage4 from '../images/purplenightsky.jpg';
import backgroundImage5 from '../images/satelliteOverLand.jpg';
import backgroundImage6 from '../images/viewFromSpacecraft.jpg';
import backgroundImage from '../images/wallpaper.jpg';
import backgroundImage7 from '../images/wallpaper2.png';
import './layout.css';


const Layout = ({ children }) => {
  const [image, setImage] = useState('');
  useEffect( ()=>{
    const random=Math.floor((Math.random()*7) + 1);
    console.log(random);
    if (random===1) { setImage(backgroundImage) }
    if (random===2) { setImage(backgroundImage2) }
    if (random===3) { setImage(backgroundImage3) }
    if (random===4) { setImage(backgroundImage4) }
    if (random===5) { setImage(backgroundImage5) }
    if (random===6) { setImage(backgroundImage6) }
    if (random===7) { setImage(backgroundImage7) }
  });
  return(
    
  <div>
    {/* |^|^| parent div */}
    <div className='pictureForTopSection' style={{ backgroundImage: `url(${image})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
    {/* style={{ backgroundImage: `url(${backgroundImage})` }} */}
    <p>&nbsp;</p>
    <nav style={{ padding: '0% 10%', marginTop: 0, display: 'flex' }}>
      <a style={{ margin: '0% 4%' }} href='#projects'><p className='HeaderFont'>Projects</p></a>
      <a style={{ margin: '0% 4%' }} href='#skills'><p className='HeaderFont'>Skills</p></a>
      <a style={{ margin: '0% 4%' }} href='#contact'><p className='HeaderFont'>Contact</p></a>
    </nav>
      <section style={{ margin: "20% 10% 0% 10%" }}>
        <h2 className='HeaderFont'>
        Looking for a web/software developer? 
        </h2>
        
        <p style={{ marginTop: '20%', fontSize: '0.8em', fontFamily: 'sans-serif' }}>
          My name is Oliver, and I'm a developer based on the West Coast. I can provide value through problem solving, design, and making features come to life.
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