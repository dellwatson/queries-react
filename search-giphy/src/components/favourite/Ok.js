import React from 'react';
import { connect } from 'react-redux';
import PostLists from '../post/PostLists'

const Ok = (props) =>  {

  const { allFavs, match } = props;

    return (
      <section className="section">
      <div className="container">
        <div className="row">
          <PostLists dataImg={allFavs} match={match}/>
        </div>
      </div> 
    </section>
    )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
      allFavs: state.fav.faved
  }
}

export default connect(mapStateToProps)(Ok)