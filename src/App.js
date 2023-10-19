import React from 'react'
// import jobsData from './workData.json'
import './App.css'
import hiim from './components/assets/hi im.svg'
import aboutme from './components/assets/About Me.svg'
import photos from './components/assets/photospg.png'
import works from './components/assets/workingDecoration.svg'
import blur from './components/assets/blur.svg'
import bcircle from './components/assets/bigCircle.svg'


import { NavBar } from './components/NavBar.js';
import { Profile } from './components/Profile.js';
import { WorkExperience } from './components/WorkExperience.js';
// import { DetailExperience } from './components/DetailExperience.js';

function App() {
  
  return (
    <React.Fragment>
      <NavBar/>
      <Profile hiim={hiim} aboutme={aboutme} photos={photos}/>
      <WorkExperience works={works} blur={blur} bCircle={bcircle}/>
        {/* {jobsData.map((data, index) => (
          <DetailExperience key={index} {...data} />
        ))}  */}
    </React.Fragment>
  )

}

export default App
