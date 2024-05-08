import React, { useState } from 'react'
import './comment.css'
import DisplayComments from './DisplayComments'

function Comments() {
    const [commentText, setCommentText] = useState("")
    const commentList = [{ _id:"1",commentBody: 'hello', userCommented: "abc" }, {_id:"2", commentBody: 'world', userCommented: "abcd" }]
    const handleOnSubmit = (e) => {
        e.preventDefault()
        console.log(commentText)
    }
    return (
        <>
            <form action="" className="comments_sub_form_comments" onSubmit={handleOnSubmit}>
                <input type="text" placeholder='add comment...' className='comment_inbox' onChange={e => setCommentText(e.target.value)} />
                <input type="submit" value="add" className='comment_add_btn_comments' />
            </form>
            <div className="display_comment_container">
                {commentList.map(c => {
                    return (
                        <DisplayComments cId = {c._id} commentBody={c.commentBody} userCommented={c.userCommented} />
                    )
                })}
            </div>
        </>
    )
}

export default Comments
