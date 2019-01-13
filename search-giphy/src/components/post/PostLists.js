import React from 'react'
import PostImage from './PostImage'
import PostOne from './PostOne'



const PostLists = ({ dataImg }) => {


    const postImage = dataImg && dataImg.data.map((item,index) => {
        return (<PostOne item={item} key={index} />)
    })
    // const postImage2 = dataImg<0 && dataImg.data.map((item,index) => {
    //     return (<PostImageFav item={item} key={index} />)
    // })
    

  return (
    <div>
      {postImage}
      {/* {postImage2} */}
    </div>
  )
}

export default PostLists;
