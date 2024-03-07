import React from 'react';
import Accordion from './Accordion';
import RandomColor from './RandomColor';
import StarRating from './StarRating';
import Weather from './Weather';
import ImageSlider from './ImageSlider';
import LoadMoreData from './LoadMoreData';
import {menus} from './menu/data'
import Menu from './menu/Menu';
import QRGenerator from './QRGenerator';
import ToggleTheme from './toggleTheme/ToggleTheme';
import ScrollIndicator from './ScrollIndicator';
import TabTest from './tabs/TabsTest';
import Modal from './customModalPopup/Modal';
import GithubProfileFinder from './githubProfileFinder/GithubProfileFinder';
import SearchAutoComplete from './searchAutoComplete/SearchautoComplete';
import FeatureFlagGlobalState from './feature-flag/context/index';
import FeatureFlags from './feature-flag/index';
function App() {
  return (
    <div>
      {/* <Accordion />
      <RandomColor />
      <StarRating noOfStars={5} />
      <Weather />
      <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'}/>
      <LoadMoreData />
      <Menu menus={menus}/>
      <QRGenerator />
      <ToggleTheme />
      <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} />
      <TabTest />
      <Modal />
      <GithubProfileFinder />
      <SearchAutoComplete /> */}
      <FeatureFlagGlobalState >
        <FeatureFlags />
      </FeatureFlagGlobalState>
    </div>
  );
}

export default App;
