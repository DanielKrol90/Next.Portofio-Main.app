import React from 'react'

import { images } from '../../constants'

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={images.logo} alt="logo"/>
      </div>
      <ul>
        {['Strona Głóna', 'O Mnie', 'Praca', 'Umiejętności', 'Kontakt' ].map((item) => (
          <li key={`link-${item}`}>
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