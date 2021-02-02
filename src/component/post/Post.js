import React from 'react'
import "./Post.css"
import CreateIcon from '@material-ui/icons/Create';
function Post() {
    return (
        <div className="post">
        <div className="post__input">
            <CreateIcon/>
            <form>
                <input className="post__textinput" type="text"/>
                <button type="submit">Submit</button>
            </form>
        </div>
        </div>
    )
}

export default Post
