import React, { useState } from "react";
import Box from './Box';
import '../App.css';
import dragscroll from 'dragscroll'

function WorldMap() {
    // empty array to house all the Box components that make up the board
    let world = []
    // global index for mapping Box components
    let index = -1
    // function used to populate the world array with 100 Box components --- WILL NEED TOO implement 'game board' into database so it does not re render on page load, thereby changing the whole map.
    function worldMap() {
        for (let i = 0; i < 100; i++) {
            world.push(<Box />)
        }
    }
    // populates array
    worldMap()

    let unlockedBoxes = [35, 45, 54, 50, 55, 56, 65, 66]
    const [currentBox, setCurrentBox] = useState(35)
    // map function to determine which boxes are hidden and which are not -- then renders 
    const renderedWorld = world.map((item) => {
        index++
        // in users case we will pull this info from data base to see which boxes have been unlocked. 
        for (let i = 0; i < unlockedBoxes.length; i++) {
            const element = unlockedBoxes[i];
            // checks if Box is currentBox user is on
            if (index === currentBox) {
                return <Box index={index} current='true'/>
            }
            // checks if Box is in unlockedBoxes Arr
            if (index === element) {
                return <Box index={index} />
            }
        }
        return <Box index={index} hidden='true' />
    });

    return (
        <div className="world-container dragscroll">
            {renderedWorld}
        </div>
    );
}

export default WorldMap;