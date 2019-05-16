import React from 'react';

class InfoDisplay extends React.Component {
  render() {
		const {switchScreen} = this.props;
    return (
      <div>
				<div style={{paddingBottom:10,border:"2px gray solid"}}>
					<p className={"InfoDisplayTitle"}>動機</p>
					<p className={"InfoDisplayContent"}>{"\t"}我們是來自台灣大學生工系四年級的學生，有感於近來極端氣候下，農民耕作常常面對非常大的氣候風險，因此開發農纖合度APP希望增加農民面對氣候的調適能力，讓農民能藉此APP評估種植作物的風險，藉由調整農作物種植日期、順序避開風險，降低農作物損失及促使利潤最大化。 </p>
				</div>
				<div>
					<div style={{border:"2px gray solid"}}>
						<p className={"InfoDisplayTitle"}>分頁介紹</p>
						<div style={{borderBottom:"2px gray solid",padding:"5px"}}>
							<div style={{margin:"5px",flexDirection:"row"}}>
								<button style={{flex:3,display:"flex",flexDirection:"row",borderColor:"black",borderWidth:1,borderRadius:5}} onClick={()=>{switchScreen("Info")}}>
									<img style={{alignSelf:"center"}} src={'Public/img/Info.png'} />
									<p className={"InfoDisplaySubtitle"}>關於我們</p>
								</button>
								<div style={{flex:7,display:"flex",flexDirection:"row",paddingLeft:"5px"}}>
									<p style={{textAlign:"left",fontSize:"20px",margin:"5px",marginTop:"10px",color:"black"}}>主要功能：</p>
									<p className={"InfoDisplayContent"}>
										動機與APP使用說明。
									</p>
								</div>
							</div>
						</div>

						<div style={{borderBottom:"2px gray solid",padding:"5px"}}>
							<div style={{margin:5,flexDirection:"row"}}>
								<button style={{flex:3,display:"flex",flexDirection:"row",borderColor:"black",borderWidth:1,borderRadius:5}} onClick={()=>{switchScreen("Main")}}>
									<img style={{alignSelf:"center"}} src={'Public/img/Main.png'} />
									<p className={"InfoDisplaySubtitle"}>試算</p>
								</button>
								<div style={{flex:7,display:"flex",flexDirection:"row",paddingLeft:5}}>
									<p style={{textAlign:"left",fontSize:20,margin:5,marginTop:10,color:"black"}}>主要功能：</p>
									<p className={"InfoDisplayContent"}>
										根據您的輸入值試算此農地最佳種植組合。
									</p>
								</div>
							</div>
							<div style={{marginBottom:5}}>
								<div>
									<p style={{textAlign:"left",fontSize:20,margin:10,color:"black"}}>輸入資料：</p>
									<div>
										<img style={{alignSelf:"flex-end",width:350,height:400}} src={'Public/img/MainDisplayFinal.jpeg'} />
									</div>
									<div >
										<p className={"InfoDisplayContentOl"}>1.	日期:</p>
										<p className={"InfoDisplayContentLi"}>由此輸入您的農地可以耕種的時間。</p>
									</div>
									<div >
										<p className={"InfoDisplayContentOl"}>2.	地點:</p>
										<p className={"InfoDisplayContentLi"}>選擇您的農地位置。</p>
									</div>
									<div >
										<p className={"InfoDisplayContentOl"}>3.	作物選擇:</p>
										<p className={"InfoDisplayContentLi"}>分別有菠菜、茼蒿、芥藍菜、夏天種小白菜、冬天種小白菜、皇宮菜、葉萵苣、結球萵苣、莧菜等作物可以選擇，另外也需自行輸入要種植的作物價格。</p>
									</div>
									<div >
										<p className={"InfoDisplayContentOl"}>4.	氣候因子:</p>
										<p className={"InfoDisplayContentLi"}>每種作物各有四種氣候因子，分別為雨量、溫度、風速、日照，請您選擇種植過程中各作物需要考慮的氣候因子。</p>
									</div>
									<div >
										<p className={"InfoDisplayContentOl"}>5.	確定鈕:</p>
										<p className={"InfoDisplayContentLi"}>當全部的輸入都結束後，即可按下確定鈕。</p>
									</div>
								</div>
							</div>
							<div style={{marginBottom:5}}>
								<div>
									<p style={{textAlign:"left",fontSize:20,margin:10,color:"black"}}>試算結果：</p>
									<div>
										<img style={{alignSelf:"flex-end",width:350,height:400}} src={'Public/img/OptAnsDisplayFinal.jpeg'} />
									</div>
									<div >
										<p className={"InfoDisplayContentOl"}>1.	最高總分:</p>
										<p className={"InfoDisplayContentLi"}>此總分為在各種氣候因子的限制之下所得出來的總分，若未來氣候符合您所選擇的作物生長所需之氣候條件，則分數較高，反之則分數較低。</p>
									</div>
									<div >
										<p className={"InfoDisplayContentOl"}>2.	最佳耕作時間:</p>
										<p className={"InfoDisplayContentLi"}>此呈現的是最終產生最大利潤的耕作組合，也就是說在這段農地可種植的時間內，您每一輪耕作開始的時間以及應該種植的作物。</p>
									</div>
									<div >
										<p className={"InfoDisplayContentOl"}>3.	替換價格:</p>
										<p className={"InfoDisplayContentLi"}>由此可知當其他作物(非目前最佳化種植決策之作物)調整其價格至多少元時，其種植決策可以考慮種此作物以獲得最大利潤。</p>
									</div>
								</div>
							</div>
						</div>
						
						<div style={{borderBottom:"2px gray solid",padding:"5px"}}>
							<div style={{margin:5,flexDirection:"row"}}>
								<button style={{flex:3,display:"flex",flexDirection:"row",borderColor:"black",borderWidth:1,borderRadius:5}} onClick={()=>{switchScreen("FutureClimate")}}>
									<img style={{alignSelf:"center"}} src={'Public/img/Climate.png'}/>
									<p className={"InfoDisplaySubtitle"}>未來氣候</p>
								</button>
								<div style={{flex:7,display:"flex",flexDirection:"row",paddingLeft:5}}>
									<p style={{textAlign:"left",fontSize:20,margin:5,marginTop:10,color:"black"}}>主要功能：</p>
									<p className={"InfoDisplayContent"}>
										呈現未來季長期預測之氣候資料。
									</p>
								</div>
							</div>
							
							<div style={{marginBottom:5}}>
								<div style={{flexDirection:"row"}}>
								</div>
								<div>
									<p style={{textAlign:"left",fontSize:20,margin:10,color:"black"}}>說明：</p>
									<div >
										<p className={"InfoDisplayContentLi"}>此頁面呈現短期未來氣候預測資料，因採用中央氣象局季長期氣候預測資料進行降尺度，故目前所產生的未來氣候資訊僅有4-6月，在我們可以取得的資料當中，僅納入溫度、降雨、日照、風速作為影響作物生長的氣候因子，因而只呈現該四種氣候資料。</p>
									</div>
								</div>
							</div>
						</div>

						<div style={{padding:"5px"}}>
							<div style={{margin:5,flexDirection:"row"}}>
								<button style={{flex:1,display:"flex",flexDirection:"row",borderColor:"black",borderWidth:1,borderRadius:5,flex:3}} onClick={()=>{switchScreen("CropData")}}>
									<img style={{alignSelf:"center"}} src={'Public/img/CropData.png'} />
									<p className={"InfoDisplaySubtitle"}>作物資料</p>
								</button>
								<div style={{flex:7,display:"flex",flexDirection:"row",paddingLeft:5}}>
									<p style={{textAlign:"left",fontSize:20,margin:5,marginTop:10,color:"black"}}>主要功能：</p>
									<p className={"InfoDisplayContent"}>
										呈現資料庫內有的各個作物所需的簡略種植方式。
									</p>
								</div>
							</div>
							
							<div style={{marginBottom:10}}>
								<div style={{flexDirection:"row"}}>
								</div>
								<div>
									<p style={{textAlign:"left",fontSize:20,margin:10,color:"black"}}>說明：</p>
									<div >
										<p className={"InfoDisplayContentLi"}>主要以用土、播種、培育、收穫四大要項去呈現各個作物的簡略種植的注意事項，而目前的作物有菠菜、茼蒿、芥藍、夏天種小白菜、冬天種小白菜、皇宮菜、葉萵苣、結球萵苣、莧菜這幾種的說明，供您作種植參考。</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
			</div>
    );
  }
}

export default InfoDisplay;
