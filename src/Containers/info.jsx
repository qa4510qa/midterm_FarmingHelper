import React from 'react';
import InfoDisplay from '../Components/infoDisplay';
import Tab from '../Components/tab';


class Info extends React.Component {
  render() {
    const {activeScreen,switchScreen} = this.props;
		return (
			<div className={{flex:1, flexDirection:'column'}}>
        <Tab activeScreen={activeScreen} switchScreen={switchScreen}/>
        <div className={{flex:12}}>
          <InfoDisplay switchScreen={switchScreen}/>
          <div style={{backgroundColor:"gray",paddingTop:10,padding:5,textAlign:"center"}}>
            <p className={"remarkWords"}>氣候變遷創意實作競賽</p>
            <p className={"remarkWords"}>隊伍名稱：進擊的農夫</p>
            <p className={"remarkWords"}>--程式開發中--</p>
          </div>
        </div>
      </div>
		);
  }
}

export default Info;
