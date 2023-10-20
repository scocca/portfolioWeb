import React from 'react'
import jobsData from './workData.json'
import skillsData from './skills.json'
import './App.css'
import hiim from './components/assets/hi im.svg'
import aboutme from './components/assets/About Me.svg'
import photos from './components/assets/photospg.png'
import works from './components/assets/workingDecoration.svg'



import { NavBar } from './components/NavBar.js';
import { Profile } from './components/Profile.js';
import { WorkExperience } from './components/WorkExperience.js';
import { Skills } from './components/Skills.js'
import { Recognitions } from './components/Recognitions'

// import { DetailExperience } from './components/DetailExperience.js';

function App() {
  
  return (
    <React.Fragment>
      <NavBar/>
      <Profile hiim={hiim} aboutme={aboutme} photos={photos}/>
      <WorkExperience works={works} jobs={jobsData}/>
      <Skills skills={skillsData}/>
      <Recognitions/>
    </React.Fragment>
  )

}

export default App
