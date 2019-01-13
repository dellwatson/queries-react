import React, { Component } from 'react'
import { connect } from 'react-redux'
import { gifLiked, removeLike } from '../../store/actions/favActions';


class PostOne extends Component {
    state = {
        loveOn: false,
        hoverOn : false
    }

    hoverOn = () => {
        const loveOn = this.state.loveOn;
        if (!loveOn){
            console.log('BELOM DI LIKE')
            this.setState({
                hoverOn: true
            })
        }
        //checking loveOn true ? null : show XX( border remove, replace)
    }

    hoverOff = () => {
        this.setState({
            hoverOn: false
        })
    }

    handleClick = () => {
        const loveOn = this.state.loveOn;
        const gif = this.props.item.images.downsized.url

        //send url + id to reducer
        // this.props.saveLike(this.props.item.id, this.item.images.downsized.url)
        // gif = "" ,
        //bug location = landing ? gif = item.downsized.url : gif = item.urlSaved



        if(loveOn){
            this.props.removeLike(gif)
            this.setState({
                loveOn: !loveOn
            });
        }else{
            this.props.saveLike(gif)
            this.setState({
                loveOn: !loveOn
            });
        }
    }

  render() {
    const { item, index, arrFavs } = this.props;
    // console.log(this.props)

    // const itemSrc = "";
    const itemSrc = item.images.downsized.url;
    //check location page params
    //(location = landing ) ? itemsrc = item.downsized.url : item.urlSaved

    const border = arrFavs && arrFavs.map((urlFavs, index) => {
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
            onMouseEnter={this.hoverOn}
            onMouseLeave={this.hoverOff}
            />
          </div>  
          {this.state.loveOn ? border : null}
          {!this.state.loveOn && this.state.hoverOn ? (<div>HI</div>) : null}
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
        saveLike: (gif) => dispatch(gifLiked(gif)),
        removeLike: (gif) => dispatch(removeLike(gif))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostOne)
