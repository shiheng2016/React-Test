import React, { Component } from 'react';
import logo from './logo.svg'
import './style/App.css'

//单个组件引入
import Index from './components/api/jsx/index'
import Clock from './components/api/state/Clock';

// import Popper from './components/api/event/Popper';
// import Toggle from './components/api/event/Toggle';
// import LoggingButton from './components/api/event/LoggingButton';

// import CounterButton from './components/api/props/CounterButton';
import HidePage from './components/api/props/HidePage';

import Calculator from './components/api/statusup/Calculator';
// import Rlayout from './components/basic/Rlayout';
// import List from './components/basic/List';
// import MultiInput from './components/basic/MultiInput';
import NameForm from './components/basic/NameForm';
import LoginControl from './components/basic/LoginControl';



export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />   
        </header><br/>
        <div className="container">
            <div className="content">
                <h1 className="App-title">Welcome to React ，Hello World !</h1>
                <Index/>
                <Clock/>
                <LoginControl/>
                <HidePage/><hr/>
                <NameForm/>
                <Calculator/>
            </div>
        </div>
      </div>
    );
  }
}
