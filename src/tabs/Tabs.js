import React,{useState} from "react";
import './style.css'
export default function Tabs({tabsContent,onChange}){
    const[currentTabIndex,setCurrentTabIndex]=useState(0);
    function handleOnClick(currentIndex){
       setCurrentTabIndex(currentIndex);
       onChange(currentIndex);
    }
    return(
        <div className="container">
            <div className="heading">
                {
                    tabsContent.map((tab,index)=>(
                        <div onClick={()=>handleOnClick(index)} key={tab.title} className={`tab ${currentTabIndex===index?"active":null}`}>
                            <span>{tab.title} </span>
                        </div>
                    ))
                }
            </div>
            <div className="content">
                { tabsContent[currentTabIndex] && tabsContent[currentTabIndex].description}
            </div>
        </div>
    )
}