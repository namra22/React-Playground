import React,{useState,useEffect} from "react"
export default function LoadMoreData(){
    const[products,setProducts]=useState([]);
    const[loading,setLoading]=useState(false);
    const[count,setCount]=useState(0);
    const[error,setError]=useState("");
    const[disableButton,setDisableButton]=useState(false);
    async function fetchProducts(){
        try{
            setLoading(true);
            const response=await fetch (`https://dummyjson.com/products?limit=20&skip=${count===0?0:count*20}`);
            const data=await response.json();
            console.log(data);
            if(data?.products?.length ){
                setProducts((prevData)=>[...prevData,...data.products]);
                setLoading(false);
            }
        } catch(e){
            setError(e.message);
            setLoading(false);
        }
    }
    useEffect(()=>{
        fetchProducts();
    },[count])
    useEffect(()=>{
        if(products?.length ===100){
            setDisableButton(true);
        }
    },[products]
    )
    function handleCount(){
        setCount(count+1);
    }

    if(loading) {
        return <div>Loading data</div>
    }
    return(
        <div style={{
            display:'flex',
            flexDirection:'column',
            gap:'20px'
        }}>
            <div style={{
                display:'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap:'10px'

            }}> 
                {
                    products?.length ?
                    products.map((product)=>(
                            <div style={{
                                padding:'20px',
                                border:'1px solid black',
                                display:'flex',
                                flexDirection:'column',
                                gap:'10px'
                            }}
                            key={product.id}>
                                <img style={{
                                    width:'200px',
                                    height:'200px'
                                }}
                                src={product.thumbnail}
                                alt={product.title}/>
                                <p>{product.title}</p>
                            </div>
                        )
                    ):
                    null
                }
            </div>
            <div>
                <button disabled={disableButton} onClick={handleCount}>Load More Button</button>
            </div>
            {
                disableButton ? 
                <p>you have reached 100 products. No more products to show</p>
                :null
            }
        </div>
    )

}