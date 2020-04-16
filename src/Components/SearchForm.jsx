import React from 'react';

const SearchForm = ({search, updateSearch, updateSearchValue}) => {
  return ( 
  <form onSubmit={updateSearchValue}>
    <input type="text" value={search} onChange={updateSearch}/>
    <button type="submit">SEARCH</button>
  </form>
   );
}
 
export default SearchForm;