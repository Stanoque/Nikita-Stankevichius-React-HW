import React from 'react';
import SearchField from './components/SearchField/SearchField';
import ListOfLimitButtons from './components/ListOfLimitButtons/ListOfLimitButtons';
import ListOfTypeButtons from './components/ListOfTypeButtons/ListOfTypeButtons';

const submit = (values) => {
  console.log(values);
}

const SearchForm = () => {
  return (
    <div className="container searchForm">
      <form>
        <SearchField onSubmit={submit}/>
        <ListOfTypeButtons onSubmit={submit}/>
        <ListOfLimitButtons onSubmit={submit}/>
      </form>
    </div>
  )
}

export default SearchForm;