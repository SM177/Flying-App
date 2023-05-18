import React,{useEffect} from 'react'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { RiAccountPinCircleLine } from 'react-icons/ri'
import { RxCalendar } from 'react-icons/rx'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Search = () => {
    // UseEffect to set animation duration
    useEffect(()=>{
      Aos.init({duration:2000})
    },[]);

  return (
    <div className='search container section '>
      <div data-aos='fade-up' data-aos-duration='2500' className="sectionContainer grid">

        <div className="btns flex shadow ">
          <div className="singleBtn">
            <span>Economy Class</span>
          </div>

          <div className="singleBtn">
            <span>Bussiness Class</span>
          </div>
          <div className="singleBtn">
            <span>First Class</span>
          </div>
          </div>
          {/* search bar */}
          <div className="searchInputs flex ">
            {/* Location searchbar */}
            <div className="singleInput flex">
              <div className="iconDiv">
                <HiOutlineLocationMarker className='icon' />
              </div>
              <div className="texts">
                <h4>Location</h4>
                <input type="text" placeholder='Where do want to go?' />
              </div>
            </div>

            {/* Travelers searchbar */}
            <div className="singleInput flex">
              <div className="iconDiv">
                <RiAccountPinCircleLine className='icon' />
              </div>
              <div className="texts">
                <h4>Travelers</h4>
                <input type="text" placeholder='Add Flight Members' />
              </div>
            </div>

            {/* Check In searchbar */}
            <div className="singleInput flex">
              <div className="iconDiv">
                <RxCalendar className='icon' />
              </div>
              <div className="texts">
                <h4>Check In</h4>
                <input type="text" placeholder='Add date' />
              </div>
            </div>

            {/* Check In searchbar */}
            <div className="singleInput flex">
              <div className="iconDiv">
                <RxCalendar className='icon' />
              </div>
              <div className="texts">
                <h4>Check Out</h4>
                <input type="text" placeholder='Add date' />
              </div>
            </div>
          </div>

          <button style={{textAlign:'center',justifyContent:'center'}} className="btn btnBlock flex fw-bolder text-dark fs-4">Search Flight</button>

        </div>
      </div>

  )
}

export default Search