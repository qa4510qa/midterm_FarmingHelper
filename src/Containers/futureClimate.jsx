/* eslint-disable no-console */
/* eslint-disable max-len */

import React from 'react';
import Tab from "../Components/tab";
import ClimateDisplay from '../Components/climatedisplay';

class FutureClimate extends React.Component {
  constructor() {
    super();
    this.state = {
      future_weather:[]
    };
	}
	
	LoadData() {
		fetch(`http://${this.props.ip}:8001/FutureClimate`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(),
    })
    .then(response => response.json())
    .then((responseJson) => {
			this.setState((prevState) => ({
        ...prevState,
        future_weather:responseJson.future_weather,
			}));
		})
    .catch((error) =>{
      console.error(error);
		});
	}

  componentDidMount() {
    this.LoadData();
  }

	render() {
		const {switchScreen,start_year,start_month,start_day,end_year,end_month,end_day} = this.props;
		return (
			<div style={{flex:1, flexDirection:'column'}}>
        <Tab activeScreen={this.props.activeScreen} switchScreen={switchScreen}/>
        <ClimateDisplay future_weather={this.state.future_weather}/>
        <div style={{backgroundColor:"gray",marginTop:10,padding:5,textAlign:"center"}}>
          <p className={"remarkWords"}>氣候變遷創意實作競賽</p>
          <p className={"remarkWords"}>隊伍名稱：進擊的農夫</p>
          <p className={"remarkWords"}>--程式開發中--</p>
        </div>
      </div>
		);
	}
}

export default FutureClimate;
