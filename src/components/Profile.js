

function Profile({hiim,aboutme,photos}){
    
    return(
        <div className='big-header'>
        <div className='workProfile'>
        <div className='name'>
          <h3 className="hi-im">Hi i'm</h3>
          <span className="santiago">Santiago</span>
          <span className="cocca">Cocca</span>
          <h3 className="Web-developer"> Web Developer</h3>
          {/* <img src={hiim} alt='hi i`m Santiago Cocca Web Developer'/> */}
        </div>
        <div className='profile-container'>
          <p className='work-profile-p'>As a proactive and persistent professional, I enjoy learning & teaching new things and facing challenges with determination.</p>
          <p className='work-profile-p'>A fervent believer in the value of teamwork & its power to achieve exceptional goals.</p>
          <p className='work-profile-p'>Hope to get opportunity to apply my skills and experience to make a significant contribution in workplaces and achieve ambitious goals collaboratively.</p>
        </div>
        </div>

        <div className='personal-profile'>
          <div className='about-me'>
            <div>
              <h3 className="about-me">About Me</h3>
              {/* <img src={aboutme} alt='my hobbies'/> */}
            </div>
            <div>
            <ul className='personal-list'>My Hobbies
              <li className='personal'>Ride my lognboard across new roads</li>
              <li className='personal'>Immortalize places in photographs</li>
              <li className='personal'>Enjoy time discovering new music</li>
              <li className='personal'>Spend time with my loved ones</li>
              <li className='personal'>Play some Videogames</li>
              <li className='personal'>Explore untravelled roads driving my car</li>
              <li className='personal'>Meditate & Connect with nature</li>
              <li className='personal'>Learn & teach new things</li>
            </ul>
            </div>
          </div>
          <div className='photos'>
            <img src={photos} alt='my photos'/>
          </div>
        </div>

      </div>
    )
}

export {Profile}