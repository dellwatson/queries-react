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

  render() {
    const { dataImg } = this.props;

    return (
        <div>
            <form>
                <input 
                    placeholder="Search for..." 
                    id="query" 
                    onChange={this.handleChange} 
                    />
                <p>{this.state.query}</p>
            </form>   

            <div className="dashboard container">
                <PostLists dataImg={dataImg}  />
            </div>

        </div>
    )
  }
}

const mapStateToProps = (state) => {
    // console.log(state);
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