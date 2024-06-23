import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import './LikeWatchLaterSaveBtn.css'
import { MdPlaylistAddCheck } from 'react-icons/md'
import { RiHeartAddFill, RiPlayListAddFill, RiShareForwardLine } from 'react-icons/ri'
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { likeVideo } from '../../actions/video'
// import { useSelector } from 'react-redux'
// import { useParams } from 'react-router-dom'

function LikeWatchLaterSaveBtn({ vv, vid }) {
    // console.log(vv.Like+1)
    // console.log("added"+vv.Like)
    const dispatch = useDispatch()
    const [saveVideo, setSaveVideo] = useState(false)
    const [Dislike, SetDislike] = useState(false)
    const [Likebtn, setLikebtn] = useState(false)

    const toggleSavedVideo = () => { saveVideo ? setSaveVideo(false) : setSaveVideo(true) }

    const toggleLikeBtn = (e, lk) => {
        if (Likebtn) {
            setLikebtn(false)
            dispatch(likeVideo({
                id: vid,
                Like: lk - 1
            }))
        } else {
            setLikebtn(true)
            dispatch(likeVideo({
                id: vid,
                Like: lk + 1
            }))
            SetDislike(false)
        }
    }
    const toggleDislike = (e, lk) => {
        if (Dislike) {
            SetDislike(false)
        } else {
            SetDislike(true)
            dispatch(likeVideo({
                id: vid,
                Like: lk === 0 ? lk = 0 : lk - 1 // Like:lk-1
            }))
            setLikebtn(false)
        }
    }

    // const { vid } = useParams()
    // const vids = useSelector(state => state.videoReducer)
    // const vv = vids?.data.filter(q => q._id === vid)[0] //filter return array

    return (
        <div className='btns_cont_videoPage'>
            <div className="btn_VideoPage">
                <BsThreeDots />
            </div>
            <div className="btn_VideoPage">
                <div className="like_videoPage" onClick={(e) => { toggleLikeBtn(e, vv.Like) }}>
                    {Likebtn ?
                        <AiFillLike size={22} className="btns_videoPage" />
                        :
                        <AiOutlineLike size={22} className="btns_videoPage" />
                    }
                    <b>{vv?.Like}</b>

                </div>
                <div className="like_videoPage" onClick={(e) => { toggleDislike(e, vv.Like) }}>
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
