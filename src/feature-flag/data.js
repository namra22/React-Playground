import React from "react";
const dummyApiResponse={
    toggleTheme:true,
    imageSlider:true,
    weather:true,
    starRating:false,
    showRandomColorGenerator:true,
}
function featureFlagDataServiceCall(){
    
return new Promise((resolve, reject) => {
    if(dummyApiResponse){
        setTimeout(resolve(dummyApiResponse),5000)
    }
    else reject("Some Error Occured Please Try Again")
})
}
export default featureFlagDataServiceCall;