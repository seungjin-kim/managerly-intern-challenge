import React from 'react';

const Search = (props) => (
  <input 
    type="text"
    onChange={(e) => props.handleSearchInputChange(e.target.value)}
  />
)


export default Search;