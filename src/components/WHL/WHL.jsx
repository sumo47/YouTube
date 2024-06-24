import React from 'react'
import LeftSideBar from '../LeftSlideBar/LeftSideBar'
import './WHLcss.css'
import WHLVideoList from './WHLVideoList'
import { useSelector } from 'react-redux'

function WHL({ page, videoList }) {
  const currentUser = useSelector((state)=>state?.currentUserReducer)
  return (
    <div className='container_Pages_App'>
      <LeftSideBar />
      <div className="container2_Pages_App" style={{width:"100%"}}>
        <p className="container_whl">
          <div className="box_WHL leftside_whl">
            <b>Your {page} Shown Here</b>
            {page === "History" &&
            <div className="clear_History_btn">
              Clear History
            </div>
            }
          </div>
          <div className="rightSide_whl">
            <h1>{page}</h1>
            <div className="whl_list">
              <WHLVideoList page={page}
              currentUser = {currentUser?.result._id}
               videoList={videoList} />
            </div>
          </div>
        </p>
      </div>

    </div>
  )
}

export default WHL
