# React Mini Projects

A collection of small React projects that showcase various components and functionalities. Each project is designed for learning and experimentation.

## Concepts Learned
**React Basics:**
-Components
-Props
-State
-Hooks (useState, useEffect,useContext)
**Component Creation:**
Creation of functional components in React.

**Conditional Rendering:**
Rendering components conditionally based on state.

**API Integration:**
Fetching data from external APIs using the fetch function.

**Error Handling:**
Implementing error handling for API requests.

**Event Handling:**
Handling user events such as button clicks.

**State Management:**
Managing component state to dynamically update the UI.

**Styling in React:**
Applying inline styles to React components.

**Dynamic Styling:**
Dynamically changing styles based on component state.

**React Icons:**
Integration and usage of icons from the React Icons library.

**Dynamic Image Loading:**
Loading and displaying images dynamically based on API response.

**Conditional Class Application:**
Applying different CSS classes conditionally.

**Multiple Component Interaction:**
Interaction between multiple components within a project.

**Component Organization:**
Organizing components into folders for better project structure.

## Project List

1. ### Accordion 
   - File: **Accordion.js**
   - Description: The Accordion component is a React-based user interface element that allows users to interact with a list of questions and answers in a collapsible format. This component is designed to be versatile, providing options for both single and multiple selections.
   - Features:
     - **Single Selection Mode:**
     - State Used: `show`
     - Clicking on a question in this mode will expand or collapse the associated answer section.
     - Only one question's answer section can be visible at a time.

     - **Multiple Selection Mode:**
     - States Used:` multipleSelection, multipleShow `
     - Enables users to select multiple questions, expanding or collapsing their respective answer sections.
     - Useful when users want to view answers to multiple questions simultaneously.

     - **Toggle Mode Button:**
     - State Used: `multipleSelection`
     - Includes a button(Enable Multiple Selection) to easily switch between single and multiple selection modes.

2. ### RandomColor
   - File: **RandomColor.js**
   - Description: This React project allows users to generate random colors in either Hex or RGB format. Users can switch between the two formats with the click of a button.
   - Features:  - **Dynamic Color Format:**
     - State Used: `typeOfColor`
     - Users can choose between Hex and RGB color formats by clicking the respective buttons
     - The project utilizes the React state (typeOfColor) to keep track of the selected color format.

     - **Random Color Generation:**
     - States Used:` color `
     - Clicking the "Generate Random Color" button triggers the Random Color Generator to produce a new color based on the selected format (Hex or RGB)
     - The React state (color) is updated to reflect the newly generated color.

     - **Visual Display:**
     - The generated color is visually displayed as the background of the component
     - The corresponding color code (Hex or RGB) is presented below the buttons.

3. ### StarRating
   - File: **StarRating.js**
   - Description:The Star Rating component allows users to rate content with dynamic stars, supporting a customizable number specified through the noOfStars prop. It utilizes React states (rating and hover) for interactive user feedback.
    - Features:  - **Star Rating System:**
     - State Used: `rating, hover`
     - Users can interact with the Star Rating component to provide a rating.
     - The React states (rating and hover) are used to manage the selected rating and the hover state over stars

     - **Interactive Hover Effect:**
     - States Used:` hover `
     - Hovering over stars highlights them, providing a visual indication of the potential rating.
     - The hover state is managed using the React state (hover).

     - **Dynamic Number of Stars:**
     - The component dynamically adjusts to a customizable number of stars specified by the noOfStars prop.
     - Users can click on a star to set the rating, and the stars will visually display the selected rating.


4. ### Weather
   - File: **Weather.js**
   - Description: The Weather App is a React-based application that provides real-time weather information based on user-entered city names. Users can input city names, and the app fetches weather data from the OpenWeatherMap API, displaying temperature, humidity, and wind speed. The component utilizes React states (city, weatherData, error) for dynamic data handling and updates.
 - Features:- **City Input:**
     - State Used: `city`
     - Allows users to input the desired city for weather information.

     - **Search Button:**
     - Calls the handleSearch function on button click to fetch weather data for the entered city.

     - **Weather Data Fetch:**
     - States Used: `weatherData`
     - Fetches weather data from the OpenWeatherMap API based on the entered city using the fetchWeatherData function.
       
     - **Error Handling:**
     - States Used: `error`
     - Provides error handling for invalid city names, displaying an error message if the entered city is not valid.
       
     - **Dynamic background:**
     - Changes the background dynamically based on the weather condition, utilizing the weatherData state to determine the main weather condition.
    
     - **Temprature Display:**
     - Displays the temperature in Celsius (main.temp) with a large font size.

     - **City Name Display:**
     - Displays the name of the city (weatherData.name) with a prominent font size.
       
