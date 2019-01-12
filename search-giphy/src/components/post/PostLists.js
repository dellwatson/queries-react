import React from 'react'
import PostImage from './PostImage'

const PostLists = ({ dataImg }) => {

    const postImage = dataImg && dataImg.data.map((item,index) => {
        return (<PostImage item={item} key={index} />)
    })

  return (
    <div>
      {postImage}
    </div>
  )
}

export default PostLists;
