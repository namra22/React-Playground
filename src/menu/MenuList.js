import React from "react"
import MenuItem from "./MenuItems"
export default function MenuList({list=[]}){
    return (
        <ul style={{
           marginTop:'0px',
           marginBottom:'0px',
           listStyle:"none"
        }}>
            {
                list?.length ? list.map((item)=><MenuItem item={item} />) : <p>There is no menu present.</p>
            }
        </ul>
    )
}