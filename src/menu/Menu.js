import React,{useState} from "react";
import MenuList from "./MenuList";
export default function Menu({menus=[]}){
    return(
        <div style={{
            minHeight:'100vh',
            width:'350px',
            background:"linear-gradient(135deg, #008c7a, #423c56)",
            color:'white'
        }}>
        <MenuList list={menus} />
        </div>
    )
}