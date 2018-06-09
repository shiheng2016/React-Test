import React from 'react'

export default class LoggingButton extends React.Component {
    handleClick() {
        console.log('this is:', this);
    }
    render() {
        return ( 
        	<button onClick = { (e) => this.handleClick(e) } > Click me</button>
        )
    }
}
