import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Library from '../pages/Library/Library'
import WatchHistory from '../pages/WatchHistory/WatchHistory'
import WatchLater from '../pages/WatchLater/WatchLater'
import LikedVideo from '../pages/LikedVideo/LikedVideo'
import YourVideo from '../pages/YourVideo/YourVideo'
import VideoPage from '../pages/VideoPage/VideoPage'
import Chanel from '../pages/Chanel/Chanel'

function AllRoutes({setEditCreateChanelBtn}) {
    return (
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="/library" element={<Library />} />
            <Route path="/history" element={<WatchHistory/>} />
            <Route path="/yourvideos" element={<YourVideo />} />
            <Route path="/watchlater" element={<WatchLater/>} />
            <Route path="/likedvideos" element={<LikedVideo />} />
            <Route path="/videoPage/:vid" element={<VideoPage />} />
            <Route path="/chanel/:Cid" element={<Chanel setEditCreateChanelBtn={setEditCreateChanelBtn} />} />
        </Routes>
    )
}

export default AllRoutes
