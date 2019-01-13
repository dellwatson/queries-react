import React from 'react'
import PostOne from './PostOne'

const PostLists = ({ dataImg }) => {
    const postImage = dataImg && dataImg.data.map((item,index) => {
        return (<PostOne item={item} key={index} />)
    })

  return (
    <div>
      {postImage}
    </div>
  )
}

export default PostLists;
