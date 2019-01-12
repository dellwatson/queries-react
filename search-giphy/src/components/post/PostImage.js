import React from 'react'

const PostImage = ({ item, index }) => {

  const itemShow = item.images.downsized.url
  return (
    <div>
       <img src={itemShow} alt={index}/>
    </div>
  )
}

export default PostImage;
