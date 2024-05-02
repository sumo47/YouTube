import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlineExplore} from 'react-icons/md'
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import {NavLink} from 'react-router-dom'
import sortIcon from './short.png'


import './leftsidebar.css'

function LeftSideBar() {
    return (
        <div className='container_leftSideBar'>
           <NavLink to="/">
           <div className="icon_sidebar_div">
                <AiOutlineHome size={22} className='icon_sidebar' />
                <div className="text_sidebar_icon">Home</div>

            </div>
           </NavLink>
            <div className="icon_sidebar_div">
                <MdOutlineExplore size={22} className='icon_sidebar' />
                <div className="text_sidebar_icon">Explore</div>

            </div>
            <div className="icon_sidebar_div">
                <img src={sortIcon} width={22} className='icon_sidebar' alt='sort'/>
                <div className="text_sidebar_icon">Shorts</div>

            </div>
            <div className="icon_sidebar_div">
                <MdOutlineSubscriptions size={22} className='icon_sidebar' />
                <div className="text_sidebar_icon" style={{ fontSize: "11px"}}>Subscription</div>

            </div>
           <NavLink to='/library'>
           <div className="icon_sidebar_div">
                <MdOutlineVideoLibrary size={22} className='icon_sidebar' />
                <div className="text_sidebar_icon">Library</div>

            </div>
           </NavLink>
        </div>
    )
}

export default LeftSideBar
