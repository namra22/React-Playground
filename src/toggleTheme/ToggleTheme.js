import React,{useState} from "react";
import useLocalStorage from "./UseLocalStorage";
import './style.css';
export default function ToggleTheme(){
    const [theme, setTheme] = useLocalStorage("theme", "dark");
    // const[theme,setTheme]=useState('light');
    function handleToggleTheme() {
      setTheme(theme === "light" ? "dark" : "light");
    }
  
    return(
        <div className="toggle-theme" data-theme={theme}>
            <div className="container">
                <p >Hello World !</p>
                <button onClick={handleToggleTheme}>Change Theme</button>
            </div>
        </div>
    )
}