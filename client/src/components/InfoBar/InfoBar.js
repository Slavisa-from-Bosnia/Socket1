import React from 'react';
import closeIcon from '../../icons/closeIcon';
import onLineIcon from '../../icons/onLineIcon';

const InfoBar = () => {
    <div className = 'infoBar'>
        <div className = "leftInnerContainer">
            <img className = className = "onLineIcon" src ={onLineIcon} alt = "online image"/>
            <h3>roomName</h3>
        </div>
        <div className = "rightInnerContainer">
        <a href = "/"><img src = {closeIcon} alt = "close image" /> </a>
        </div>
    </div>
}