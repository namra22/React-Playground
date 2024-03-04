import React from "react";
import { useState } from "react";
import {FaStar } from 'react-icons/fa';
export  default function StarRating({noOfStars=5}){
    const[rating,setRating]=useState(0);
    const[hover,setHover]=useState(0);
    const starArray=[...Array(noOfStars)];
    function handleClick(getCurrentId){
        setRating(getCurrentId);
    }
    function handleStarMouseMove(getCurrentIndex){
        setHover(getCurrentIndex);
    }
    function handleStarMouseLeave(){
        setHover(rating);
    }
    return(
        <div>
        {starArray.map((star , index) => {
            index++;
          return(
            <FaStar 
            color={index  <=(hover || rating) ? 'yellow' : 'black'}
            key={index}
            onClick={()=>handleClick(index)}
            onMouseMove={()=>handleStarMouseMove(index)}
            onMouseLeave={()=>handleStarMouseLeave()}
            size={40}
            />
          )
        })}
         </div>
    )
}