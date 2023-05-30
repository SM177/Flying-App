import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Lounge = () => {
  // UseEffect to set animation duration
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, []);

  return (
    <div className='lounge container section'>
      <div className="sectionContainer grid">
        <div data-aos='fade-left' data-aos-duration='2500' className="imgDiv">
          <img src="https://images.unsplash.com/photo-1540339832862-474599807836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="" />
        </div>

        <div className="textDiv">
          <h2 data-aos='fade-down' data-aos-duration='2500'>Unaccompained Minor Lounge</h2>
          <div className="grids grid">
            <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
              <span className='gridTitle'>
                Help through the airport
              </span>
              <p>
                You can also call airlines from your phone and book a flight ticket
                to one of your favorite destinations.
              </p>
            </div>

            <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
              <span className='gridTitle'>
                Priority Boarding
              </span>
              <p>
                You can also call airlines from your phone and book a flight ticket
                to one of your favorite destinations.
              </p>
            </div>

            <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
              <span className='gridTitle'>
                Care on the flight
              </span>
              <p>
                You can also call airlines from your phone and book a flight ticket
                to one of your favorite destinations.
              </p>
            </div>

            <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
              <span className='gridTitle'>
                Chauffeur-drive service
              </span>
              <p>
                You can also call airlines from your phone and book a flight ticket
                to one of your favorite destinations.
              </p>
            </div>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Lounge