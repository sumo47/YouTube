import React from 'react'
import './VideoUpload.css'

function VideoUpload() {
  return (
    <div className='container_VidUpload'>
      <input type="submit" name='text' value={"X"} className='ibtn_x' />
      <div className="container_VidUpload2">
        <input type="text" name="" id="" className='ibox_vidupload'
          maxLength={30}
          placeholder='Enter Title of your video' />

      </div>
      <label htmlFor="file" className='ibox_vidupload btn_vidUpload'>
        <input type="file" name='file' className='ibox_vidupload' style={{ fontSize: "1rem" }} />
      </label>
    </div>
  )
}

export default VideoUpload
