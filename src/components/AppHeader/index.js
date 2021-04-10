import React from 'react'
import logo from '../../assets/logo.svg'
import github from '../../assets/github.svg'

const AppHeader = (props) => {
  return (
    <header className='app-header'>
      <div className='app-title-wrapper'>
        <div className='app-title-wrapper'>
          <div className='app-left-nav'>
            <img src={logo} className='app-logo' alt='logo' />
            <div className='app-title-text'>
              <h1 className='app-title'>Netlify + Fauna DB</h1>
              <p className='app-intro'>
                Using FaunaDB & Netlify functions
              </p>
            </div>
          </div>
        </div>
        <div className='deploy-button-wrapper'>
          <div className='view-src'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/netlify/netlify-faunadb-example'>
              <img className='github-icon' src={github} alt='view repo on github' />
              View the source Luke
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AppHeader
