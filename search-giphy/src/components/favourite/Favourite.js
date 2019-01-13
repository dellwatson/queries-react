import React from 'react';
import { connect } from 'react-redux';
import PostLists from '../post/PostLists'

const Favourite = (props) => {
  // console.log(props)
    // console.log(allFavs)
    const { allFavs, match } = props
  return (
    <div>
      <PostLists dataImg={allFavs} match={match}/>
    </div>
  )
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        allFavs: state.fav.faved
    }
}
export default connect(mapStateToProps)(Favourite)