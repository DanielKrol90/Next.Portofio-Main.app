import React, {useState, useEffect} from 'react'
import { motion } from 'framer-motion'

import './About.css'

const abouts = [
  {title: 'Rozwój strony internetowej', description: 'Rozwój obecnie posiadanej strony internetowej', imgUrl: ''},
  {title: 'Tworzenie od zera, nowej strony internetowej', description: 'Zgodnie z pomysłem i oczekiwaniem klienta, tworzę od zera nową stronę internetową', imgUrl: ''},
  {title: 'Poprawki i rozwój strony internetowej', description: 'Rozwój,ulepszenie oraz wprowadzenie poprawek do istniejącej strony internetowej', imgUrl: ''},
]

const About = () => {
  return (
    <>
    <h2 className="head-text">
      Dobrze stworzona
      <span >Strona internetowa Firmy</span>
      <br/>
      oznacza
      <span >lepszą sprzedaż produkt oraz więcej klientów</span>
    </h2>

    <div className="app_profiles">
      {abouts.maps((about, index) => (
        <motion.div
        whileInView={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5, type: 'tween'}}
        className='app__profile-item'
        key={about.title + index}
        >
          <img src={about.imgIrl} alt={about.title}/>
          <h2 className="bolt-text" style={{ marginTop: 20 }}>{about.title}</h2>
          <p className="p-text"></p>


        </motion.div>
      ))}
    </div>

    </>
  )
}

export default About