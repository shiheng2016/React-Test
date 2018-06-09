import React from 'react'


export default class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //转化输入全部是大写字母
  handleChange(event) {
    this.setState({value: event.target.value.toUpperCase()});
  }
  handleChanges = (event) => {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
  	console.log(this.state.value);
    // alert('A name was submitted: ' + this.state.value);
    alert('A name was submitted: ' + this.input.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          {/*<input type="text" value={this.state.value} onChange={this.handleChange}/>*/}
          <input type="text" ref={(input) => this.input = input}/>
        </label>
        {/*<label>*/}
            {/*Pick your favorite La Croix flavor:*/}
          {/*<select value={this.state.value} onChange={this.handleChanges}>*/}
              {/*<option value="grapefruit">Grapefruit</option>*/}
              {/*<option value="lime">Lime</option>*/}
              {/*<option value="coconut">Coconut</option>*/}
              {/*<option value="mango">Mango</option>*/}
          {/*</select>*/}
        {/*</label>*/}
        &nbsp;&nbsp;&nbsp;<input type="submit" value="提交" />
      </form>
    );
  }
}
