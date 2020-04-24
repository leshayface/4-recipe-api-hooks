import React, {useState} from 'react';
import styled, { css, keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchForm = ({search, updateSearch, updateSearchValue}) => {
  const [expanded, setExpanded] = useState(false);

  const expand = () => {
    setExpanded(true);
  }
  
  const FormContainer = styled.div`
    position: relative;
  `;

  const slideInFromLeft = keyframes`
    0% {
      transform: translateX(-100%);
      opacity: 1;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  `;

  const shrink = keyframes`
    from {
      transform: scale(1);
      opacity: 1;
    }
    to {
      transform: scale(0);
      opacity: 0;
    }
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

  const LargeSearchIcon = styled(FontAwesomeIcon)`
    position: relative;
    bottom: 50px;
    color: white;
    width: 60px !important;
    height: 60px;
    animation-name: ${expanded ? css`${shrink}` : "none"};
    animation-duration: ${expanded && "2s"}; 
    animation-timing-function: ${expanded ? "ease-out" : "none"};
    animation-fill-mode: forwards;
    // animation: ${expanded && css`${shrink}`} ${expanded && "2s"}; ${expanded && "ease-out"} 0 0 0 forwards;
  `;

  const Search = styled.div`
    opacity: 0;
    animation-name: ${expanded ? css`${slideInFromLeft}` : "none"};
    animation-duration: ${expanded ? "1s" : "none"}; 
    animation-timing-function: ${expanded ? "ease-out" : "none"};
    animation-delay: 1s;
    animation-fill-mode: forwards;
  `;

  return ( 
    <FormContainer onSubmit={updateSearchValue}>
      <Search>
        <SearchInput type="text" value={search} placeholder="eg. Salad" onChange={updateSearch} />
        <SearchButton type="submit"><SearchIcon icon={faSearch} /></SearchButton>
      </Search>
      <LargeSearchIcon onClick={expand} icon={faSearch} />
    </FormContainer>
   );
}
 
export default SearchForm;