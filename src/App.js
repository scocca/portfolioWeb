import React from 'react'
import jobsData from './workData.json'
import skillsData from './skills.json'
import './App.css'
import works from './components/assets/workingDecoration.svg'
import photo1 from './components/assets/_DSC3911.JPG' 
import photo2 from './components/assets/20220711_171031.jpg'
import photo3 from './components/assets/20230128_202758.jpg'
import photo4 from './components/assets/IMG_20210924_185053.jpg'
import photo5 from './components/assets/IMG_20211024_023329.jpg'



import { NavBar } from './components/NavBar.js';
import { Profile } from './components/Profile.js';
import { WorkExperience } from './components/WorkExperience.js';
import { Skills } from './components/Skills.js'
import { Recognitions } from './components/Recognitions'
import { WhatsApp } from './components/WhatsApp'

// import { DetailExperience } from './components/DetailExperience.js';

function App() {
  
  return (
    <React.Fragment>
      <NavBar/>
      <Profile photo1={photo4} photo2={photo2} photo3={photo3} photo4={photo1} photo5={photo5}/>
      <WorkExperience works={works} jobs={jobsData}/>
      <Skills skills={skillsData}/>
      <Recognitions/>
      <WhatsApp/>
    </React.Fragment>
  )

}

export default App
