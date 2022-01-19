import React from 'react'

function Search(props) {
    return (
     <form action="POST" onSubmit={props.onSubmit}>
        Find country : <input placeholder=' Search for a country' value={props.search} onChange={props.onSearch} type="text" />
      </form>
    )
}

export default Search
