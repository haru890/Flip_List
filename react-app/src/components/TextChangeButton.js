import React from 'react';

class TextChangeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '登録'};
  }
  
  // handleClickメソッドを定義してください
  handleClick(name) {
    this.setState({name: name});
  }
  
  render() {
    return (
    	<div>
    	  <button>{this.state.name}</button>
        <button onClick={() => {this.handleClick('更新')}}>更新</button>
      </div>
    );
  }
}

export default TextChangeButton;
