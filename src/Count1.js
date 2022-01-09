import React, { Component } from 'react'
import { connect } from 'react-redux';


 class Count1 extends Component {
    render() {
        return (
            <div style={{textAlign:"center"}}>
                <h1>{this.props.count}</h1>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    count : state.count
});
export default connect(mapStateToProps)(Count1);