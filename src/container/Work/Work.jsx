import React, {useState, useEffect} from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
//import { AppWrap } from '../../'
//import { urlFor, client} from '../../'
import './Work.scss';
import images from '../../constants/images';

const Work = () => {
  // states
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([
    { name: 'photoshooting', projectLink: 'https://www.instagram.com/p/CnmZQk6qJI_/', imgUrl: images.about01, title: 'Photoshooting Cooper', description: 'Commercial shooting', tag: 'Photo' },
    { name: 'photoshooting', projectLink: 'https://www.instagram.com/p/CCbrirdpaWz/', imgUrl: images.about02, title: 'Photoshooting', description: '', tag: 'Photo' },
    { name: 'photoshooting', projectLink: 'https://www.instagram.com/p/B21yVwiI2PJ/', imgUrl: images.about07, title: 'photoshooting', description: '', tag: 'Photo' },
    { name: 'OLI Baustoffe',projectLink: 'https://www.olibaustoffe.de/', imgUrl: images.about03, title: 'OLI Baustoffe', description: 'Dachbaustoffe Lieferant', tag: 'Websites' },
    { name: 'Design', projectLink: '', imgUrl: images.about04, title: 'Coorporate Design Fix Energie', description: 'Fix Energie', tag: 'UX/UI' },
    { name: 'Design', projectLink: 'https://www.instagram.com/p/CuSMzj5MFjE/', imgUrl: images.about05, title: 'Coorporate Design Seller', description: 'Seller', tag: 'UX/UI' },
    { name: 'Design', projectLink: 'https://www.instagram.com/p/CuhFwMLssZP/', imgUrl: images.about06, title: 'UI Design', description: '', tag: 'UX/UI' },
  ]);

  // Filter works based on active filter
  const filterWorks = () => {
    if (activeFilter === 'All') {
      return works;
    } else {
      return works.filter(work => work.tag === activeFilter);
    }
  }

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
  }

  return (
    <>
      <h2 className='head-text'>
        Our creative 
        <span> Portfolio </span>
        Section
      </h2>
      <div className='app__work-filter'>
        {['All', 'Websites', 'UX/UI', 'Photo'].map((item, index) => (
          <div 
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div 
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWorks().map((work, index) => (
          <div className='app__work-item app__flex' key={index}>
            <div className='app__work-img app__flex'>
              <img src={work.imgUrl} alt={work.name}/>
              <motion.div
                whileHover={{ opacity: [0, 1]}}
                transition={{ duration: 0.25, ease: 'easeInOut', delayChildren: 0.5, staggerChildren: 0.5}}
                className='app__work-hover app__flex'
              >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tag}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  )
}

export default Work