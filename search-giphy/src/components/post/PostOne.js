import React, { Component } from 'react'
import { connect } from 'react-redux'
import { gifLiked } from '../../store/actions/favActions';

class PostOne extends Component {
    state = {
        loveOn: false,
        triggerHover : false
    }

    handleHover = () => {
        //checking loveOn true ? null : show XX( border remove, replace)
        // const loveOn = this.state.loveOn;
        // (!loveOn) ? 
    }

    handleClick = () => {
        const loveOn = this.state.loveOn;
        const gif = this.props.item.images.downsized.url
        if(loveOn){
            console.log('DISPATCH REMOVE')
            this.setState({
                loveOn: !loveOn
            });

        }else{
            this.props.saveLike(gif)
            this.setState({
                loveOn: !loveOn
            });
        }
        //send url + id to reducer
        // this.props.saveLike(this.props.item.id, this.item.images.downsized.url)
        // gif = "" ,
        //bug location = landing ? gif = item.downsized.url : gif = item.urlSaved
    }

  render() {
    console.log(this.state)
    const { item, index, arrFavs } = this.props;
    // const itemSrc = "";
    const itemSrc = item.images.downsized.url;
    //check location page params
    //(location = landing ) ? itemsrc = item.downsized.url : item.urlSaved

    const border = arrFavs.map((urlFavs, index) => {
        if (urlFavs === itemSrc) {
            return (
                <p className="red-text" key={index}> LIKED </p>
            )
        }   
    })

    return (
      <div>
          <div className="container">
            <img src={itemSrc} 
            alt={index} 
            onClick={this.handleClick} 
            onMouseEnter={this.handleHover}
            />
          </div>  
          {border}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        arrFavs: state.fav.faved
        //show data yg disave
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //return click to faved
        saveLike: (gif) => dispatch(gifLiked(gif))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostOne)
