import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getInfo } from '../../store/actions/searchActions'
import PostLists from '../post/PostLists'
// import SearchBar from '../search/SearchBar'



class Landing extends Component {
    state = {
        query: ""
        }

    handleChange = (e) => {
        this.setState({
            query: this.search.value
        },() => {
            this.props.getInfo(this.state.query)
        })
    }

  render() {
    const { dataImg } = this.props;
    console.log(this.state.query)

    return (
        <div>
            <div>
                <form>
                    <input 
                        placeholder="Search for..." 
                        ref={input => {
                            console.log()
                            this.search = input
                        }} 
                        id="query" 
                        onChange={this.handleChange} 
                        />
                    <p>{this.state.query}</p>
                </form> 
            </div>

            <div className="dashboard container">
                <PostLists dataImg={dataImg} />
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

const mapDispatchToProps = (dispatch) => {
    // console.log(state)
    return {
      getInfo : (info) => dispatch(getInfo(info))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Landing);