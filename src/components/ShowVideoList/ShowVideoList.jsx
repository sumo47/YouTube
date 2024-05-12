import React from 'react'
import vid from '../../components/Video/vid.mp4'
import ShowVideo from '../ShowVideo.jsx/ShowVideo'


function ShowVideoList({ key, videoId }) {
    const vids = [
        {
            _id: 1,
            video_src: vid,
            Chanel: "62bafe6752cea35a6c30685f",
            title: "video 1",
            Uploader: "sumit",
            description: "description of video 1"
        },
        {
            _id: 2,
            video_src: vid,
            Chanel: "cdd",
            title: "video 2",
            Uploader: "sumit",

            description: "description of video 2"
        },
        {
            _id: 3,
            video_src: vid,
            Chanel: "add",
            title: "video 3",
            Uploader: "sumit",

            description: "description of video 3"
        },
        {
            _id: 4,
            video_src: vid,
            Chanel: "add",
            title: "video 4",
            Uploader: "sumit",

            description: "description of video 4"
        },
        {
            _id: 5,
            video_src: vid,
            Chanel: "add",
            title: "video 5",
            Uploader: "sumit",

            description: "description of video 5"
        },
    ]

    return (
        <div className='Container_ShowVideoGrid'>
            {
                vids?.filter(q => q._id === videoId).map(vi => {
                    return (
                        <div key={vi._id} className="video_box_app">
                            <ShowVideo vid={vi} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ShowVideoList
