import React,{ createContext, useState,useEffect} from "react";
import featureFlagDataServiceCall from "../data";
export const FeatureFlagContext=createContext(null);
export default function FeatureFlagGlobalState({children}){
    const[pending,setPending]=useState(false);
    const[enabled,setEnabled]=useState({});
    async function fetchFeatureFlags() {
        try {
          setPending(true);
          const response = await featureFlagDataServiceCall();
          setEnabled(response);
          setPending(false);
        } catch (error) {
          setPending(false);
          throw new Error(error);
        }
      }
    
      useEffect(() => {
        fetchFeatureFlags();
      }, []);
    
    return(
    <FeatureFlagContext.Provider value={{pending,enabled}}>
        {children}
    </FeatureFlagContext.Provider>
    )
}