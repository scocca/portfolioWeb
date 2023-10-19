

function NavBar(){
    return(
        <navbar className="nav-main">
        <div className='navbar'>
          <div className='navbar-right'>
            <ul className='right-list'>
              <li className='list-name'>Santiago Cocca</li>
            </ul>
          </div>
          <div className='navbar-left'>
            <ul className='left-list'>
              <li className='list'>About Me</li>
              <li className='list'>Skills</li>
              <li className='list'>Working Experience</li>
              <li className='list'>Recognitions</li>
              <li className='getInTouch'>Get in Touch</li>
            </ul>
          </div>
        </div>
      </navbar>
    )
}

export {NavBar}