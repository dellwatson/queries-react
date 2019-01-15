import React from 'react';
import { connect } from 'react-redux';
import PostLists from '../post/PostLists'

const Favourite = (props) => {

  const { allFavs, match } = props;

  return (
    <section>
      <div className="media">
      <PostLists dataImg={allFavs} match={match}/>
      
      </div>
    </section>
  )
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        allFavs: state.fav.faved
    }
}
export default connect(mapStateToProps)(Favourite)