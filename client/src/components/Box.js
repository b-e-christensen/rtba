import React, { useState } from "react";
import summer from '../images/summer.jpg'
import fall from '../images/fall.jpg'
import winter from '../images/winter.jpg'
import spring from '../images/spring.jpg'
import marker from '../images/you-are-here.png'
// import '../App.css';

const styles = [
    {
        backgroundImage: `url(${summer})`,
        height: '200px',
        width: '200px',
        backgroundSize: 'cover',
    },
    {
        backgroundImage: `url(${fall})`,
        height: '200px',
        width: '200px',
        backgroundSize: 'cover',
    },
    {
        backgroundImage: `url(${winter})`,
        height: '200px',
        width: '200px',
        backgroundSize: 'cover',
    },
    {
        backgroundImage: `url(${spring})`,
        height: '200px',
        width: '200px',
        backgroundSize: 'cover',
    }
]

const options = () => {
    console.log('options display')
}

const doNothing = () => {
    console.log('do nothing')
}

function Box({ index, hidden, current }) {
    
    return(
        <div value={index} key={index} className={hidden ? "world-box hidden-box" : "world-box"} style={styles[Math.floor(Math.random() * 4)]} onClick={current ? options : doNothing}>
        {current ? <img src={marker} className="you-are-here" alt="red pin"></img>: <p></p>}
        </div>
    )
}

export default Box;