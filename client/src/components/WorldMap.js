import React, { useEffect, useState } from "react";
import Box from './Box';
import dragscroll from 'dragscroll'
import ScrollContainer from "react-indiana-drag-scroll";
import { useQuery } from "@apollo/client";
import { GET_MAP } from "../utils/queries";


function WorldMap() {

    const { loading: mapLoading, data: mapData, refetch: mapRefetch } = useQuery(GET_MAP)
    const worldMap = mapData?.getUser.worldMap || []
    const unlockedBoxes = mapData?.getUser.unlockedBoxes || []

    // empty array to house all the Box components that make up the board
    let world = []
    // global index for mapping Box components
    let index = -1
    const [mapState, setMapState] = useState([])
    useEffect(() => {
        console.log('useEffect')
        // inserts 100 Box componenents into world array to be iterated over. Box components are passed props when iterated over.
        for (let i = 0; i < 100; i++) {
            world.push(<Box />)
        }
        setMapState([...world])
    }, [])



    
    // MAKE QUERY TO GET CURRENT BOX
    const [currentBox, setCurrentBox] = useState(0)





    // map function to determine which boxes are hidden and which are not -- then renders 
    const renderedWorld = mapState.map((item) => {
        index++
        // in users case we will pull this info from data base to see which boxes have been unlocked. 
        for (let i = 0; i < unlockedBoxes.length; i++) {
            const element = unlockedBoxes[i];
            // checks if Box is currentBox user is on
            if (index === currentBox) {
                return <Box index={index} current='true' background={worldMap[index]} />
            }
            // checks if Box is in unlockedBoxes Arr
            if (index === element) {
                return <Box index={index} background={worldMap[index]} />
            }
        }
        return <Box index={index} hidden='true' background={worldMap[index]} />
    });

    return (
        <ScrollContainer className="container" horizontal={true} vertical={true}>
            <div className="world-container dragscroll">
                {renderedWorld}
            </div>
        </ScrollContainer>
    );
}

export default WorldMap;