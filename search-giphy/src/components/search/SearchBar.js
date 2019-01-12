import React from 'react'

const SearchBar = ({  onAdd }) => {

  return (
    <div>
       <form>
            <input 
                placeholder="Search for..." 
                // ref={input => this.search = input} 
                id="query" 
                onChange={onAdd} 
                />
            {/* <p>{query}</p> */}
        </form> 
    </div>
  )
}

export default SearchBar;
