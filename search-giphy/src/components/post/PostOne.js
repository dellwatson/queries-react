import React, { Component } from 'react'
import { connect } from 'react-redux'
import { gifLiked, removeLike } from '../../store/actions/favActions';
import Spinner from '../common/Spinner';

class PostOne extends Component {
    constructor(props){
        super(props)
        if(this.props.match.url === '/favourite'){
            this.state = {
                loveOn: true,
                hoverOn: false
            } 
        }else{
            const currUrl = this.props.item.images.downsized.url
            const found = this.props.arrFavs && this.props.arrFavs.find(item => item === currUrl)
            if(typeof found === 'undefined'){
                this.state = {
                    loveOn: false,
                    hoverOn:false
                }
            }else{
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
        if(this.props.match.url === '/favourite'){
            gif = this.props.item
            this.props.removeLike(gif)
            this.setState({
                loveOn: false
            });
        }else{
            gif = this.props.item.images.downsized.url
            const found = this.props.arrFavs && this.props.arrFavs.find(item => item === gif)
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
    const { item, index, arrFavs, match, loading} = this.props;
    let itemSrc = "";
    match.url === '/' ? 
        itemSrc = item.images.downsized.url
        :
        itemSrc = item 

    const border = arrFavs && arrFavs.find(item => item === itemSrc)

    let postImage;
    if( item === null || loading || Object.keys(item).length === 0){
        postImage = <Spinner />
    }else{
        postImage = (
            <img 
                src={itemSrc} 
                alt={index} 
                onClick={this.handleClick} 
                onMouseEnter={this.hoverOn}
                onMouseLeave={this.hoverOff}
            />
        )
    }

    
    return (
        <div>
            {postImage}
                {typeof border === 'undefined' || loading ?
                null
                :
                (<i className="material-icons this-icon">favorite</i>)}

                {typeof border === 'undefined' && this.state.hoverOn ? 
                (<i className="material-icons this-icon">favorite_border</i>) 
                : 
                null}
        </div>
        )
  }
}

const mapStateToProps = (state) => {
    return {
        arrFavs: state.fav.faved,
        loading: state.show.loading,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveLike: (gif) => dispatch(gifLiked(gif)),
        removeLike: (gif) => dispatch(removeLike(gif))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostOne)
