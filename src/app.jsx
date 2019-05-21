/* eslint-disable no-console */
/* eslint-disable max-len */
import React from 'react';
import Info from './Containers/info';
import Main from './Containers/main';
import FutureClimate from './Containers/futureClimate';
import CropData from './Containers/cropData';
// import StartScreen from './Containers/startScreen';
import AppConfig from './const/AppConfig.const';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeScreen: 'Main',
      start_year: 2019,
      start_month: 3,
      start_day: 1,
      end_year: 2019,
      end_month: 5,
      end_day: 31,
      ip: AppConfig.SERVER_IP,
    };
  }

  setDate(item, value) {
    this.setState(prevState => ({
      ...prevState,
      [item]: [value],
    }));
  }

  setServerIP(ip) {
    console.log(this.state.ip);
    console.log(ip);
    this.setState(prevState => ({
      ...prevState,
      ip:ip,
    }));
  }

  switchScreen(toScreen) {
    this.setState(prevState => ({
      ...prevState,
      activeScreen: toScreen,
    }));
  }

  render() {
    console.log("test_app");
    // return (<Main ip={this.state.ip} activeScreen={this.state.activeScreen} switchScreen={(toScreen) => { this.switchScreen(toScreen); }} setDate={this.setDate} />);
    // return (<StartScreen ip={this.state.ip} setServerIP={this.setServerIP} switchScreen={(toScreen) => { this.switchScreen(toScreen); }} />);
    switch (this.state.activeScreen) {
      // case '':
      //   return (<StartScreen ip={this.state.ip} setServerIP={this.setServerIP.bind(this)} switchScreen={(toScreen) => { this.switchScreen(toScreen); }} />);
      case 'Info':
        return (<Info activeScreen={this.state.activeScreen} switchScreen={(toScreen) => { this.switchScreen(toScreen); }} />);
      case 'Main':
        return (<Main ip={this.state.ip} activeScreen={this.state.activeScreen} switchScreen={(toScreen) => { this.switchScreen(toScreen); }} setDate={this.setDate.bind(this)} />);
      case 'FutureClimate':
        return (<FutureClimate
          ip={this.state.ip}
          activeScreen={this.state.activeScreen}
          switchScreen={(toScreen) => { this.switchScreen(toScreen); }}
          start_year={this.state.start_year}
          start_month={this.state.start_month}
          start_day={this.state.start_day}
          end_year={this.state.end_year}
          end_month={this.state.end_month}
          end_day={this.state.end_day}
        />);
      case 'CropData':
        return (<CropData ip={this.state.ip} activeScreen={this.state.activeScreen} switchScreen={(toScreen) => { this.switchScreen(toScreen); }} />);
      default:
        console.error(`Navigation error: ${this.state.activeScreen}`);
        return (<Main />);
    }
  }
}

export default App;
