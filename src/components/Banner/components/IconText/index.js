import React from 'react';
import './IconText.scss';

function IconText(props) {
    return (
        <div className="flex-icon">
            <img src={props.icon} className="icon"></img>
            <span className="icon-text">{props.text}</span>
        </div>
    );
}

export default IconText;