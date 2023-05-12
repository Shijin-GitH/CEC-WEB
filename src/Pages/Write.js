import React from 'react'
import styles from "./Styles/Write.module.css"
import Heading from '../Components/Heading/Heading'


function Write() {
  return (
    <div className={styles.body}>
       <Heading title="Enquiry"/>
       <div className={styles.box}></div>
       <form>
        <div>
            <input type='text' placeholder='Name' required></input>
            <input type='email' placeholder='Email' required></input>
            <input type='number' placeholder='Phone Number' required></input>
        </div>
        <div>
            <input type='text' placeholder='Intrested Course' required></input>
        </div>
        <div>
            <textarea placeholder='Brief Description'></textarea>
        </div>
        <button type='submit' id={styles.submit} popover>Submit</button> 
        </form>
    </div>
  )
}



export default Write
