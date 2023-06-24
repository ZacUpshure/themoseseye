import React, {useState, useEffect} from 'react'
import './About.scss';
import { motion } from 'framer-motion';
import images from '../../constants/images';

const abouts = [
  { title: 'Photography', description: 'High Res. Edited Photos', imgUrl: images.about01 },
  { title: 'Videography', description: 'Cinematic Videos', imgUrl: images.about02 },
  { title: 'Web-Development', description: 'Quality websites with React and Sass', imgUrl: images.about03 },
  { title: 'UI/UX', description: 'Corparate Design', imgUrl: images.about04 }
]

const About = () => {
  return (
    <>
      <h2 className='head-text'>
        I Know That
        <span> Good Design</span>
        <br />
        Means
        <span> Good Business</span>
      </h2>
      <div className='app__profiles'> 
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration: 0.5, type: 'tween'}}
            className='app__profile-item'
            key={abouts.title}
          >
            <img src={about.imgUrl} alt={about.title}/>
            <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
            <p className='p-text' style={{marginTop: 10}}>{about.description}</p>

          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About