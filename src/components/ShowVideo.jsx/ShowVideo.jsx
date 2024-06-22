import React from 'react'
import './ShowVideo.css'
import { Link } from 'react-router-dom'
import moment from 'moment'

function ShowVideo({ vid }) {
    // console.log(vid)
    return (
        <>
            <Link to={`/videoPage/${vid?._id}`}>
                <video src={`http://localhost:4000/${vid.filePath}`} className='video_ShowVideo' />
            </Link>
            <div className="video_description">
                <div className="Chanel_logo_App">
                    <div className="fstChar_logo_App">
                        <>{vid?.Uploader?.charAt(0).toUpperCase()}</>
                    </div>
                </div>
                <div className="video_details">
                    <p className="title_vid_ShowVideo">{vid?.videoTitle}</p>
                    <pre className='vid_views_UploadTime'>{vid?.Uploder}</pre>
                    <pre className='vid_views_UploadTime'>{vid.Views} Views <div className="dot"></div>{moment(vid?.createdAt).fromNow()}</pre>

                </div>
            </div>
        </>
    )
}

export default ShowVideo
