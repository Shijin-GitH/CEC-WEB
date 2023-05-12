import React from 'react'
import "./Styles/Home.css"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Home() {

  return (
    <div className='home'>
      <div className="homebody">
        <div className='container-fluid mid'>
          <h1 className='heading1 row'>
            <span >COLLEGE OF</span><br />
            <span className=' col-lg-8 col-sm-12'>ENGINEERING</span>
            <span className='span1  col-lg-5 col-sm-12'>CHENGANNUR</span>
          </h1>
          <h3 className='subheading'>
            <span>Managed By IHRD</span><br /></h3>
        </div>

      </div>
      <div className='container-fluid'>
        <div className="row">
          <div className='col-lg-12'>
            <div className="m-v-box m-v-box-1">
              <div>
              <h1>MISSION</h1>
              </div>
              <ul>
                <li>To impart engineering education that enables the students to design, develop and maintain systems, products and process for the society utilizing the evolving technology.</li>
                <li>To orient the students for professional success, critical thinking and equity</li>
                <li>To inculcate the students with entrepreneurial skills, ethical and social values</li>
              </ul>
            </div>
          </div>
         <div className="col-lg-12">
         <div className="m-v-box">
            <div>
            <h1>VISION</h1>
            </div>
            <p>
            To emerge as an institution of excellence that imparts knowledge through education, learning, and research for the inclusive development of society.            </p>
          </div>
         </div>
         <div className='col-lg-12'>
            <div className="m-v-box m-v-box-2">
              <div>
              <h1>NOTIFICATIONS</h1>
              </div>
              <ul>
                <li>The admission process for the year 2023 – 24 - <a href="https://ceconline.edu/wpdata/admission/Admission%202023.pdf">Notice</a></li>
                <li>Exam Registration to B.Tech S4 (S,FE) Exam May 2023 (2015 Scheme) <br></br> <a href="https://ceconline.edu/wpdata/exam/1-2899-2022-B.Tech%20S4%20(S,FE)%20Exam%20May%202023%20(2015%20Scheme).pdf">Notice</a> &emsp; <a href="https://ceconline.edu/wpdata/account.pdf">Account Details</a> &emsp; <a href="https://forms.gle/ewCSTRP7UyNGbbwE7">Registration</a></li>
                <li>Exam Registration to B.Tech S6 (S) Exam May 2023 (2019 Scheme)-supplementary <br></br> <a href="https://ceconline.edu/wpdata/B.Tech%20S6(S)%20Exam%20May%202023%20(2019%20Scheme)%20-%20%20Supplementary.pdf">Notice</a> &emsp; <a href="https://ceconline.edu/wpdata/account.pdf">Account Details</a> &emsp; <a href="https://forms.gle/wAk385p6eMtf4cuP8">Registration</a></li>
                <li>Applications are invited for various free vocational courses at IHRD - <a href="https://ceconline.edu/wpdata/Short%20term%20course.pdf">Notice</a></li>
                <li>Interview for Guest ( faculty & supporting staff) 2022 – 2023<br></br><a href="https://ceconline.edu/wpdata/guest/interview-eng.pdf">Asst.Professor-English</a> &emsp; <a href="https://ceconline.edu/wpdata/guest/tradesman-me.pdf">Tradesman-Fitter- Sheet Metal</a> &emsp; <a href="https://ceconline.edu/wpdata/guest/tradesman-civil-welder.pdf">Tradesman-Welder</a> &emsp; <a href="https://ceconline.edu/wpdata/guest/guest-cs.pdf">Asst.Professor-Computer Science</a><br></br><a href="https://ceconline.edu/wpdata/guest/guest-cs.pdf">Tradesman-Computer Science</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home
