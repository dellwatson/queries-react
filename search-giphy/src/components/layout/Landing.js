import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getInfo } from '../../store/actions/searchActions'
import PostLists from '../post/PostLists'

class Landing extends Component {
    state = {
        query: ""
        }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        }, () => {
            this.props.getInfo(this.state.query)
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
    }

  render() {
    const { dataImg, match } = this.props;

    return (
        <section>
            <div className="search-content">
             {/* <form onSubmit={this.handleSubmit} > */}
             <input 
                                    type="text"
                                    placeholder="Search for..." 
                                    id="query" 
                                    onChange={this.handleChange} 
                                    />
                                {/* </form>      */}
                
            
            </div>
                           

<div className="media">




{dataImg && dataImg.data.map((item,index) => {
    return (

        // <div className="box-img">


        <img 
// className="responsive-img"
src={item.images.downsized.url} 
alt={index} 


// overflow="hidden"            
/>
// </div>

    
    
    )
})}
</div>



                           
        </section>
        
    )
  }
}

const mapStateToProps = (state) => {
    return {
        dataImg : state.show.json
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      getInfo : (info) => dispatch(getInfo(info))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Landing);