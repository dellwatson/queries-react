import React, {Component} from 'react'
import { connect } from 'react-redux';
import { gifLiked } from '../../store/actions/favActions';

class PostImage extends Component {
  state ={
    icon:false
  }
  handleClick = (e) => {
    console.log(this.props.item.id)
    // console.log(this.props.item)

    //!isLiked : apa engga, else like it
    this.props.saveLike(this.props.item.id)
    //saveURL too ? show in fav-components with order
  }

  hoverOn = () => {
    //check same id in redux or not
    // this.props.item.id
    // console.log(this.props.favSaved)
    //use async, map

    //pops love ? null : pops X



    // const imgSaved =this.props.favSaved.filter(item => {
    //   return item === imgHover;
    // })
    // console.log(imgSaved) // false(show X)
  }


  render(){
    console.log(this.props)
  // const { item, index, savedId } = this.props;
  // // const itemShow = item.images.downsized.url;
  // const checkLove = savedId.find(item => {
  //     return item === item.id 
  // })
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

const mapDispatchToProps = (dispatch) => {
  return {
    saveLike: (gif) => dispatch(gifLiked(gif))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostImage)
