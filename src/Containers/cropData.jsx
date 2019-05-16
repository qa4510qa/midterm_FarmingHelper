/* eslint-disable no-console */
/* eslint-disable max-len */

import React from 'react';
import Tab from "../Components/tab";
import CropDisplay from '../Components/cropdisplay';

class CropData extends React.Component {
  constructor() {
    super();
    this.state = {
      crop_data:{},
      crop_list:["spinach","tonghao","jyelan","bakchoy","huangong","amaranth","lettuce","headlettuce"],
    };
  }
  
  LoadData() {
		fetch(`http://${this.props.ip}:8001/CropData`, {
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
        crop_data:responseJson,
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
    const {switchScreen} = this.props;
		return (
			<div style={{flex:1, flexDirection:'column'}}>
        <Tab activeScreen={this.props.activeScreen} switchScreen={switchScreen}/>
        <CropDisplay crop_data={this.state.crop_data} crop_list={this.state.crop_list}/>
        <div style={{backgroundColor:"gray",marginTop:"10px",padding:"5px",textAlign:"center"}}>
          <p className={"remarkWords"}>氣候變遷創意實作競賽</p>
          <p className={"remarkWords"}>隊伍名稱：進擊的農夫</p>
          <p className={"remarkWords"}>--程式開發中--</p>
        </div>
      </div>
		);
	}
}

export default CropData;
