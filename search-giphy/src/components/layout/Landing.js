import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getInfo } from '../../store/actions/searchActions'
import PostLists from '../post/PostLists'

class Landing extends Component {
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

    handleMore = () => {
        const addMore = this.state.add;
        this.setState({
            add: addMore + 8
        }, () => {
            this.props.getInfo(this.state.query,this.state.add)
        })
    }

  render() {
    const { dataImg, match } = this.props;

    return (
        <section className="section">
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
                            <a className="waves-effect waves-light btn-small right" onClick={this.handleMore}>Add More</a>
                        </div>
                    </div>
                </div>
            </div>
            <PostLists dataImg={dataImg} match={match} />
        </section>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        dataImg : state.show.json
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      getInfo : (info,add) => dispatch(getInfo(info,add))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Landing);