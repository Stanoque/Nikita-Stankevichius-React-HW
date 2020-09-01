import React from 'react';
import PropTypes from 'prop-types';
import SearchField from './components/SearchField/SearchField';
import SearchButton from './components/SearchButton/SearchButton';
import ListOfLimitButtons from './components/ListOfLimitButtons/ListOfLimitButtons';
import ListOfTypeButtons from './components/ListOfTypeButtons/ListOfTypeButtons';

const SearchForm = () => {
  return (
    <div className="container searchForm">
      <form>
        <SearchField />
        <ListOfTypeButtons />
        <ListOfLimitButtons />
        <SearchButton />
      </form>
    </div>
  )
}

export default SearchForm;