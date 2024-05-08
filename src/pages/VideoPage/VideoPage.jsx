import React from 'react'
import vid from '../../components/Video/vid.mp4'
import './VideoPage.css'
import LikeWatchLaterSaveBtn from './LikeWatchLaterSaveBtn'

function VideoPage() {
    return (
        <div className='container_videoPage'>
            <div className="container2_videopage">
                <div className="video_display_screen_videoPage">
                    <video src={vid}
                        className={"video_ShowVideo_videoPage"}
                        controls
                    // autoPlay
                    />
                    <div className="video_details_videoPage">
                        <div className="video_btns_title_VideoPage_cont">
                            <p className="video_title_VideoPage">Title</p>
                            <div className="views_data_btns_VideoPage">
                                <div className="views_videopage">
                                    5 views <div className="dot"></div> uploaded 1 year ago
                                </div>
                        <LikeWatchLaterSaveBtn/>
                            </div>
                        </div>
                        <div className="chanel_details_videoPage">
                            <b className="chanel_logo_videoPage">
                                <p>C</p>
                            </b>
                            <p className="chanel_name_videoPage">Chanel name</p>
                        </div>
                        <div className="comments_VideoPage">
                            <h2>
                                <u>Comments</u>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="moreVideoBar">
                    More video
                </div>
            </div>
        </div>
    )
}

export default VideoPage
