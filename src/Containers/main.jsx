/* eslint-disable no-console */
/* eslint-disable max-len */

import React from 'react';
import TimePicker from '../Components/timepicker';
import SetLocation from '../Components/setlocation';
import SetCrop from '../Components/setcrop';
import Tab from '../Components/tab';
import AnsClick from '../Components/ansclick';
import AnsDisplay from '../Components/ansdisplay';
import moment from 'moment';

let list2 = [];

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      cropData:["spinach","tonghao","jyelan","bakchoy(sum)","bakchoy(win)","huangong","amaranth","lettuce","headlettuce"],
      cropDataChinese:["菠菜","茼蒿","芥蘭","小白菜(夏天)","小白菜(冬天)","皇宮菜","莧菜","葉萵苣","結球萵苣"],
      cropIsSelect:{"spinach":false,"tonghao":false,"jyelan":false,"bakchoy(sum)":false,"bakchoy(win)":false,"huangong":false,"amaranth":false,"lettuce":false,"headlettuce":false},
      climateIsSelect:{
        "p":{"spinach":false,"tonghao":false,"jyelan":false,"bakchoy(sum)":false,"bakchoy(win)":false,"huangong":false,"amaranth":false,"lettuce":false,"headlettuce":false},
        "t":{"spinach":false,"tonghao":false,"jyelan":false,"bakchoy(sum)":false,"bakchoy(win)":false,"huangong":false,"amaranth":false,"lettuce":false,"headlettuce":false},
        "w":{"spinach":false,"tonghao":false,"jyelan":false,"bakchoy(sum)":false,"bakchoy(win)":false,"huangong":false,"amaranth":false,"lettuce":false,"headlettuce":false},
        "s":{"spinach":false,"tonghao":false,"jyelan":false,"bakchoy(sum)":false,"bakchoy(win)":false,"huangong":false,"amaranth":false,"lettuce":false,"headlettuce":false}},
      start_year:2019,
      start_month:4,
      start_day:1,
      end_year:2019,
      end_month:6,
      end_day:30,
      id_Crop:[],
      p:[],
      t:[],
      w:[],
      s:[],
      cropPrice:{"spinach":"10","tonghao":"20","jyelan":"30","bakchoy(sum)":"40","bakchoy(win)":"45","huangong":"50","amaranth":"60","lettuce":"70","headlettuce":"80"},
      start_date: moment(),
      end_date: moment(),
      location:"請選擇耕作地點",
      max_score:0,
      max_sequence:[],
      new_maxscore:[],
    };
  }

  setStartDate(date) {
    console.log("start:"+date.toISOString());
    this.setState((prevState) => ({
      ...prevState,
      start_date:date,
      start_year:parseFloat(date.toISOString().substring(0,4)),
      start_month:parseFloat(date.toISOString().substring(5,7)),
      start_day:parseFloat(date.toISOString().substring(8,10))
    }))
    // this.props.setDate("start_year",this.state.start_year)
    // this.props.setDate("start_month",this.state.start_month)
    // this.props.setDate("start_day",this.state.start_day)
  }
 
  setEndDate(date) {
    console.log("end:"+date.toISOString());
    this.setState((prevState) => ({
      ...prevState,
      end_date:date,
      end_year:parseFloat(date.toISOString().substring(0,4)),
      end_month:parseFloat(date.toISOString().substring(5,7)),
      end_day:parseFloat(date.toISOString().substring(8,10))
    }))
    // this.props.setDate("end_year",this.state.end_year)
    // this.props.setDate("end_month",this.state.end_month)
    // this.props.setDate("end_day",this.state.end_day)
  }

  setLocation(location) {
    this.setState((prevState) => ({
      ...prevState,
      location:location
    }))
  }

  switchCrop(item) {
    this.setState((prevState) => ({
      ...prevState,
      cropIsSelect:{
        ...prevState.cropIsSelect,
        [item]:!this.state.cropIsSelect[item]
      }
    }))
  }

  switchClimate(crop,climate) {
    this.setState((prevState) => ({
      ...prevState,
      climateIsSelect:{
        ...prevState.climateIsSelect,
        [climate]:{
          ...prevState.climateIsSelect[climate],
          [crop]:!this.state.climateIsSelect[climate][crop]
        }
      }
    }))
  }

  setPrice(crop,price) {
    this.setState((prevState) => ({
      ...prevState,
      cropPrice:{
        ...prevState.cropPrice,
        [crop]:[price]
      }
    }))
  }

  onAnsClick() {
    this.setState((prevState) => ({
      ...prevState,
      max_sequence:[],
      new_maxscore:[] 
    }));
    list2=[];
    Object
    .keys(this.state.cropIsSelect)
    .filter((item)=>this.state.cropIsSelect[item]===true)
    .map((item) => {
      list2.push(this.state.cropData.indexOf(item))
    })
    list2.sort();

    let list = {"p":[],"t":[],"s":[],"w":[]}
    list2
    .map((item) => {
      this.state.climateIsSelect.p[this.state.cropData[item]]===true?list["p"].push(1):list["p"].push(0)
      this.state.climateIsSelect.t[this.state.cropData[item]]===true?list["t"].push(1):list["t"].push(0)
      this.state.climateIsSelect.s[this.state.cropData[item]]===true?list["s"].push(1):list["s"].push(0)
      this.state.climateIsSelect.w[this.state.cropData[item]]===true?list["w"].push(1):list["w"].push(0)
    })
    let price = []
    Object
    list2
    .map((item) => {
      price.push(parseFloat(this.state.cropPrice[this.state.cropData[item]]))
    })

    console.log(
      this.state.start_year,
      this.state.start_month,
      this.state.start_day,
      this.state.end_year,
      this.state.end_month,
      this.state.end_day,
      list2,
      list["p"],
      list["t"],
      list["s"],
      list["w"],
      price,
      this.state.location,);
    fetch(`http://${this.props.ip}:8001/`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        params: {
          start_year:this.state.start_year,
          start_month:this.state.start_month,
          start_date:this.state.start_day,
          end_year:this.state.end_year,
          end_month:this.state.end_month,
          end_date:this.state.end_day,
          id_Crop:list2,
          p:list["p"],
          t:list["t"],
          s:list["s"],
          w:list["w"],
          cropPrice:price,
          location:this.state.location,
        },
      }),
      
    })
    .then(response => response.json())
    .then((responseJson) => {
      let sequence = [];
      Object
      .values(responseJson.max_sequence)
      .map((item) => {
        sequence.push([Object.values(responseJson.max_sequence).indexOf(item),item[0],item[2]]);
      })
      let Newscore = [];
      Object
      .values(responseJson.new_maxscore)
      .filter(item => responseJson.new_maxscore.indexOf(item)!==0)
      .map((item) => {
        Newscore.push(item);
      })
      this.setState((prevState) => ({
        ...prevState,
        max_score:responseJson.max_score,
        max_sequence:sequence,
        new_maxscore:Newscore 
      }));
    })
    .catch((error) =>{
      console.error(error);
    });
  }

  render() {
    const {activeScreen,switchScreen} = this.props;
    console.log("test_main");
    return (
      <div style={{flex:1,flexDirection:"column",width:"100%",height:"100%"}}>
        <div style={{flex:2}}>
          <Tab activeScreen={activeScreen} switchScreen={switchScreen}/>
        </div>
        <div style={{flex:12,flexDirection:"column",width:"100%"}}>
          <div style={{flex:4,flexDirection:"row",display:"flex",justifyContent:"space-around",alignItems:"flex-start",border:"2px solid gray",borderRadius:"5px",padding:"10px"}}>
            <div style={{flex:1}}>
              <TimePicker innertext="開始時間" date={this.state.start_date} setDate={this.setStartDate.bind(this)}/>
              <TimePicker innertext="結束時間" date={this.state.end_date} setDate={this.setEndDate.bind(this)}/>
            </div>
            <SetLocation innertext="耕作地點" location={this.state.location} setlocation={this.setLocation.bind(this)}/>
          </div>
          <SetCrop 
            style={{flex:6,height:"auto"}}
            cropData={this.state.cropData} 
            cropDataChinese={this.state.cropDataChinese}
            switchCrop={this.switchCrop.bind(this)} 
            cropIsSelect={this.state.cropIsSelect} 
            switchClimate={this.switchClimate.bind(this)}
            climateIsSelect={this.state.climateIsSelect} 
            setPrice={this.setPrice.bind(this)}
            cropPrice={this.state.cropPrice}
            id_Crop={this.state.id_Crop} p={this.state.p} 
            t={this.state.t} w={this.state.w} s={this.state.s} />
        </div>
        <AnsClick onAnsClick={this.onAnsClick.bind(this)} />
        <AnsDisplay idCrop={list2} cropData={this.state.cropDataChinese} max_score={this.state.max_score} max_sequence={this.state.max_sequence} new_maxscore={this.state.new_maxscore}/>
        <div style={{backgroundColor:"gray",padding:5,textAlign:"center"}}>
          <p className={"remarkWords"}>氣候變遷創意實作競賽</p>
          <p className={"remarkWords"}>隊伍名稱：進擊的農夫</p>
          <p className={"remarkWords"}>--程式開發中--</p>
        </div>
      </div>
    );
  }
}

export default Main;
