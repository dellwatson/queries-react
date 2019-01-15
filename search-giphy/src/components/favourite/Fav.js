import React, { Component } from 'react'
import { connect } from 'react-redux';
import PostLists from '../post/PostLists'

class Fav extends Component {
  render() {
    const { allFavs, match } = this.props;

    return (
      <section className="section">
        <h2 className="center">
          Favourite Page
        </h2>
        <div className="container">
          <PostLists dataImg={allFavs} match={match}/>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        allFavs: state.fav.faved
    }
  }

  
export default connect(mapStateToProps)(Fav)
