import React from 'react';
import AnsCropItem from './anscropitem';
import AnsSenItem from './anssenitem';

class AnsDisplay extends React.Component {
  render() {
    const {cropData, max_score, max_sequence, new_maxscore, idCrop} = this.props;
		// console.log(new_maxscore);
    // console.log(max_sequence);
    
    return (
      <div style={{paddingLeft:"5px",paddingRight:"5px",backgroundColor:"#afeeee",paddingBottom:"10px",borderRadius:"5px"}}>
        <p className={"picker_title"}>試算結果</p>
				<div style={{flexDirection:"row"}}>
					<p style={{fontSize:"18px",color:"red",paddingLeft:"10px"}}>最高總分:{Math.round(max_score,-2)}</p>
				</div>
				<div style={{border:"1px gray solid",borderRadius:"5px",padding:"2px",marginTop:"2px",paddingLeft:"10px"}}>
					<p className={"ansTitle"}>最佳耕作時間:</p>
					{max_sequence.map((item) => {
						return (
							<AnsCropItem key={"AnsCropItem_"+item} cropData={cropData} idx={item[0]} date={item[1]} crop={item[2]}/>
						);
					})}
				</div>
				<div style={{border:"1px gray solid",borderRadius:"5px",padding:"2px",marginTop:"2px",paddingLeft:"10px"}}>
					<div style={{display:"flex",flex:1,flexDirection:"row"}}>
            <p className={"ansTitle"}>替換價格:</p>
            <p style={{fontSize:"25px",color:"dimgray",marginLeft:"15px",padding:"2px"}}>（各作物成為最適種植作物所需之售價）</p>
          </div>
					{new_maxscore.map((item,idx) => (
						<AnsSenItem key={"AnsSenItem"+idx} cropData={cropData} idx={idx} item={item} idCrop={idCrop}/>
					))}
				</div>
			</div>
    );
  }
}

export default AnsDisplay;
