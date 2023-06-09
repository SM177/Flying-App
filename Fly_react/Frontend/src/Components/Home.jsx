import React, {useEffect} from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import fly from '../../Pic/1.mp4'

const Home = () => {
  // UseEffect to set animation duration
  useEffect(()=>{
    Aos.init({duration:2000})
  },[]);


  return (
    <div className='home flex container'>
      <div className="mainText">
        <h1 className='fw-bolder fs-1' data-aos='fade-up' data-aos-duration='2500'>Create Ever-lasting Memories With Us</h1>
      </div>

      <div data-aos='fade-down' data-aos-duration='2500' className="homeImages flex">
        <div className="videoDiv">
          <video className='video' autoPlay muted loop src={fly}>

          </video>
        </div>

        <img className='plane' src="" alt="" srcset="" />

      </div>
    </div>
    )
}

export default Home