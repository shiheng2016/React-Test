import React from 'react'

export default class Popper extends React.Component{
    constructor(){
        super();
        this.state = {name:'event handle !'};
    }
    //值得注意的是，通过 bind 方式向监听函数传参，在类组件中定义的监听函数，事件对象 e 要排在所传递参数的后面
    preventPop(name, e){    //事件对象e要放在最后
        e.preventDefault();
        alert(name);
    }
    
    render(){
        return (
            <div>
                <a href="https://reactjs.org" onClick={this.preventPop.bind(this,this.state.name)}></a>
            </div>
        );
    }
}
