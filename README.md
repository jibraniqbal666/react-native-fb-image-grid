# react-native-fb-image-grid
### This is the very early alpha age of this library, and the code is very dirty, but all PRs are welcome.

<a href="https://twitter.com/intent/follow?screen_name=jibraniqbal666">
        <img src="https://img.shields.io/twitter/follow/jibraniqbal666.svg?style=social&logo=twitter"
            alt="follow on Twitter"></a>

## NPM

- stable release version: ![version](https://img.shields.io/badge/version-0.0.5-blue.svg?cacheSeconds=2592000)
- package downloads: ![downloads](https://img.shields.io/badge/downloads-175%2Fweek-brightgreen.svg?cacheSeconds=2592000)
- [![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
- https://www.npmjs.com/package/react-native-fb-image-grid

## Github
- https://github.com/jibraniqbal666/react-native-fb-image-grid

## Install

`npm i react-native-fb-image-grid`.

## Usage

__NOTE: Container that you are putting your FBGrid Width and Height must be calculated, or it will not appear.__

```javascript

import FbGrid from "react-native-fb-image-grid";

     <FbGrid
            images={[
              "https://facebook.github.io/react-native/docs/assets/favicon.png",
              "https://facebook.github.io/react-native/docs/assets/favicon.png",
              "https://facebook.github.io/react-native/docs/assets/favicon.png",
              "https://facebook.github.io/react-native/docs/assets/favicon.png",
              "https://facebook.github.io/react-native/docs/assets/favicon.png",
              "https://facebook.github.io/react-native/docs/assets/favicon.png"
            ]}
            onPress={onPress}
          /> 
          
    const onPress = (url, index, event) => {
      // url and index of the image you have clicked alongwith onPress event.
    }
```
## ScreenShot
<img src="https://github.com/jibraniqbal666/react-native-fb-image-grid/blob/master/screenshots/Simulator%20Screen%20Shot%20-%20iPhone%20X%20-%202019-04-16%20at%2018.09.53.png?raw=true" width="200">

   
