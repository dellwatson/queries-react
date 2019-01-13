import React from 'react'
import PostOne2 from './PostOne2'
import isEmpty from './is-empty'

const PostLists2 = ({ dataImg, match }) => {



    const postImage = dataImg.map((item,index) => {
        return (<PostOne2 item={item} key={index} match={match}/>)
    })

  return (
    <div>
      {!isEmpty(dataImg) ? postImage : null}
    </div>
  )
}

export default PostLists2;
