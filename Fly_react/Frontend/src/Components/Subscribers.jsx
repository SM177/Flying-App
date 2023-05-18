import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Subscribers = () => {
  // UseEffect to set animation duration
  useEffect(()=>{
    Aos.init({duration:2000})
  },[]);

  return (
    <div className='subscribe section'>
      <div data-aos='fade-up' data-aos-duration='2500' className="sectionContainer container">
        <h2 className='fs-1 fw-bolder'>Subscribe Newsletters & get Latest News</h2>
        <div className="inputDiv flex fw-bolder  ">
          <input className='text-center fw-bolder' type="text" placeholder="Enter your Email Address" />
        </div>
          <button className='btn fw-bolder'>Subscribe</button>
      </div>

    </div>
    )
}

export default Subscribers