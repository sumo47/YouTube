import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from './YOUTUBE.png'
import SearchBar from './SearchBar/SearchBar'
import { RiVideoAddLine } from 'react-icons/ri'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { BiUserCircle } from 'react-icons/bi'
import { GoogleLogin } from "react-google-login";
import { gapi } from 'gapi-script'
import { login } from '../../actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import Auth from '../../pages/Auth/Auth'

function Navbar({ toggleDrawer, setEditCreateChanelBtn }) {
    const [AuthBtn, setAuthBtn] = useState(false)
    // const currentUser = null;/
    // const currentUser = {
    //     result: {
    //         email: "sumokhan76342@gmail.com",
    //         joinedOn: "2022-07-15T09:57:23.489Z"
    //     }
    // };
    const currentUser = useSelector(state => state.currentUserReducer)
    console.log(currentUser)
    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: "275676399174-b3h7agfuofkjp4h0qlkj86g145dbvmdg.apps.googleusercontent.com",
                scope: 'email',
            })
        }
        gapi.load('client:auth2', start)
    }, [])

    const dispatch = useDispatch()

    const onSuccess = (response) => {
        const Email = response?.profileObj.email;
        console.log(response?.profileObj) //
        dispatch(login({ email: Email }))
    }
    const onFailure = (response) => {
        console.log("Failed", response)
    }

    return (
        <>
            <div className='container_Navbar' onClick={() => toggleDrawer()}>
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
                        <div className='channel_logo_App' onClick={()=>setAuthBtn(true)}>
                            <p className='fstChar_logo_App'>
                                {currentUser?.result.name ?
                                    (<>{currentUser?.result.name.charAt(0).toUpperCase()}</>)
                                    :
                                    (<>{currentUser?.result.email.charAt(0).toUpperCase()}</>)}
                            </p>
                        </div>
                    </>
                    : <div className="Auth_cont_Navbar">
                        <GoogleLogin
                            clientId='275676399174-b3h7agfuofkjp4h0qlkj86g145dbvmdg.apps.googleusercontent.com'
                            onSuccess={onSuccess}
                            onFailure={onFailure}
                            render={(renderProps) =>
                            (<p onClick={renderProps.onClick} className="Auth_Btn">
                                <BiUserCircle size={22} />
                                <b>Sign in</b>
                            </p>
                            )}
                        />

                    </div>}
            </div>
            {
                AuthBtn && 
                <Auth setEditCreateChanelBtn={setEditCreateChanelBtn} User={currentUser} setAuthBtn={setAuthBtn}/>
            }
        </>
    )
}

export default Navbar
