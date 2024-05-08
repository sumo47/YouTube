// import React from 'react'
import { AiFillLike, AiFillPlaySquare, AiOutlineHome } from 'react-icons/ai'
import { MdOutlineExplore, MdOutlineSubscriptions, MdOutlineVideoLibrary, MdOutlineWatchLater } from 'react-icons/md'
import shortIcon from './short.png'
import { FaHistory } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

function DrawerSidebar({ toggleDrawer, toggleDrawerSidebar }) {
    return (
        <div className='container_DrawerLeftSidebar' style={toggleDrawerSidebar}>
            <div className="container2_DrawerLeftSidebar">
                <div className="Drawer_leftSidebar">
                    <NavLink to={'/'}>
                        <div className="Drawer_icon_sidebar_div">
                            <div>
                                <AiOutlineHome size={22} className={"Drawer_icon_sidebar"} style={{ margin: "auto 0.7rem" }} />
                                <div className="Drawer_text_sidebarIcon">Home</div>
                            </div>
                        </div>
                    </NavLink>
                    <div className="Drawer_icon_sidebar_div">
                        <div>
                            <MdOutlineExplore size={22} className={"Drawer_icon_sidebar"} style={{ margin: "auto 0.7rem" }} />
                            <div className="Drawer_text_sidebarIcon">Explore</div>
                        </div>
                    </div>
                    <div className="Drawer_icon_sidebar_div">
                        <div>
                            <img src={shortIcon} width={22} className={"Drawer_icon_sidebar"} style={{ margin: "auto 0.7rem" }} alt='sort' />
                            <div className="Drawer_text_sidebarIcon">Shorts</div>
                        </div>
                    </div>
                    <div className="Drawer_icon_sidebar_div">
                        <div>
                            <MdOutlineSubscriptions size={22} className={"Drawer_icon_sidebar"} style={{ margin: "auto 0.7rem" }} />
                            <div className="Drawer_text_sidebarIcon">Subscriptions</div>
                        </div>
                    </div>
                </div>
                <div className="libraryBtn_DrawerleftSidebar">
                    <NavLink to="/library">
                        <div className="Drawer_icon_sidebar_div">
                            <div>
                                <MdOutlineVideoLibrary size={22} className={"Drawer_icon_sidebar"} style={{ margin: "auto 0.7rem" }} />
                                <div className="Drawer_text_sidebarIcon">Library</div>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to='/history'>
                        <div className="Drawer_icon_sidebar_div">
                            <div>
                                <FaHistory
                                    size={22} className={"Drawer_icon_sidebar"} style={{ margin: "auto 0.7rem" }} />
                                <div className="Drawer_text_sidebarIcon">History</div>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to='/yourvideos'>
                        <div className="Drawer_icon_sidebar_div">
                            <div>
                                <AiFillPlaySquare
                                    size={22} className={"Drawer_icon_sidebar"} style={{ margin: "auto 0.7rem" }} />
                                <div className="Drawer_text_sidebarIcon">Your Videos</div>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to='/watchlater'>
                        <div className="Drawer_icon_sidebar_div">
                            <div>
                                <MdOutlineWatchLater
                                    size={22} className={"Drawer_icon_sidebar"} style={{ margin: "auto 0.7rem" }} />
                                <div className="Drawer_text_sidebarIcon">Watch Later</div>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to='likedvideos'>
                        <div className="Drawer_icon_sidebar_div">
                            <div>
                                <AiFillLike
                                    size={22} className={"Drawer_icon_sidebar"} style={{ margin: "auto 0.7rem" }} />
                                <div className="Drawer_text_sidebarIcon">Liked Videos</div>
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div className="subscription_lsdbar">
                    <h3>Your Subscription</h3>
                    <div className="channel_lsdbar">
                        <p>C</p>
                        <div>Channel</div>
                    </div>
                    <div className="channel_lsdbar">
                        <p>C</p>
                        <div>Channel</div>
                    </div>
                    <div className="channel_lsdbar">
                        <p>C</p>
                        <div>Channel</div>
                    </div>
                    <div className="channel_lsdbar">
                        <p>C</p>
                        <div>Channel</div>
                    </div>
                    <div className="channel_lsdbar">
                        <p>C</p>
                        <div>Channel</div>
                    </div>
                    <div className="channel_lsdbar">
                        <p>C</p>
                        <div>Channel</div>
                    </div>
                    <div className="channel_lsdbar">
                        <p>C</p>
                        <div>Channel</div>
                    </div>
                </div>
            </div>
            {/*!i think it is not necessary */}
            <div className="container3_DrawerLeftSidebar"
                onClick={() => toggleDrawer()}>
            </div>

        </div>
    )
}

export default DrawerSidebar
