import React from 'react';
import './Button.scss';

function Button(props) {
    return (
        <a href={props.href} className={props.className} style={{width: props.width}}>
            <span>{props.text}</span>
        </a>
    );
}

export default Button;