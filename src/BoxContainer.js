import React, { useState } from 'react'
import './BoxContainer.css'
import Box from './Box'

// feed in colors and numBoxes.
const defaultColors = ['red', 'green', 'blue', 'pink', 'orange', 'grey', 'black', 'violet', 'yellow', 'teal', 'brown', 'salmon']
const defaultNumBoxes = 16;

const BoxContainer = ({ colors=defaultColors, numBoxes=defaultNumBoxes }) => {
   
    const randColorArr = []; 
    for (let i = 0; i < numBoxes; i++){
        const randomIdx = Math.floor(Math.random() * colors.length)
        randColorArr.push(colors[randomIdx])
    }

    return (
        <div className='BoxContainer'>
          {randColorArr.map(color => {
              return <Box 
              color={color}
              colors = {colors}
              />
          })}
        </div>
    )

}

export default BoxContainer;