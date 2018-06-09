import React from 'react'
import { Button } from 'element-react'
//引入样式
import '../../../style/test.css';
import 'element-theme-default'

export default class Clock extends React.Component {
	constructor(props) {
    super(props);
    this.state = {date: new Date()};    // 构造函数是唯一能够初始化 this.state 的地方
    this.handleClick = this.handleClick.bind(this);     //事件绑定
  }
  //这些方法被称作 生命周期钩子函数
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(),1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = () => {
    this.setState({
      date: new Date()  // 应当使用 this.setState() 进行重新渲染组件
    });
  };
  handleClick = (e) => {
      e.preventDefault();
      alert("this is onclick")
  };

  render() {
    return (
      <div>
        <h1 className="test-txt">Hello, world!</h1>
          <Button onClick={this.handleClick}> 请点击我 </Button>

        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }

}


