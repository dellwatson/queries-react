import React from 'react';
import { connect } from 'react-redux';
import PostLists2 from '../post/PostLists2'

const Favourite = (props) => {
  // console.log(props)
    // console.log(allFavs)
    const { allFavs, match } = props
  return (
    <div>
      <PostLists2 dataImg={allFavs} match={match}/>
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