import React, { Component } from 'react'
import { connect } from 'react-redux';


class Landing extends Component {
    
  render() {
      console.log(this.props)
    return (
      <div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        dataImg : state.json
    }
}

export default connect(mapStateToProps)(Landing);