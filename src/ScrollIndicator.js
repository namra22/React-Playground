import React, { useState, useEffect } from "react";
export default function ScrollIndicator({ url }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);
  async function fetchData(url) {
    try {
      setLoading(true);
      const response = await fetch(url);
      const result = await response.json();
      if (result?.products?.length > 0) {
        setData(result.products);
        setLoading(false);
      }
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  }
  function handleScrollPercentage() {
    const verticalScrollPosition =
      window.scrollY || document.documentElement.scrollTop;
    const documentContentHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrollPercentage((verticalScrollPosition / documentContentHeight) * 100);
  }
  useEffect(() => {
    fetchData(url);
  }, [url]);
  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });
  if (loading) {
    return <p>Data is Loading. Please Wait</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  console.log(scrollPercentage);
  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: "0",
          zIndex: "1",
          width: "100%",
          textAlign: "center",
          backgroundColor: "green",
          color: "white",
        }}
      >
        <h1>Custom Scroll Indicator</h1>
        <div style={{ width: "100%", height: "10px" , background:'#aaf900' }}>
        <div style={{height:'10px' ,backgroundColor:"purple", width:`${scrollPercentage}%`}}></div>
        </div>
      </div>
      <div style={{ marginTop:'100px', textAlign:'center'}}>
        {data?.length > 0 ? data.map((item) => <p>{item.title}</p>) : null}
      </div>
    </div>
  );
}
