import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getInfo } from '../../store/actions/searchActions'
import PostLists from '../post/PostLists'

class Landing extends Component {
    state = {
        query: ""
        }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        }, () => {
            this.props.getInfo(this.state.query)
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
    }

  render() {
    //   console.log(this.props)
    const { dataImg, match } = this.props;

    return (
        <div className="landing container">
            <div className="row">
                <div className="col s12">
                    <div className="row">
                        <div className="input-field col s12 m8 push-m2">
                          {/* <form onSubmit={this.handleSubmit} > */}
                            <input 
                                type="text"
                                placeholder="Search for..." 
                                id="query" 
                                onChange={this.handleChange} 
                                />
                            {/* </form>      */}
                        </div>
                    </div>
                        
                </div>
            </div>
             

                <PostLists dataImg={dataImg} match={match} />

        </div>
    )
  }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        dataImg : state.show.json
    }
}

//dispatch for search
const mapDispatchToProps = (dispatch) => {
    // console.log(state)
    return {
      getInfo : (info) => dispatch(getInfo(info))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Landing);