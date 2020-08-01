import React from 'react';
import './Card.scss';

function Body(props) {
    return (
        <div className="flex flex-col center align-center card" style={{ height: "232px", width: "240px", textAlign: "center" }}>
            <img src={props.icon} style={{marginBottom: "16px"}}></img>
            <div>
                <span className="text-normal">{props.textNormal}</span>
                <br />
                <span className="text-bold">{props.textBold}</span>
            </div>
        </div>
    );
}

export default Body;