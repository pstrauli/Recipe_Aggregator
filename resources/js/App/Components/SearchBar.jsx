import React from 'react';

const SearchBar = () => {

  
  return (
    <div className="mb-4 font-body leading-relaxed w-5/6">
      <input onChange={()=> console.log('I have changed!!!')} className="border border-solid border-gray-400 rounded-full px-2 w-full"type="text" placeholder="eg.chilli..."/>
    </div>
  )
}

export default SearchBar;