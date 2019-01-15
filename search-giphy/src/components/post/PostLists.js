import React from 'react'
import PostOne from './PostOne'
import isEmpty from './is-empty'

const PostLists = ({ dataImg, match }) => {
    console.log(dataImg)

  return (
    <div className='container'>
        <div className="row">
            <ul>
                <li>
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
                </li>
            </ul>
            
        </div>
    </div>
  )
}

export default PostLists;
