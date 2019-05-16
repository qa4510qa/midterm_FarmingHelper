/* eslint-disable no-console */
/* eslint-disable max-len */

import React from 'react';


class StartScreen extends React.Component {
	render() {
    const { setServerIP, switchScreen, ip } = this.props;
		console.log("test_startScreen"+ip);
		return (
			<div className={'start-screen_wrapper'}>
				{/* <img src={'Public/img/farm.jpg'} className={{width: '100%', height: '105%'}} /> */}
					<div className={'start-screen_title_div'}><p className={'start-screen_title_p'}>氣候變遷創意競賽</p></div>
					<div style={{flex:2,textAlign:"center"}}><p style={{fontSize:20,paddingLeft:5}}>Please enter your server IP</p></div>
					<div style={{textAlign:"center"}}>
						<input
						type="text"
						className={'start-screen_IP_input'}
            onChange={(event) => setServerIP(event.target.value)}
            value={ip}
						/>
					</div>
					<div style={{textAlign:"center"}}>
						<button 
						className={'start-screen_button'} 
						onClick={() => switchScreen("Main")}>
							Enter
						</button>
					</div>
					
					<div style={{flex:8}}></div>
      </div>
		);
	}
}

export default StartScreen;