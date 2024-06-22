import React from 'react'
import {useSelector} from 'react-redux'
import './Home.css'
import LeftSideBar from '../../components/LeftSlideBar/LeftSideBar'
import ShowVideoGrid from '../../components/ShowVideoGrid/ShowVideoGrid'
// import vid from '../../components/Video/vid.mp4'

function Home() {
    const vids = useSelector(state=>state.videoReducer)?.data;
    console.log(vids)

    // const vids = [
    //     {
    //         _id: 1,
    //         video_src: vid,
    //         Chanel: "62bafe6752cea35a6c30685f",
    //         title: "video 1",
    //         Uploader: "sumit",
    //         description: "description of video 1"
    //     },
    //     {
    //         _id: 2,
    //         video_src: vid,
    //         Chanel: "cdd",
    //         title: "video 2",
    //         Uploader: "sumit",

    //         description: "description of video 2"
    //     },
    //     {
    //         _id: 3,
    //         video_src: vid,
    //         Chanel: "add",
    //         title: "video 3",
    //         Uploader: "sumit",

    //         description: "description of video 3"
    //     },
    //     {
    //         _id: 4,
    //         video_src: vid,
    //         Chanel: "add",
    //         title: "video 4",
    //         Uploader: "sumit",

    //         description: "description of video 4"
    //     },
    //     {
    //         _id: 5,
    //         video_src: vid,
    //         Chanel: "add",
    //         title: "video 5",
    //         Uploader: "sumit",

    //         description: "description of video 5"
    //     },
    // ]

    const NavList = [
        "All", "Music", "Movies", "comedy", "python", "computer science","All", "Music", "Movies", "comedy", "python", "computer science"
    ]

    return (
        <div className='container_Pages_App'>
            <LeftSideBar />
            <div className="container2_pages_App">
                <div className="navigation_Home">
                    {NavList.map(m => {
                        return (
                            <p key={m} className='btn_nav_home'>{m}</p>
                        )
                    })}
                </div>
                <ShowVideoGrid vids={vids} />
            </div>

        </div>
    )
}

export default Home
