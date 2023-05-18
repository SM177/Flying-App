import React, { useState,useEffect } from 'react'
import {SiConsul} from 'react-icons/si'
import {BsPhoneVibrate} from 'react-icons/bs'
import {AiOutlineGlobal} from 'react-icons/ai'
import {CgMenuGridO} from 'react-icons/cg'
import Plane from '../../Pic/plane1.png'


const Navbar = () => {

    const [active, setActive] = useState('navBarMenu');
    const showNavBar = () => {
        setActive('navBarMenu showNavBar')
    }
    const removeNavBar = () => {
        setActive('navBarMenu')
    }
    const [noBg, setAddBg] = useState('navBarTwo');
    const setAddBgColor = () => {
        if(window.scrollY >= 10){
            setAddBg('navBarTwo navbar_With_Bg')
        }
        else{
            setAddBg('navBarTwo')
        }
    }

    window.addEventListener('scroll', setAddBgColor)
    

    return (
        <div className='navBar flex'>
            <div className="navBarOne flex">
                <div>
                <SiConsul className='icon text-dark '/>
                </div>
                <div className="none flex">
                    <li className='flex'><BsPhoneVibrate className='icon'/>Support</li>
                    <li className='flex'><AiOutlineGlobal className='icon'/>Languages</li>
                </div>
                <div className="atb flex">
                    <span className='text-success'>Sign In</span>
                    <span className='text-danger'>Sign Out</span>

                </div>
            </div>

            <div className={noBg}>
                <div className="logoDiv">
                    <img className='Logo' src={Plane} alt="" srcset="" />
                </div>

                <div className={active}>
                    <ul className="menu flex fw-bolder">
                        <li onClick={removeNavBar} className='listItem'>Home</li>
                        <li onClick={removeNavBar} className='listItem'>About</li>
                        <li onClick={removeNavBar} className='listItem'>Offers</li>
                        <li onClick={removeNavBar} className='listItem'>Seats</li>
                        <li onClick={removeNavBar} className='listItem'>Destinations</li>
                    </ul>
                    <button onClick={removeNavBar} className="btn flex btnOne">
                        Contact
                    </button>
                    </div>
                    <button className="btn flex btnTwo">
                        Contact
                    </button>
                <div onClick={showNavBar} className='toggleIcon'>
                    <CgMenuGridO  className='icon'/>
                </div>

            </div>
        </div>
    )
}

export default Navbar