5. ### ImageSlider
   - File: **ImageSlider.js**
   - Description: The Image Slider component is a React-based gallery that fetches images from a specified URL, allowing users to navigate through the images using left and right arrow buttons. Additionally, the component displays a set of dots below the images to represent each image in the slider.
   - Features:- **Dynamic Image Loading:**
     - State Used: `images`
     - Fetches and maintains images from the provided URL based on the current page and limit.

     - **Arrow Navigation:**
     - States Used:`currentImage`
     - Users can navigate through images using left and right arrow buttons (BsArrowLeftCircleFill, BsArrowRightCircleFill). The state currentImage keeps track of the currently displayed image index

     - **Page Navigation:**
     - States Used: `currentImage`
     - Displays a set of dots below the images. Each dot corresponds to an image, and the state currentImage is used to highlight the current image dot.
       
     - **Loading Indicator:**
     - States Used: `loading`
     - Displays a loading message when images are being fetched. The loading state helps manage the loading indicator.
       
     - **Error Handling:**
     - States Used: `error`
     - Provides an error message if there's an issue fetching images. The error state is used to manage and display error messages.
6. ### LoadMoreData
   - File: `LoadMoreData.js`
   - Description: The LoadMoreData component is a React-based UI element designed to fetch and display a list of products from an API in batches. The component utilizes state and useEffect hook to manage the product data, loading state, error handling, and a dynamic "Load More" button to fetch additional products in increments.

7. ### Menu
   - Folder: `menu`
   - Files: `Menu.js`, `MenuList.js`, `MenuItem.js`
   - Description:
Menu Component

The Menu component is a functional React UI element that provides a simple and organized way to display menus. It takes an array of menu items (menus) as a prop and uses the MenuList to render them. It efficiently employs recursive data rendering to display nested menu items in a clean and organized manner.

8. ### QRGenerator
   - File: `QRGenerator.js`
   - Description: Generates QR uses react-qr-code library.The QRGenerator component is a simple yet effective React-based tool for generating QR codes. It provides users with the ability to input a value and instantly create a corresponding QR code for that input.

9. ### ToggleTheme
   - Folder: `toggleTheme`
   - Files: `ToggleTheme.js`, `UseLocalStorage.js`
   - Description: Components for toggling between light and dark themes using local storage.

10. ### ScrollIndicator
    - File: `ScrollIndicator.js`
    - Description: The ScrollIndicator component is a React-based tool that provides a custom scroll indicator along with data fetching functionality. It displays a progress bar at the top of the page to indicate the user's scroll progress and fetches data from the specified URL.
11. ### Tabs
    - Folder: `tabs`
    - Files: `Tabs.js`, `TabsTest.js`
    - Description: Components for creating and testing tabbed interfaces.

12. ### Custom Popup Modal
    - Folder: `customPopupModal`
    - Files: `Modal.js`, `ModalPopup.js`
    - Description: Components for creating custom popup modals.

13. ### GitHub Profile Finder
    - Folder: `githubProfileFinder`
    - Files: `GithubProfileFinder.js`, `User.js`
    - Description: Components for searching and displaying GitHub profiles.

14. ### Search AutoComplete
    - Folder: `searchAutoComplete`
    - Files: `SearchAutoComplete.js`, `Suggestion.js`
    - Description: Components for a search autocomplete feature. SearchAutoComplete component needs Suggested list to autoccomplete the Search result user is looking for.
15. ### Feature Flags
    - Folder: `feature-flag,Context`
    - Files: `index.js`
    - Description: The FeatureFlags component dynamically renders different features based on feature flags fetched from the data.js. It utilizes the FeatureFlagContext to check the 
      status of each feature and conditionally renders the corresponding component.The FeatureFlagGlobalState component sets up the global context (FeatureFlagContext) and fetches 
      feature flags from the data.js using featureFlagDataServiceCall. It provides the pending and enabled values to its children through the context.

## Usage

Clone the repository and explore each project individually. 



