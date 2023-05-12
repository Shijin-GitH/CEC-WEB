import React from 'react'
import styles from "./Styles/About.module.css"
import Heading from '../Components/Heading/Heading'
function About() {
  return (
    <div className={styles.body}>
       <Heading title="ABOUT"/>
       <div className={styles.box}></div>
      <div className={styles.content}><p>The College of Engineering Chengannur, an institution of excellence in the domain of technical education, was established in the year 1993, with a vision to create engineers having the drive, skill, and confidence to become the pioneers of tomorrow. The college functions with the highest order of discipline so that all students are trained to excel in highly professional environments.

The college was set up under the auspices of the Institute of Human Resources and Development (IHRD) and is recognized by the All India Council for Technical Education (AICTE), New Delhi. It is affiliated to APJ Abdul Kalam Technological University (KTU).</p></div>

      
    </div>
  )
}

export default About
