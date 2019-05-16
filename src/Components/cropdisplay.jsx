/* eslint-disable no-console */
/* eslint-disable max-len */

import React from 'react';

const CROP_IMGS = {
	spinach:'Public/img/spinach.jpg',
	tong_hao:'Public/img/tonghao.jpg',
	jye_lan:'Public/img/jyelan.jpg',
	bak_choy:'Public/img/bakchoy.jpg',
	huan_gong:'Public/img/huangong.jpg',
	shian_tsai:'Public/img/amaranth.jpg',
	leaves_lettuce:'Public/img/lettuce.jpg',
	lettuce:'Public/img/headlettuce.jpg',
};

class CropDisplay extends React.Component {
  render() {
    const {crop_data} = this.props;
		const cropDataList = Object.entries(crop_data).map(([engName, item]) => ({...item, engName, imgSrc: CROP_IMGS[engName]}));
		
		return (
			<div style={{flex:1,flexDirection:"column",display:"flex"}}>
				{cropDataList.map((item,idx) => (
					<div key={item+idx} style={{borderBottomColor:"green",borderBottomWidth:"1px",padding:"5px"}}>
						<p className={"cropDisplayTitle"}>{item.name}</p>
            <div style={{flexDirection:"row",display:"flex",flex:1,margin:"2px"}}>
              <div style={{flex:6,flexDirection:"column",display:"flex"}}>
              {item.illustration.map((element) => (
                <div key={element} style={{flexDirection:"row",display:"flex",paddingBottom:"20px",margin:"10px",flex:1}}>
                  <p style={{flex:2,fontSize:"20px",fontWeight:"bold",textAlign:"center"}}>{element.substring(0,2)}</p>
                  <p style={{flex:8,fontSize:"18px"}}>{element.substring(3,element.length)}</p>
                </div>
              ))}
              </div>
              <div style={{flex:4}}>
                <img style={{width:"300px",height:"300px"}} src={item.imgSrc}/>
              </div>
						</div>
					</div>
				))}
			</div>
		);
  }
}

export default CropDisplay;
