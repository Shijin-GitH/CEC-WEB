import React from 'react'
import "./Styles/Contact.css"
import Sidetitle from '../Components/Sidetitle/Sidetitle'
import Heading from '../Components/Heading/Heading'
import Line from '../Components/Line/Line'
function Contacts() {
  return (
    <div className='container-fluid'>
      <div className='m-4'>
        <div className='row contact-main'>
        <Heading title='CONTACT US' />
        <Line />
        </div>
         <div className='row row-cols-1 row-cols-lg-2 my-5 content-main '>
          <div className='col  m-3 content'>
            <h2><span>College of Engineering Chengannur</span><br /> 
            <span>Alappuzha Kerala</span><br />
            <span>Pin:689121</span><br />
            <span>Ph: <a href="tel:+91-479-2455125">+91-479-2455125</a></span><br />
            <span>Email: <a href="mailto:principal@ceconline.edu">principal@ceconline.edu</a></span>
            </h2>
          </div>
          <div className='col my-3 map'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5229.627861662749!2d76.61570370341182!3d9.317201373845165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0622ea027eb08f%3A0x41105b207db821c6!2sCollege%20of%20Engineering%20Chengannur!5e0!3m2!1sen!2sin!4v1681872299096!5m2!1sen!2sin"
           width="100%"
            height="400px"
             style={{border:"0",borderRadius:"9px"}}
             allowfullscreen="true"
             
              referrerpolicy="no-referrer-when-downgrade" title='map'>

              </iframe>
          </div>
         </div>
      </div>
      <Sidetitle title="CONTACT US"/>
      
      </div>
  
  )
}

export default Contacts
