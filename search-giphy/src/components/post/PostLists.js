import React from 'react'
import PostOne from './PostOne'
import isEmpty from './is-empty'

const PostLists = ({ dataImg, match }) => {

  return (
    <div>
      {!isEmpty(dataImg) ? 
        (match.url === '/' ?  
            dataImg.data.map((item,index) => {
                return (<PostOne item={item} key={index} match={match}/>)
            })
        :
            dataImg.map((item,index) => {
                return (<PostOne item={item} key={index} match={match}/>)
            })
        )
        : null}
    </div>
  )
}

export default PostLists;
