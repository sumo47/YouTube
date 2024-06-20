import React, { useState } from 'react'
import './VideoUpload.css'
import { useDispatch, useSelector } from 'react-redux'
import { uploadVideo } from '../../actions/video'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

function VideoUpload({ setVidUploadPage }) {

  const currentUser = useSelector(state => state.currentUserReducer)
  const dispatch = useDispatch()

  const [title, setTitle] = useState("")
  const [videoFile, setVideoFile] = useState("")

  const handleSetVideoFile = (e) => {
    setVideoFile(e.target.files[0])
  }
  const [progress, setProgress] = useState(0)

  const fileOptions = {
    onUploadProgress: (progressEvent) => {
      const { loaded, total } = progressEvent;
      const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
      setProgress(percentage)
      if (percentage === 100) {
        setTimeout(function () { }, 3000)

      }
    }
  }

  const uploadVideoFile = () => {
    if (!title) {
      alert("Please Enter a Title of the video")
    } else if (!videoFile) {
      alert("Please Select a Video File")
    } else if (videoFile.size > 1000000) {
      alert("Please Attach Video file less than 1kb")
    } else {
      const fileData = new FormData() //! what happening
      fileData.append("file", videoFile)
      fileData.append("title", title)
      fileData.append("chanel", currentUser?.result._id)
      fileData.append("uploader", currentUser?.result.name)

      // console.log(videoFile)

      dispatch(uploadVideo({
        fileData: fileData, fileOptions: fileOptions
      }))
    }
  }

  return (
    <div className='container_VidUpload'>
      <input type="submit" name='text' value={"X"} className='ibtn_x' onClick={() => setVidUploadPage(false)} />
      <div className="container2_VidUpload">
        <div className="ibox_div_vidupload">
          <input onChange={(e) => { setTitle(e.target.value) }} type="text" name="" id="" className='ibox_vidupload'
            maxLength={30}
            placeholder='Enter Title of your video' />

          <label htmlFor="file" className='ibox_vidupload btn_vidUpload'>
            <input onChange={e => { handleSetVideoFile(e) }} type="file" name='file' className='ibox_vidupload' style={{ fontSize: "1rem" }} />
          </label>
        </div>
        <div className="ibox_div_vidupload">
          <input onClick={() => uploadVideoFile()} type="submit" value='Upload'
            className='ibox_vidupload btn_vidUpload' />
        </div>
        <div className="loader ibox_div_vidupload">
          <CircularProgressbar
            value={progress}
            text={`${progress}`} styles={buildStyles({
              strokeLinecap: "butt",
              textSize: "20px",
              pathTransitionDuration: 0.5,
              pathColor: `rgba(255,255,255,${progress / 100})`,
              textColor: '#f88',
              trailColor: '#adff2f',
              backgroundColor: '#3e98c7'
            })} />

        </div>
      </div>
    </div>
  )
}

export default VideoUpload
