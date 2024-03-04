import React, { useState, useEffect } from "react";
import{BsArrowLeftCircleFill,BsArrowRightCircleFill} from 'react-icons/bs'
export default function ImageSlider({ url,page, limit  }) {
  const [images, setImage] = useState([]);
  const [currentImage, setcurrentImage] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
      if (data) {
        setImage(data);
        setLoading(false);
      }
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  }
  function handlePrev(){
    setcurrentImage(currentImage===0 ?images.length-1:currentImage-1)
  }
  function handleNext(){
    setcurrentImage(currentImage===images.length-1? 0:currentImage+1)
  }
  useEffect(() => {
    if (url !=="") fetchImages(url);
  }, [url]);
  if (loading) {
    return <div>Loading data Please wait</div>;
  }
  if(error!==null){
    return <div>Error occured {error}</div>
  }

  return <div className="container" style={{
    position:'relative',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    width:'600px',
    height:'450px'
  }}>
    <BsArrowLeftCircleFill onClick={handlePrev} style={{
        position:"absolute",
        width:'2rem',
        height:'2rem',
        color:'white',
        left:'1rem'
    }}/>
    {
        images?.length ?
        images.map((imageItem,index)=>(
            <img 
            style={{
                borderRadius:'0.5rem',
                boxShadow:'0px 0px 7px #666',
                width:'100%',
                height:'100%',
                display: currentImage === index ? 'block' : 'none',
            }}
            key={imageItem.id}
            src={imageItem.download_url}
             />
        )):null
    }
    <BsArrowRightCircleFill onClick={handleNext} style={{
        position:"absolute",
        width:'2rem',
        height:'2rem',
        color:'white',
        right:'1rem'
    }} />
    <span style={{
                display:'flex',
                position:'absolute',
                bottom:'1rem',
            }}>
    {
        images?.length ?
        images.map((_,index)=>(
            <button key={index} style={{
                backgroundColor:currentImage === index ? 'white' : 'grey',
                height:'15px',
                width:'15px',
                borderRadius:'50%',
                border:'none',
                outline:'none',
                margin:'0 0.2rem',
                cursor:'pointer',
            }}></button>
        ))
        :null
    }
            </span>
   
    
  </div>;
}
