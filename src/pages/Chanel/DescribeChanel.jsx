import React from 'react'
import { FaEdit, FaUpload } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import './Description.css'

function DescribeChanel({ setEditCreateChanelBtn, Cid }) {

    const chanels = useSelector(state => state.chanelReducers)
    // console.log(chanels)
    const currentChanel = chanels.filter(c => c._id === Cid)[0]
    // console.log(currentChanel)
    const currentUser = useSelector(state => state.currentUserReducer)
    return (
        <div className='container3_chanel'>
            <div className="chanel_logo_chanel">
                <b>
                    {currentChanel?.name.charAt(0).toUpperCase()}
                </b>
            </div>
            <div className="description_chanel">
                <b>{currentChanel?.name}</b>
                <p>{currentChanel?.desc}</p>
            </div>
            {currentUser?.result._id === currentChanel._id && <>
            <p className="editbtn_chanel" onClick={() => setEditCreateChanelBtn(true)}>
                <FaEdit />
                <b> Edit Chanel</b>
            </p>
            <p className="uploadbtn_chanel">
                <FaUpload />
                <b> Upload Video</b>
            </p>
            </>
            }
        </div>
    )
}

export default DescribeChanel
