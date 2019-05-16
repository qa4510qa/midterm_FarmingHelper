import React from 'react';


class Tab extends React.Component {
  render() {
    const {switchScreen,  activeScreen} = this.props;
		return (
			<div style={{flex:1,flexDirection:"row",width:"100%",display:"flex"}}>
        <button className={"tab_button"} onClick={()=>{switchScreen("Info")}}>
          <img src={'Public/img/Info.png'} className={activeScreen==="Info"?"tab_img_clicked":"tab_img_unclicked"}/>
          <p className={activeScreen==="Info"?"tab_text_clicked":"tab_text_unclicked"}>關於我們</p>
        </button>
        <button className={"tab_button"} onClick={()=>{switchScreen("Main")}}>
          <img src={'Public/img/Main.png'} className={activeScreen==="Main"?"tab_img_clicked":"tab_img_unclicked"}/>
          <p className={activeScreen==="Main"?"tab_text_clicked":"tab_text_unclicked"}>試算</p>
        </button>
        <button className={"tab_button"} onClick={()=>{switchScreen("FutureClimate")}}>
          <img src={'Public/img/Climate.png'} className={activeScreen==="FutureClimate"?"tab_img_clicked":"tab_img_unclicked"}/>
          <p className={activeScreen==="FutureClimate"?"tab_text_clicked":"tab_text_unclicked"}>未來氣候</p>
        </button>
        <button className={"tab_button"} onClick={()=>{switchScreen("CropData")}}>
          <img src={'Public/img/CropData.png'} className={activeScreen==="CropData"?"tab_img_clicked":"tab_img_unclicked"}/>
          <p className={activeScreen==="CropData"?"tab_text_clicked":"tab_text_unclicked"}>作物資料</p>
        </button>
			</div>
		);
  }
}

export default Tab;
