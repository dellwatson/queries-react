import React, { Component } from 'react'
import { connect } from 'react-redux'
import { gifLiked, removeLike } from '../../store/actions/favActions';


class PostOne2 extends Component {
    constructor(props){
        super(props)
        if(this.props.match.url === '/fav'){
            this.state = {
                loveOn: true,
                hoverOn:false
            }
        }else{
            this.state = {
                loveOn: false,
                hoverOn : false
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
        const loveOn = this.state.loveOn;
        let gif = '';
        this.props.match.url === '/' ? gif = this.props.item.images.downsized.url : gif = this.props.item

        //send url + id to reducer
    
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

    //component didmount setstate true if fav-location
    // UNSAFE_componentWillMount(){
    //     console.log("DIDMOUNT")
    //     if(this.props.match.url === '/fav'){
    //         this.setState({
    //             loveOn:true
    //         })
    //     }
    // }

  render() {
    const { item, index, arrFavs, match } = this.props;
    // console.log(this.props.item)

    let itemSrc = "";
    match.url === '/' ?  itemSrc = item.images.downsized.url :itemSrc = item 
    // console.log(itemSrc + "<<hello item src")

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

export default connect(mapStateToProps, mapDispatchToProps)(PostOne2)
