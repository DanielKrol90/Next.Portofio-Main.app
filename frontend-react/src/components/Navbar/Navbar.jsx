import React from 'react'

import { images } from '../../constants'

const Navbar = () => {
  return (
    <nav className='app__navbar'>
      <div className='app_navbar-logo'>
        <img src={images.logo} alt="logo"/>
      </div>
      <ul className='app__navbar-links'>
        {['Strona Głóna', 'O Mnie', 'Praca', 'Umiejętności', 'Kontakt' ].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div>
              <a href={`#${item}`}>{item}</a>
            </div>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar