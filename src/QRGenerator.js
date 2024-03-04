import React,{useState} from "react";
import QRCode from 'react-qr-code';
export default function QRGenerator(){
    const[input,setInput]=useState("");
    const[qrCode,setQrCode]=useState('');
    function handleGenerateQrCode(){
        setQrCode(input);
        setInput('');
    }
    return (
        <div>
            <h1>QR Code Generator</h1>
            <div>
            <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder="Enter your value here"/>
            <button onClick={handleGenerateQrCode} disabled={input!==""? false:true}>Generate Code</button>
            </div>
            <div>
                <QRCode value={qrCode} size={400}/>
            </div>
        </div>
    )
}