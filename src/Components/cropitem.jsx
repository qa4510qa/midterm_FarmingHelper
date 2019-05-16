/* eslint-disable no-console */
/* eslint-disable max-len */

import React from 'react';
import Switch from "react-switch";

class CropItem extends React.Component {
  render() {
    const {item, name, switchCrop, cropIsSelect, climateIsSelect, switchClimate, setPrice, cropPrice} = this.props;
    console.log(name+":"+cropIsSelect);

    return (
      <div style={{flex:1,flexDirection:"row",display:"flex",border:"1px gray solid",borderRadius:"10px",margin:"2px",padding:"2px",textAlign:"center"}}>
        <div style={{flex:1, marginLeft:10,marginTop:10}}>
          <Switch onChange={() => switchCrop(item)} checked={cropIsSelect}/>
        </div>
        <p className={"cropItemTitle"}>{name}</p>
        <div style={{flexDirection:"row",flex:2,display:"flex"}}>
          <input
            type="text"
            disabled={!cropIsSelect}
            style={{flex:1,height:30, width:60, borderColor: 'gray', borderWidth: 1, borderRadius: 10, marginRight:20, paddingLeft:10,marginTop:10}}
            onChange={(price) => setPrice(item,price)}
            value={cropPrice}
          />
          <p style={{flex:4,display:"flex",textAlign:"left",marginLeft:5}}>元/平方公尺</p>
        </div>
        <div style={{flex:4,justifyContent:"space-around",display:"flex",marginTop:10}}>
          <Switch style={{flex:1,alignSelf:"center"}} disabled={!cropIsSelect} onChange={() => switchClimate(item,"p")} checked={climateIsSelect["p"]}/>
          <Switch style={{flex:1,alignSelf:"center"}} disabled={!cropIsSelect} onChange={() => switchClimate(item,"t")} checked={climateIsSelect["t"]}/>
          <Switch style={{flex:1,alignSelf:"center"}} disabled={!cropIsSelect} onChange={() => switchClimate(item,"w")} checked={climateIsSelect["w"]}/>
          <Switch style={{flex:1,alignSelf:"center"}} disabled={!cropIsSelect} onChange={() => switchClimate(item,"s")} checked={climateIsSelect["s"]}/>
        </div>
      </div>
    );
  }
}

export default CropItem;
