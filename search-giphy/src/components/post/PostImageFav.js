import React, {Component} from 'react'
import { connect } from 'react-redux';

class PostImageFav extends Component {

  render(){
//   const { item, index, savedId } = this.props;
//   const itemShow = item.images.downsized.url;
//   const checkLove = savedId.find(item => {
//       return item === item.id 
//   })
    console.log(this.props)
    return (
      <div>
          {/* <img src={itemShow} 
                alt={index} 
                onClick={this.handleClick} 
                onMouseEnter={this.hoverOn}
                //if id match show love
                />
        {checkLove} */}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    savedId: state.fav.faved
  }
}

export default connect(mapStateToProps, null)(PostImageFav)
