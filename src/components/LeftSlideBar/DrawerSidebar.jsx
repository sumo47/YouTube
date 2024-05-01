import React from 'react'
import { AiFillPlaySquare, AiOutlineHome } from 'react-icons/ai'
import { MdOutlineExplore, MdOutlineSubscriptions, MdOutlineVideoLibrary } from 'react-icons/md'
import shortIcon from './short.png'
import { FaHistory } from 'react-icons/fa'

function DrawerSidebar() {
    const videos = "Your videos"
    return (
        <div className='container_DrawerLeftSidebar'>
            <div className="container2_DrawerLeftSidebar">
                <div className="Drawer_leftSidebar">
                    <div className="Drawer_icon_sidebar_div">
                        <p>
                            <AiOutlineHome size={22} className={"Drawer_icon_sidebar"} style={{ margin: "auto 0.7rem" }} />
                            <div className="Drawer_text_sidebarIcon">Home</div>
                        </p>
                    </div>
                    <div className="Drawer_icon_sidebar_div">
                        <p>
                            <MdOutlineExplore size={22} className={"Drawer_icon_sidebar"} style={{ margin: "auto 0.7rem" }} />
                            <div className="Drawer_text_sidebarIcon">Explore</div>
                        </p>
                    </div>
                    <div className="Drawer_icon_sidebar_div">
                        <p>
                            <img src={shortIcon} width={22} className={"Drawer_icon_sidebar"} style={{ margin: "auto 0.7rem" }} />
                            <div className="Drawer_text_sidebarIcon">Shorts</div>
                        </p>
                    </div>
                    <div className="Drawer_icon_sidebar_div">
                        <p>
                            <MdOutlineSubscriptions size={22} className={"Drawer_icon_sidebar"} style={{ margin: "auto 0.7rem" }} />
                            <div className="Drawer_text_sidebarIcon">Subscriptions</div>
                        </p>
                    </div>
                </div>
                <div className="libraryBtn_DrawerleftSidebar">
                    <div className="Drawer_icon_sidebar_div">
                        <p>
                            <MdOutlineVideoLibrary size={22} className={"Drawer_icon_sidebar"} style={{ margin: "auto 0.7rem" }} />
                            <div className="Drawer_text_sidebarIcon">Library</div>
                        </p>
                    </div>
                    <div className="Drawer_icon_sidebar_div">
                        <p>
                            <FaHistory
                             size={22} className={"Drawer_icon_sidebar"} style={{ margin: "auto 0.7rem" }} />
                            <div className="Drawer_text_sidebarIcon">History</div>
                        </p>
                    </div>
                    <div className="Drawer_icon_sidebar_div">
                        <p>
                            <AiFillPlaySquare
                             size={22} className={"Drawer_icon_sidebar"} style={{ margin: "auto 0.7rem" }} />
                            <div className="Drawer_text_sidebarIcon">{videos}</div>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DrawerSidebar
