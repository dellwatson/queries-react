import React from 'react';
import { connect } from 'react-redux';
import PostLists from '../post/PostLists'

const Favourite = ({ allFavs }) => {
    // console.log(allFavs)
  return (
    <div>
      {/* <PostLists dataImg={allFavs} /> */}
    </div>
  )
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        // allFavs: state.fav.faved,
        allFavs: state.show.json
        // show : state.show.json
        //expecting get favs
    }
}
export default connect(mapStateToProps)(Favourite)