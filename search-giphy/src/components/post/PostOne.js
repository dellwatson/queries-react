import React, { Component } from 'react'
import { connect } from 'react-redux'
import { gifLiked, removeLike } from '../../store/actions/favActions';


class PostOne extends Component {
    constructor(props){
        super(props)
        if(this.props.match.url === '/fav'){
            this.state = {
                loveOn: true,
                hoverOn: false
            } 
        }else{
            const currUrl = this.props.item.images.downsized.url
            const found = this.props.arrFavs && this.props.arrFavs.find(item => {
                return item === currUrl;
                
            })
            if(typeof found === 'undefined'){
                console.log('undefined url')
                this.state = {
                    loveOn: false,
                    hoverOn:false
                }
            }else{
                console.log('url ada')
                this.state = {
                    loveOn: true,
                    hoverOn:false
                }
            }
        }
    }
   
    hoverOn = () => {
        const loveOn = this.state.loveOn;
        if (!loveOn){
            this.setState({
                hoverOn: true
            })
        }
    }

    hoverOff = () => {
        this.setState({
            hoverOn: false
        })
    }

    handleClick = () => {
        let gif = '';
        //send url + id to reducer and true
        if(this.props.match.url === '/fav'){
            gif = this.props.item
            this.props.removeLike(gif)
            this.setState({
                loveOn: false
            });
        }else{
            gif = this.props.item.images.downsized.url
            const found = this.props.arrFavs && this.props.arrFavs.find(item => {
                return item === gif
            })
            if(typeof found === 'undefined'){
                this.props.saveLike(gif)
                this.setState({
                    loveOn: true
                });
            }else{
                this.props.removeLike(gif)
                this.setState({
                    loveOn: false
                });
            }
        }

    }

  render() {
    const { item, index, arrFavs, match } = this.props;
    let itemSrc = "";
    match.url === '/' ? 
        itemSrc = item.images.downsized.url 
        :
        itemSrc = item 

    const border = arrFavs && arrFavs.find((item) => {
        return item === itemSrc
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
          
          {typeof border !== 'undefined' ?
                (<p className="red-text">LIKED</p>)
                :
                null}

          {typeof border === 'undefined' && this.state.hoverOn ? 
                (<div>HI</div>) 
                : 
                null}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    // console.log(state)
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
