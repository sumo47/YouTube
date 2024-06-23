import React from 'react'
// import vid from '../../components/Video/vid.mp4'
import './VideoPage.css'
import LikeWatchLaterSaveBtn from './LikeWatchLaterSaveBtn'
import Comments from '../../components/Comments/Comments'
import { Link, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import moment from 'moment'

function VideoPage() {
    const { vid } = useParams()
    // console.log(vid)
    const vids = useSelector(state => state.videoReducer);
    const vv = vids?.data.filter(q => q._id === vid)[0];
    console.log(vv)
    return (
        <div className='container_videoPage'>
            <div className="container2_videopage">
                <div className="video_display_screen_videoPage">
                    <video src={`http://localhost:4000/${vv.filePath}`}
                        className={"video_ShowVideo_videoPage"}
                        controls
                    autoPlay
                    />
                    <div className="video_details_videoPage">
                        <div className="video_btns_title_VideoPage_cont">
                            <p className="video_title_VideoPage">{vv?.videoTitle}</p>
                            <div className="views_data_btns_VideoPage">
                                <div className="views_videopage">
                                    {vv?.Views} views <div className="dot"></div> {moment(vv?.createdAt).fromNow()}
                                </div>
                                <LikeWatchLaterSaveBtn vv={vv} vid={vid}/>
                            </div>
                        </div>
                        <Link to={`/chanel/${vv?.videoChanel}`} className="chanel_details_videoPage">
                            <b className="chanel_logo_videoPage">
                                <p>{vv?.Uploder.charAt(0).toUpperCase()}</p>

                            </b>
                            <p className="chanel_name_videoPage"> {vv?.Uploder}</p>
                        </Link>
                        <div className="comments_VideoPage">
                            <h2>
                                <u>Comments</u>
                            </h2>
                            <Comments />
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
