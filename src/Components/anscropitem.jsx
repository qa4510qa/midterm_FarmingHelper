import React from 'react';

/* eslint-disable no-console */
/* eslint-disable max-len */

class AnsCropItem extends React.Component {
  render() {
    const {idx,date,crop,cropData} = this.props;
		console.log(idx,date,crop);
		return (
			<div>
				<p style={{fontSize:"25px",color:"dimgray",marginLeft:20,padding:2,fontWeight:"bold"}}>第{idx+1}次耕種</p>
				<p className={"ansContent"}>開始時間：{date}</p>
				<p className={"ansContent"}>項目：{cropData[crop]}</p>
			</div>
		);
  }
}

export default AnsCropItem;
