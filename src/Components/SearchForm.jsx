import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const FormContainer = styled.div`
  position: relative;
`;

const SearchInput = styled.input `
  box-sizing: border-box;
  padding: 0 40px 0 10px;
  width: 100%;
  height: 50px;
  border: 4px solid #ffffff;
  background: none;
  color: #fff;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  border-radius: 4px;

  @media only screen and (min-width: 320px) {
    width: 300px;
  }

  ::placeholder {
    color: white;
    opacity: 0.8;
  }
`;

const SearchButton = styled.button`
  background: none;
  position: absolute;
  top: 0;
  right: 0;
  height: 50px;
  width: 50px;
  padding: 0;
  outline: 0;
  border: 0;
  cursor: pointer;
`;

const SearchIcon = styled(FontAwesomeIcon)`
  width: 20px !important;
  height: 20px;
  font-family: Roboto;
  color: white;
`;

const SearchForm = ({search, updateSearch, updateSearchValue}) => {
  return ( 
    <FormContainer onSubmit={updateSearchValue}>
      <SearchInput type="text" value={search} placeholder="eg. Salad" onChange={updateSearch} />
      <SearchButton type="submit"><SearchIcon icon={faSearch} /></SearchButton>
    </FormContainer>
   );
}
 
export default SearchForm;