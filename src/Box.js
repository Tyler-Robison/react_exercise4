import React, { useState } from 'react'
import './Box.css'

const Box = ({ color, colors }) => {
    let [clickCount, setClickCount] = useState(0);
    let [boxColor, setColor] = useState(color)
    const isClicked = clickCount === 1;

    function changeColor() {
        const randomIdx = Math.floor(Math.random() * colors.length)
        const randColor = colors[randomIdx]
        setColor(randColor)
    }

    function handleClick() {
        changeColor()
        setClickCount(clickCount + 1)
    }

    return (
        <div className='Box' style={{ backgroundColor: boxColor }}
            onClick={() => handleClick()}>
            <p className='Box-msg'>{isClicked ? 'Changed!' : ''}</p>
        </div>
    )

}

export default Box;