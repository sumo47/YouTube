import React from 'react'
import LeftSideBar from '../../components/LeftSlideBar/LeftSideBar'
import vid from '../../components/Video/vid.mp4'
import './library.css'
import { FaHistory } from 'react-icons/fa'
import WHLVideoList from '../../components/WHL/WHLVideoList'
import { MdOutlineWatchLater } from 'react-icons/md'
import { AiOutlineLike } from 'react-icons/ai'

function Library() {
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
      _id: 11,
      video_src: vid,
      Chanel: "62bafe6752cea35a6c30685f",
      title: "video 11",
      Uploader: "sumit",
      description: "description of video 1"
    },
    {
      _id: 12,
      video_src: vid,
      Chanel: "62bafe6752cea35a6c30685f",
      title: "video 12",
      Uploader: "sumit",
      description: "description of video 1"
    },
    {
      _id: 13,
      video_src: vid,
      Chanel: "62bafe6752cea35a6c30685f",
      title: "video 13",
      Uploader: "sumit",
      description: "description of video 1"
    },
    {
      _id: 14,
      video_src: vid,
      Chanel: "62bafe6752cea35a6c30685f",
      title: "video 14",
      Uploader: "sumit",
      description: "description of video 1"
    },
    {
      _id: 15,
      video_src: vid,
      Chanel: "62bafe6752cea35a6c30685f",
      title: "video 15",
      Uploader: "sumit",
      description: "description of video 1"
    },
    {
      _id: 16,
      video_src: vid,
      Chanel: "62bafe6752cea35a6c30685f",
      title: "video 16",
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
      <div className="container2_Pages_App" style={{ width: "100%" }}>
        <div className="container_libraryPage">
          <h1 className='title_container_LibraryPage'>
            <b>
              <FaHistory />
            </b>
            <b>History</b>
          </h1>
          <div className="container_videoList_libraryPage">
            <WHLVideoList page={"History"} videoList={vids} />
          </div>
        </div>
        <div className="container_libraryPage">
          <h1 className='title_container_LibraryPage'>
            <b>
              <MdOutlineWatchLater />
            </b>
            <b>Watch Later</b>
          </h1>
          <div className="container_videoList_libraryPage">
            <WHLVideoList page={"Watch Later"} videoList={vids} />
          </div>
        </div>
        <div className="container_libraryPage">
          <h1 className='title_container_LibraryPage'>
            <b>
              <AiOutlineLike />
            </b>
            <b>Liked Video</b>
          </h1>
          <div className="container_videoList_libraryPage">
            <WHLVideoList page={"Liked Video"} videoList={vids} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Library
