import React from 'react'
import { connect } from 'react-redux';
import PostLists from '../post/PostLists'
import Search from '../common/Search'

const Landing = ({ dataImg, match }) => {
    return (

        <section className="section">
            <Search />
            <PostLists dataImg={dataImg} match={match} />
            <div className="row">
                <div className="col s12">
                </div>
            </div>
        </section>
   
    )
}

const mapStateToProps = (state) => {
    return {
        dataImg : state.show.json
    }
}

export default connect(mapStateToProps)(Landing);