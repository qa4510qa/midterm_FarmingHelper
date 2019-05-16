/* eslint-disable no-console */
/* eslint-disable max-len */

import React from 'react';
import CropItem from './cropitem';


class SetCrop extends React.Component {
  render() {
    const {cropData, switchCrop, cropIsSelect, switchClimate, climateIsSelect, setPrice, cropPrice, cropDataChinese, id_Crop, p, t, w, s } = this.props;
    return (
      <div style={{flex:1,border:"2px solid gray",flexDirection:"column",display:"flex"}}>
        <p style={{flex:1}} className={"picker_title"}>作物與氣候因子設定</p>
        <div style={{flexDirection:"row",flex:1,display:"flex",justifyContent:"space-around",width:"100%"}}>
          <div style={{flex:2,display:"flex"}} />
          <p style={{flex:1.5,display:"flex",paddingLeft:"0px",fontWeight:"bold"}}>作物</p>
          <p style={{flex:1.2,display:"flex",paddingLeft:"0px",fontWeight:"bold"}}>售價</p>
          <div style={{flex:2,display:"flex"}} />
          <p style={{flex:1.6,display:"flex",paddingLeft:"0px",fontWeight:"bold"}}>降雨量</p>
          <p style={{flex:1.5,display:"flex",paddingLeft:"0px",fontWeight:"bold"}}>溫度</p>
          <p style={{flex:1.3,display:"flex",paddingLeft:"0px",fontWeight:"bold"}}>風速</p>
          <p style={{flex:1.2,display:"flex",paddingLeft:"0px",fontWeight:"bold"}}>日照量</p>
        </div>
        {cropData.map((item,idx) => (
          <CropItem 
          style={{flex:1}}
          key={item} 
          item={item} 
          name={cropDataChinese[idx]}
          switchCrop={switchCrop} 
          cropIsSelect={cropIsSelect[item]} 
          climateIsSelect={{"p":climateIsSelect["p"][item],"t":climateIsSelect["t"][item],"w":climateIsSelect["w"][item],"s":climateIsSelect["s"][item]}}
          switchClimate={switchClimate}
          setPrice={setPrice}
          cropPrice={cropPrice[item]}
        /> 
        )
        )}
        
        
        {/* <div style={{flex:1,flexDirection:"row"}}>
        </div>
        <div style={{flex:1,flexDirection:"row"}}>
        </div>
        <div style={{flex:1,flexDirection:"row"}}>
        </div> */}

      </div>
    );
  }
}

export default SetCrop;
