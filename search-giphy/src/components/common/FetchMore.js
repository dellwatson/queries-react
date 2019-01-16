import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getInfo } from '../../store/actions/searchActions'

class FetchMore extends Component {
    state = {
        add: 8,
        query:""
    }

    handleMore = () => {
        const addMore = this.state.add;
        const getQuery = this.props.query;
        this.setState({
            add: addMore + 8,
            query:getQuery
        }, () => {
            this.props.getInfo(this.state.query,this.state.add)
        })
    }

  render() {
    return (
      <div>
        <div className="btn-more" onClick={this.handleMore}>
            <div className="waves-effect waves-light btn-small pulse green">
                Fetch more
            </div>     
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        query: state.show.info
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getInfo: (info,add) => dispatch(getInfo(info,add))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FetchMore)
