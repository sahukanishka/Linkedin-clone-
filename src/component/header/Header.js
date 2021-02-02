import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from "./HeaderOption";
import { BusinessCenter, Home, Message, NotificationsActive, SupervisorAccount, Work } from "@material-ui/icons";


function Header(){
    return (
        <div className="header">
        <div className="header__left">
            <img src="https://image.flaticon.com/icons/png/512/174/174857.png"alt=""/>

            <div className="header__search">
                <SearchIcon/>
                <input type="text"/>
            </div>
        </div>
 
        <div className="header__right">
            <HeaderOption Icon={Home} title = "Home"/>
            <HeaderOption Icon={NotificationsActive} title ="Notification"/>
            <HeaderOption Icon={Message} title ="Messages"/>
            <HeaderOption Icon={BusinessCenter} title = "Jobs"/>
            <HeaderOption Icon={SupervisorAccount} title ="My Network"/>
            <HeaderOption avatar="https://avatars1.githubusercontent.com/u/34833039?s=460&u=cc058da1be3186f12940e0e4c6fbfc7b412c2a93&v=4" title="Me" />
        </div>
        </div>
    );

}

export default Header;