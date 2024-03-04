import React from "react";
import { useState,useEffect } from "react";
export default function RandomColor(){
    const[color,setColor]=useState('black');
    const[typeOfColor,setTypeOfColor]=useState('hex');
    useEffect(() => {
        if (typeOfColor === 'hex') {
          createRandomHexColor();
        } else {
          createRandomRgbColor();
        }
      }, [typeOfColor]);
    function randomhexColorGenerator(length){
        return Math.floor(Math.random()*length);
    }
    function createRandomHexColor(){
        const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let hexColor="#";
        for(let i=0; i<6; i++){
            const randomIndex = randomhexColorGenerator(hex.length);
            hexColor += hex[randomIndex];
        }
        setColor(hexColor);
        console.log(hexColor);
    }
    function createRandomRgbColor(){
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const rgbColor = `rgb(${red}, ${green}, ${blue})`;
        setColor(rgbColor);
        console.log(rgbColor);
    }
    return(
    <div style={{
         height:'100vh',
         width:'100vw',
         background:color
    }}>
        <button onClick={() =>  setTypeOfColor('hex') }>Create Hex Color</button>
        <button onClick={()=> setTypeOfColor('rgb')}>Create RGB color</button>
        <button onClick={typeOfColor==="hex"? createRandomHexColor : createRandomRgbColor}>Generate Random Color</button>
        <h1>{typeOfColor === 'hex' ? 'Hex Color: ' : 'RGB Color: ' }</h1>
        <h1>{color}</h1>

    </div>
    )
}