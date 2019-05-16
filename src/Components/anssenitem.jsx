import React from 'react';

/* eslint-disable no-console */
/* eslint-disable max-len */

class AnsSenItem extends React.Component {
  render() {
    const {idx,item,cropData,idCrop} = this.props;
		console.log(idCrop);
		if(item === "不建議種植" || item === "目前選定種植作物"){
			return(
				<div style={{flex:1,display:"flex",flexDirection:"row"}}>
					<p className={"ansContent"} style={{marginLeft:"10px",paddingRight:"50px"}}>{cropData[idCrop[idx]]} :</p>
					<p className={"ansContent"} style={{paddingRight:"50px"}}> {item} </p>
				</div>
			);
		}else{
			return (
				<div style={{flex:1,display:"flex",flexDirection:"row"}}>
					<p className={"ansContent"} style={{marginLeft:"10px"}}>{cropData[idCrop[idx]]} : </p>
					<p style={{flex:6,textAlign:"left"}} className={"ansContent"}>{item} 元/平方公尺</p>
				</div>
			);
		}
  }
}

export default AnsSenItem;
