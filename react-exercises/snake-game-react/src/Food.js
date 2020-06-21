import React from 'react';

export default (props) => {
    let foodStyle = {
        left: `${props.dot[0]}%`,
        top: `${props.dot[1]}%`
    }
    return (
        <div className="snake-food" style={foodStyle}></div>
    )
}