import React, { useState } from "react";
import { Homes } from "../components/homes/Homes";
import { Home } from "../components/homes/Home";
import { UpComming } from "../components/upcomming/UpComming";
import { latest, recommended, upcome } from "../dummyData";
import { Trending } from "../components/trending/Trending";

export const Homepages = () => {
   
   const [items, setItems] = useState(upcome)
   const [item, setItem] = useState(latest)
   const [rec, setRec] = useState(recommended)
    return(
        <>
        <Homes/>
        <UpComming items={items} Title="Upcomming Movies"/>
        <UpComming items={item} Title="Latest Movies"/>
        <Trending/>
        <UpComming items={rec} Title="Recommended Movies"/>
        </>
    )
    }