import React from 'react'
import { connect } from 'react-redux';
import PostLists from '../post/PostLists'

const Fav = ({ allFavs, match }) => {

    return (
      <section className="section">
        <h2 className="center">
          Favourite Page
        </h2>
          <PostLists dataImg={allFavs} match={match}/>
      </section>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        allFavs: state.fav.faved
    }
  }

  
export default connect(mapStateToProps)(Fav)
