import React from 'react'
import './Navbar.css'
import logo from './YOUTUBE.png'
import SearchBar from './SearchBar/SearchBar'
import { RiVideoAddLine } from 'react-icons/ri'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { BiUserCircle } from 'react-icons/bi'

function Navbar() {
    // const currentUser = null;
    const currentUser = {
        result: {
            email: "sumit@gmail.com",
            joinedOn: "2022-07-15T09:57:23.489Z"
        }
    }
    return (
        <div className='container_Navbar'>
            <div className="Burger_Logo_Navbar">
                <div className="burger">
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <div className='logo_div_Navbar'>
                    <img src={logo} alt="" />
                    <p className='logo_title_Navbar'>YouTube</p>
                </div>
            </div>
            <SearchBar />
            <RiVideoAddLine size={22} className={"vid_bell_Navbar"} />
            <div className="apps_Box">
                <p className='appBox'></p>
                <p className='appBox'></p>
                <p className='appBox'></p>
                <p className='appBox'></p>
                <p className='appBox'></p>
                <p className='appBox'></p>
                <p className='appBox'></p>
                <p className='appBox'></p>
                <p className='appBox'></p>
                <p className='appBox'></p>
                <p className='appBox'></p>
                <p className='appBox'></p>
            </div>
            <IoMdNotificationsOutline size={22} className={'vid_bell_Navbar'} />
            {currentUser ?
                <>
                    <div className='channel_logo_App'>
                        <p className='fstChar_logo_App'>
                            {currentUser?.result.name ?
                                (<>{currentUser?.result.name.charAt(0).toUpperCase()}</>)
                                :
                                (<>{currentUser?.result.email.charAt(0).toUpperCase()}</>)}
                        </p>
                    </div>
                </>
                : <div className="Auth_cont_Navbar">
                    <p className="Auth_Btn"><BiUserCircle size={22} />
                        <b>Sign in</b>
                    </p>
                </div>}
        </div>
    )
}

export default Navbar
