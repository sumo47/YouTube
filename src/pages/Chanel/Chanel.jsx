import React from 'react'
import LeftSideBar from '../../components/LeftSlideBar/LeftSideBar'
import ShowVideoGrid from '../../components/ShowVideoGrid/ShowVideoGrid'
import vid from '../../components/Video/vid.mp4'
import DescribeChanel from './DescribeChanel'
import { useParams } from 'react-router-dom'


function Chanel({ setEditCreateChanelBtn }) {
    const { Cid } = useParams()

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
        <div className='container_Pages_App'>
            <LeftSideBar />
            <div className="container2_pages_App">
                <DescribeChanel
                    Cid={Cid}
                    setEditCreateChanelBtn={setEditCreateChanelBtn} />
                <ShowVideoGrid vids={vids} />
            </div>

        </div>

    )
}

export default Chanel

