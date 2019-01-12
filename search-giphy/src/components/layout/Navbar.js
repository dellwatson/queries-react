import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getInfo } from '../../store/actions/searchActions';
// import apiKey from '../../apiKey'


class Navbar extends Component {
  state = {
    query : ""
  }

  handleChange = () => {
    this.setState({
      query: this.search.value
    })
    this.props.getInfo(this.state.query)
    // console.log("hey")

  }

  handlePress = (e) => {
    // e.preventDefault();
    // console.log(this.state.query)
  }

  
  render() {
    // const {}
    // console.log(this.props)
    return (
      <div>
        <form>
          <input 
            placeholder="Search for..." 
            ref={input => this.search = input} 
            id="search" 
            onChange={this.handleChange} 
            onKeyPress={this.handlePress}
            />
          <p>{this.state.query}</p>
        </form>    
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  // console.log(state)
  return {
    getInfo : (info) => dispatch(getInfo(info))
  }
}

export default connect(null,mapDispatchToProps)(Navbar);
