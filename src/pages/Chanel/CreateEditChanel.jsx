import React from 'react'
import './CreateEditChanel.css'

function CreateEditChanel({setEditCreateChanelBtn}) {
    const currentUser = {
        result: {
            email: "sumokhan76342@gmail.com",
            joinedOn: "2022-07-15T09:57:23.489Z"
        }
    };
    return (
        <div className='container_CreateEditChanel'onClick={()=>setEditCreateChanelBtn(false)} >
            <input type="submit"
                name='text'
                value={'X'}
                className='ibtn_x'
            />

            <div className="container2_CreateEditChanel">
                <h1>{currentUser?.result.name ? <>Edit</> : <>Create </>}your channel</h1>
                <input type="text" name="text" id=" " placeholder='Enter Your/Chanel Name' className='ibox' />
                <textarea name="text" id="" rows={15} placeholder={'Enter Chanel Description'} className='ibox'></textarea>
                <input type="submit" name="" id="" className='ibtn' value={'Submit'} />

            </div>
        </div>
    )
}

export default CreateEditChanel
