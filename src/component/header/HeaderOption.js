import { Avatar } from "@material-ui/core";
import React from "react";
import "./HeaderOption.css";

function HeaderOption({avatar, Icon,title}){
    return (
    <div className="hedaerOption">
        {Icon && <Icon className="headerOption__icon"/>}
        {avatar && <Avatar className="headerOption__icon" src={avatar}/>}
        <h4 className="headerOption__title">{title}</h4>

    </div>
    );
}

export default HeaderOption;