import React,{useContext,useEffect} from "react";
import { FeatureFlagContext } from "./context";
import ToggleTheme from "../toggleTheme/ToggleTheme";
import ImageSlider from "../ImageSlider";
import RandomColor from "../RandomColor";
import Weather from "../Weather";
import StarRating from "../StarRating";
export default function FeatureFlags(){
    const { pending, enabled } = useContext(FeatureFlagContext);

    const componentsToRender = [
      {
        key: "toggleTheme",
        component: <ToggleTheme />,
      },
      {
        key: " imageSlider",
        component: <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'}/>,
      },
      {
        key: "weather",
        component: <Weather />,
      },
      {
        key: "starRating",
        component: <StarRating noOfStars={5} />,
      },
      {
        key: "showRandomColorGenerator",
        component: <RandomColor />,
      },
    ];
  
    function checkEnabledFlags(getCurrentKey) {
      return enabled[getCurrentKey];
    }
  
    if (pending) return <h1>Loading data ! Please wait</h1>;
    return(
        <div>
            <h1>Feature flags</h1>
            {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
        </div>
    )
}