import React from 'react'
import Heading from "../Components/Heading/Heading"
import Sidetitle from "../Components/Sidetitle/Sidetitle"
import { Carousel } from 'react-responsive-carousel'
import Line from '../Components/Line/Line'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./Styles/Gallery.css"
function Gallery() {
  return (
    <div className='container-fluid'>
      <div className='m-5 gallery row'>
        <Heading title="GALLERY" />
        <Line />
      </div>
      <div className="carousel-part">
        <div className="carousel">
        <Carousel showArrows={true} interval={4000} infiniteLoop={true} autoFocus={true} stopOnHover={false} autoPlay={true}>
        <div>
          <img alt='' src="https://ceconline.edu/wp-content/uploads/2022/12/1-Banner(2).png" />
        </div>
        <div>
          <img alt='' src="https://ceconline.edu/wp-content/uploads/2022/12/1-IMG-20221214-WA0053%20(1).jpg" />

        </div>
        <div>
          <img alt='' src="https://ceconline.edu/wp-content/uploads/2022/08/1-final%20ign-1.jpg" />

        </div>
        <div>
          <img alt='' src="https://ceconline.edu/wp-content/uploads/2022/07/1-pic1-01-scaled.jpeg" />

        </div>
        <div>
          <img alt='' src="https://ceconline.edu/wp-content/uploads/2022/07/1-final.png" />

        </div>
        <div>
          <img alt='' src="https://ceconline.edu/wp-content/uploads/2022/07/1-brochure_cec-1%201cec.png" />

        </div>
        <div>
          <img alt='' src="https://ceconline.edu/wp-content/uploads/2022/07/1-IMG-20200819-WA0045.jpg" />

        </div>
        
      </Carousel>
        </div>
      </div>
      <Sidetitle title="GALLERY" />
    </div>
  )
}

export default Gallery
