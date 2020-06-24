import React from 'react';

export default (props) => {
    return (
        <div>
            {props.snakeDots.map((dot, index) => {
                const dotStyle = {
                    left: `${dot[0]}%`,
                    top: `${dot[1]}%`,
                }
                return(
                    <div className="snake-dot" key={index} style={dotStyle}></div>
                )
            })}
        </div>
    )
}