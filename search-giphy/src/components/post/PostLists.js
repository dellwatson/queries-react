import React from 'react'
import PostOne from './PostOne'
import isEmpty from './is-empty'


const PostLists = ({ dataImg }) => {
    const postImage = dataImg && dataImg.data.map((item,index) => {
        return (<PostOne item={item} key={index} />)
    })

  return (
    <div>
      {!isEmpty(dataImg) ? postImage : null}      
    </div>
  )
}

export default PostLists;
