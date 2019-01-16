import React from 'react'
import PostOne from './PostOne'
import isEmpty from './is-empty'
import FetchMore from '../common/FetchMore'

const PostLists = ({ dataImg, match }) => {
  return (
    <div className="container">
        <div className="grid-box">
            {!isEmpty(dataImg) ? 
                (match.url === '/' ?  
                    dataImg.data.map((item,index) => (<PostOne item={item} key={index} match={match}/>))
                    :
                    dataImg.map((item,index) =>  (<PostOne item={item} key={index} match={match}/>))
                )
            : null}
        </div>
        {!isEmpty(dataImg) && match.url === '/' ? (<FetchMore />) : null}
    </div>
  )
}

export default PostLists;
