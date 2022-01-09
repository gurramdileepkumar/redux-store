import React, { Component } from 'react'
import { connect } from 'react-redux';
import './App.css'

 class Count extends Component {
//   state = {count :0};

  increament = () =>{
    this.props.dispatch({type:"INCREAMENT"});

    // this.setState({
    // //   count:this.state.count + 1
    // });
  };
  decreament = () =>{
    this.props.dispatch({type:"DECREAMENT"});

    // this.setState({
    // //   count:this.state.count - 1
    // });
  };

  render() {
    return (
      <div style={{textAlign:"center"}}>
        <button onClick={this.increament}>+</button>
        <input type="" value={this.props.count} />
        <button onClick={this.decreament}>-</button>
      </div>
    )
  }
}

const mapStateToProps = state =>({
    count : state.count
});
export default connect(mapStateToProps)(Count);
