/* eslint-disable no-console */
/* eslint-disable max-len */

import React from 'react';

class ClimateDisplay extends React.Component {
  render() {
    const {future_weather} = this.props;
		console.log(future_weather);
		return (
			<div>
				<div style={{flexDirection:"row",display:"flex",flex:1,margin:"2px",textAlign:"center"}}>
					<p className={"climateDisplayTitle"}>日期</p>
					<p className={"climateDisplayTitle"}>溫度</p>
					<p className={"climateDisplayTitle"}>降雨</p>
					<p className={"climateDisplayTitle"}>日照</p>
					<p className={"climateDisplayTitle"}>風速</p>
				</div>
				<div style={{flexDirection:"row",display:"flex",padding:"2px",border:"1px gray solid",borderRadius:"1px"}}>
					<p style={{flex:1,fontSize:"25px",textAlign:"center"}}></p>
					<p style={{flex:1,fontSize:"25px",textAlign:"center"}}>(°Ｃ)</p>
					<p style={{flex:1,fontSize:"25px",textAlign:"center"}}>(mm)</p>
					<p style={{flex:1,fontSize:"25px",textAlign:"center"}}>(hr)</p>
					<p style={{flex:1,fontSize:"25px",textAlign:"center"}}>(m/s)</p>
				</div>
				{future_weather
				.filter(i => future_weather.indexOf(i)!==0)
				.map((item,idx) => (
					<div key={item+idx} style={{flexDirection:"row",display:"flex",border:"1px gray solid",borderRadius:"1px",paddingLeft:"8px",paddingRight:"5px"}}>
						{item.map((element) => (
							<p key={item+element} style={{flex:1,fontSize:"25px",textAlign:"center"}}>{element}</p>
						))}
					</div>
				))}
			</div>
		);
  }
}

export default ClimateDisplay;
