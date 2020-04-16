import React from 'react';

const SearchForm = ({search, updateSearch, updateSearchValue}) => {
  return ( 
  <form onSubmit={updateSearchValue}>
    <input type="text" value={search} placeholder="eg. Salad" onChange={updateSearch}/>
    <button type="submit">SEARCH</button>
  </form>
   );
}
 
export default SearchForm;