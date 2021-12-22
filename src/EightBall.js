import React, { useState } from 'react'
import './EightBall.css'

// Keep track of color and msg with state.

const EightBall = ({ answers }) => {

    const defaultColor = 'black'
    const defaultMsg = 'Think of a Question'

    let [color, setColor] = useState(defaultColor)
    let [msg, setMsg] = useState(defaultMsg)
    let [redCount, setRedCount] = useState(0)
    let [greenCount, setGreenCount] = useState(0)
    let [goldCount, setGoldCount] = useState(0)

    function getColorMsgPair() {
        const randIdx = Math.floor(Math.random() * answers.length)
        const pair = answers[randIdx]
        if (pair.color === 'red') setRedCount(redCount + 1)
        if (pair.color === 'green') setGreenCount(greenCount + 1)
        if (pair.color === 'goldenrod') setGoldCount(goldCount + 1)
        setMsg(pair.msg)
        setColor(pair.color)
    }

    function reset() {
        setMsg(defaultMsg);
        setColor(defaultColor);
        setRedCount(0);
        setGreenCount(0);
        setGoldCount(0);
    }

    return (
        <div className='EightBall-container'>
            <div className='EightBall' style={{ backgroundColor: color }} onClick={() => getColorMsgPair()}>
                <p className='EightBall-msg'>{msg}</p>

            </div>
            <button className='EightBall-reset'
                onClick={() => reset()}>Reset</button>

            <p>How many times ball has been each color?</p>
            <ul>
                <li>Red: {redCount}</li>
                <li>Green: {greenCount}</li>
                <li>GoldenRod: {goldCount} </li>
            </ul>
        </div>
    )

}

export default EightBall;