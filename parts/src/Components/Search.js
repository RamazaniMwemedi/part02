import React from 'react'

function Search(props) {
    return (
        <div>
             filter shown with <input type="text" value={props.search} onChange={props.searchOnChangeH} />
        </div>
    )
}

export default Search
