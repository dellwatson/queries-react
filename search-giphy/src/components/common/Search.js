import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getInfo } from '../../store/actions/searchActions'

 class Search extends Component {
    state = {
        query: "",
        add: 8
        }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        }, () => {
            this.props.getInfo(this.state.query, 8)
        })
    }
  render() {
    return (
      <div>
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <div className="row">
                        <div className="input-field col s12 m8 push-m2">
                            <input 
                                className ="text-input"
                                type="text"
                                placeholder="Search for..." 
                                id="query" 
                                onChange={this.handleChange}
                                onKeyPress={this.handleChange}
                                />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
    return {
      getInfo : (info,add) => dispatch(getInfo(info,add))
    }
  }

export default connect(null, mapDispatchToProps)(Search)