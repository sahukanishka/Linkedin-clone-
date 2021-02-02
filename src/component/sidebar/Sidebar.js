import React from 'react'
import "./Sidebar.css"
import {Avatar} from "@material-ui/core"

function Sidebar() {
    
    return (
        <div className="sidebar">
          <div className="sidebar__top">
              <img src="https://inspirationfeed.com/wp-content/uploads/2015/04/blurred-background.jpg" alt=""/>
              <Avatar/>
              <h2>Kanishka sahu</h2>
              <h4>Computer science Engineer</h4>
          </div>

          <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who viewed your Profile</p>
                <p className="sidebar__statNumber">332</p>
            </div>
            <div className="sidebar__stat">
                <p>Views of your post</p>
                <p className="sidebar__statNumber">440</p>
            </div>
          </div>
        </div>
    )
}

export default Sidebar
