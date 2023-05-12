import React from 'react'
import"./Footer.css"
import { BsFacebook, BsGlobe2, BsInstagram } from "react-icons/bs"
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer-main'>
        <div className='row row-cols-1 row-cols-lg-5 '>
           <div className='col m-1'>
           <h3 className='footer-heading'>CEC </h3>
            <h6><a href='/' className='nav-link'>HOME</a></h6>
            <h6><a href='/about' className='nav-link'>ABOUT US </a></h6>
            <h6><a href='https://ceconline.edu/admission/btech_admissions/' className='nav-link'>ADMISSION</a></h6>
           </div>
           <div className='col m-1'>
           <h3 className='footer-heading'>ABOUT</h3>
            <h6><a href='https://ceconline.edu/events/' className='nav-link'>EVENTS</a></h6>
            <h6><a href='https://ceconline.edu/news/' className='nav-link'>NEWS</a></h6>
            <h6><a href='https://ceconline.edu/academics/departments/' className='nav-link'>DEPARTMENTS</a></h6>
            
           </div>
           
           <div className='col m-1'>
           <h3 className='footer-heading'>ENQUIRY</h3>
            <h6><a href='/contacts' className='nav-link'>CONTACT US</a></h6>
            <h6><a href='/write' className='nav-link'>WRITE A MAIL</a></h6>
            <h6><a href='/contacts' className='nav-link'>LOCATION</a></h6>
           </div>

           <div className='col m-1'>
        <div className='bottom1'>
        <div className='bot1 nav-link'><a href="https://www.instagram.com/cec_chengannur"><BsInstagram/></a></div>
        <div className='bot1 nav-link'><a href="https://www.facebook.com/CEConline/"><BsFacebook/></a></div> 
        <div className='bot1 nav-link'><a href="https://www.linkedin.com/school/college-of-engineering-chengannur/"><FaLinkedinIn/></a></div> 
        <div className='bot1 nav-link'><a href="https://ceconline.edu/"><BsGlobe2/></a></div>  
        </div>
      </div>
    </div>
 </div>
            
    

   
  )
}

export default Footer
