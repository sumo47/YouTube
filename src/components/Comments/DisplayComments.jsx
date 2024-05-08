import React, { useState } from 'react'
import './comment.css'

function DisplayComments({ cId, commentBody, userCommented }) {
    const [Edit, setEdit] = useState(false)
    const [commentBdy, setCommentBdy] = useState("")

    const handleEdit = (ctId, ctBdy) => {
        setEdit(true)
        setCommentBdy(ctBdy)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        setEdit(false)
    }
return (
    <>
        {
            Edit ? (<>
                <form action="" className="comments_sub_form_comments"
                    onSubmit={handleOnSubmit}
                >
                    <input type="text" placeholder='Edit comment...' value={commentBdy} className='comment_inbox' onChange={e => setCommentBdy(e.target.value)} />
                    <input type="submit" value="change" className='comment_add_btn_comments' />
                </form>
            </>) : (<></>)
        }
        <p className='commnet_body'>{commentBody}</p>
        <p className='userCommented'> - {userCommented} commented
            <p className='EditDel_DisplayComment'>
                <i onClick={() => handleEdit(cId, commentBody)}>Edit</i>
                <i>Delete</i>

            </p>
        </p>

    </>
)
}

export default DisplayComments
