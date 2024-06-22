import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import './LikeWatchLaterSaveBtn.css'
import { MdPlaylistAddCheck } from 'react-icons/md'
import { RiHeartAddFill, RiPlayListAddFill, RiShareForwardLine } from 'react-icons/ri'
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function LikeWatchLaterSaveBtn() {
    const [saveVideo, setSaveVideo] = useState(false)
    const [Dislike, SetDislike] = useState(false)
    const [Likebtn, setLikebtn] = useState(false)

    const toggleSavedVideo = () => { saveVideo ? setSaveVideo(false) : setSaveVideo(true) }
    const toggleDislike = () => { Dislike ? SetDislike(false) : SetDislike(true); setLikebtn(false) }
    const toggleLikeBtn = () => { Likebtn ? setLikebtn(false) : setLikebtn(true); SetDislike(false) }

    const { vid } = useParams()
    const vids = useSelector(state => state.videoReducer)
    const vv = vids?.data.filter(q => q._id === vid)[0] //filter return array

    return (
        <div className='btns_cont_videoPage'>
            <div className="btn_VideoPage">
                <BsThreeDots />
            </div>
            <div className="btn_VideoPage">
                <div className="like_videoPage" onClick={() => { toggleLikeBtn() }}>
                    {Likebtn ?
                        <AiFillLike size={22} className="btns_videoPage" />
                        :
                        <AiOutlineLike size={22} className="btns_videoPage" />
                    }
                    <b>{vv?.Like}</b>

                </div>
                <div className="like_videoPage" onClick={() => { toggleDislike() }}>
                    {Dislike ?
                        <AiFillDislike size={22} className="btns_videoPage" />
                        :
                        <AiOutlineDislike size={22} className="btns_videoPage" />
                    }
                    <b>DISLIKE</b>
                </div>
                <div className="like_videoPage" onClick={() => { toggleSavedVideo() }}>
                    {saveVideo ?
                        <><MdPlaylistAddCheck size={22} className="btns_videoPage" />
                            <b>Saved</b></>
                        :
                        <><RiPlayListAddFill size={22} className="btns_videoPage" />
                            <b>Save</b></>
                    }
                </div>
                <div className="like_videoPage">
                    <RiHeartAddFill size={22} className='btns_videoPage' />
                    <b>Thanks</b>
                </div>
                <div className="like_videoPage">
                    <RiShareForwardLine size={22} className='btns_videoPage' />
                    <b>Share</b>
                </div>
            </div>
        </div>
    )
}

export default LikeWatchLaterSaveBtn
