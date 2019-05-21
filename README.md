# midterm_FarmingHelper
This is the midterm project of WebProg2019. The work is completed together with another [React-Native version](https://github.com/qa4510qa/CCproject), which is used to attend the Climate Change Competition2019. 

## Overview
FarmingHelper is a cross-platform app for agriculture.
Users can get the optimized answer of when and what to grow simply by entering some information, the available dates, location, considering crops, considering climate factors, crop prices, ...etc.
After entering the data and clicking "Enter", the answer, together with the alternative price of each considering crop, will come up.
FarmingHelper also provides future climate data, which is generated by ourself using the method from SDLab and the data from Central Weather Bureau, and crop data for users to refer to when cropping.
The application supports MacOS, Windows, and IOS now.
* Note:The work is under developing, so there are still some errors in back-end.

## Framework used
* [React](https://reactjs.org/) - The web framework used
* [React-Native](https://facebook.github.io/react-native/) - The framework used to build native mobile app in IOS 
* [Node](https://nodejs.org/) - The run-time JavaScript environment for developing back-end services.
* [Express](https://expressjs.com) - A node package for handling HTTP request with a series of middlewares.
* [Electron](https://electronjs.org/) - The framework used to build cross-platfrom apps

## How to build
For MacOS and Windows
1. Please find the server machine and follow [this](https://github.com/qa4510qa/midterm_FarmingHelperServer) README to deploy the server.
2. Turn back to your local computer.
3. Make sure you have NPM() and Node() installed.
4. `cd midterm_FarmingHelper`
5. `npm i`
6. In src/const/AppConfig.const.js, set SERVER_IP to `<your server's IP or domain>`.
7. `npm start` to run in debugging mode.
8. `npm run make` to generate executable APP for your platform.

For IOS (developing in Mac)
1. Please find the server machine and follow [this](https://github.com/qa4510qa/midterm_FarmingHelperServer) README to deploy the server.
2. Turn back to your local computer.
3. Make sure you have NPM(^6.4.1) and Node(^10.15.3) installed.
4. Please follow the [React-Native Getting Started](https://facebook.github.io/react-native/docs/getting-started) to make a environment for developing React-Native App.
5. `cd CCproject`
6. In src/const/AppConfig.const.js, set SERVER_IP to `<your server's IP or domain>`.
7. `react-native run ios` to run in debugging mode.

* Note:When you run `react-native run ios`, an Xcode simulator will pop up and simulate your app on an iphone.

## How to use
* Page "關於我們": This is the introduction page. We introduce how to use the APP here.
* Page "試算": This is the main page. You can calculate the optimal answer of cropping here.
* Page "未來氣候": We provide the climate data here.
* Page "作物資料": We provide the crop data here.
## Credits
* [Electron Forge](https://electronforge.io) for the Electron + React boilerplate
* React-Native boilplate

* Statistical method and history climate data from [SDLab](http://sdl.ae.ntu.edu.tw)
* Climate forecast report from [Central Weather Bureau](https://www.cwb.gov.tw/V7/climate/climate_info/forecast/forecast_2.html)

## 我的貢獻：
1. 除了後端演算法撰寫以外的所有程式開發
2. 後端氣候資料統計分析及產出
## 心得：
當初會修這門課的主要原因就是為了要開發此APP作為[氣候變遷創意實作競賽](https://climatechange.tw/Creative/CompetitionMethod)的成果，剛好遇到這堂課需要一個期中專案，因此後來就直接將成果運用React架構進一步做成電腦版本。競賽在5/18圓滿落幕，而我也真的成功運用這堂課學到的東西做出我們當初提案的目標！過程中真的困難重重，原先我只是對HTML及CSS有稍微了解，甚至連JavaScript的語法都不熟，經過每個禮拜的密集惡補加上課堂作業的練習及不斷的找人問問題，現在已經成功運用React及React-Native開發出手機版、電腦版App，回想這短短不到三個月的時間，自己也覺得難以置信！感謝所有幫助我的人！
當然，還有許多應該要改進的地方，前端頁面需要刻的更精緻、後端演算需要整理的更乾淨一點，還有資料應該連上MongoDB做更好的儲存...等，我會持續修改這項專案，希望最終能真的應用在我的研究領域。