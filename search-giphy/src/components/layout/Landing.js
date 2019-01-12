import React, { Component } from 'react'
import { connect } from 'react-redux';


class Landing extends Component {
    
  render() {
    const { dataImg } = this.props;

   return dataImg ? dataImg.data.map((item, index) => {
            return (
                <div key={index}>
                    <img src={item.images.downsized.url} alt={index} />    
                </div>
            )
        })      
        : 
      
        <div></div>

  }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        dataImg : state.show.json
    }
}

export default connect(mapStateToProps)(Landing);