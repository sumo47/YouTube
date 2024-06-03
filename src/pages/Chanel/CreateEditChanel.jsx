import React, { useState } from 'react'
import './CreateEditChanel.css'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/auth';
import { updateChannelData } from '../../actions/chanelUser';

function CreateEditChanel({ setEditCreateChanelBtn }) {
    // const currentUser = {
    //     result: {
    //         email: "sumokhan76342@gmail.com",
    //         joinedOn: "2022-07-15T09:57:23.489Z"
    //     }
    // };

    const currentUser = useSelector(state => state.currentUserReducer)


    const [name, setName] = useState(currentUser?.result.name)
    const [desc, setDesc] = useState(currentUser?.result.desc)
    const dispatch = useDispatch()


    const handleSubmit = () => {
        if (!name) {
            alert("Please Enter Name !")
        } else if (!desc) {
            alert("Please Enter Description !")
        } else {
            dispatch(updateChannelData(currentUser?.result._id, {name:name,desc:desc}))

            setEditCreateChanelBtn(false)
            setTimeout(() => {
                dispatch(login({ email: currentUser?.result.email }))
            }, 5000);
        }
    }

    return (
        <div className='container_CreateEditChanel'  >
            <input type="submit" name='text' value={'X'} className='ibtn_x' onClick={() => setEditCreateChanelBtn(false)} />

            <div className="container2_CreateEditChanel">
                <h1>{currentUser?.result.name ? <>Edit </> : <>Create </>}Your channel</h1>

                <input type="text" name="text" id=" " placeholder='Enter Your/Chanel Name' className='ibox' value={name} onChange={(e) => setName(e.target.value)} />

                <textarea name="text" id="" rows={15} placeholder={'Enter Chanel Description'} className='ibox' value={desc} onChange={(e) => setDesc(e.target.value)} />

                <input type="submit" name="" id="" className='ibtn' value={'Submit'} onClick={handleSubmit} />

            </div>
        </div>
    )
}

export default CreateEditChanel
