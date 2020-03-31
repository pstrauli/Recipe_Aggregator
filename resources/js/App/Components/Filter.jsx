import React from 'react';

import SearchBar from './SearchBar';
import Rating from './Rating';
import Time from './Time';
import Submit from './Submit';

const Filter = () => {
  return (
    <form className="flex flex-col items-center">
      <SearchBar />
      <Rating />
      <Time />
      <Submit />
    </form>
  )
}

export default Filter;
