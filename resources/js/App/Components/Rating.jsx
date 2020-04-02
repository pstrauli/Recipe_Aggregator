import React from 'react';
import ButtonSml from './ButtonSml'

const Rating = () => {
  return (
    <div className="font-body py-2 m-2 mb-2 w-full border-solid border border-gray-300 rounded flex flex-col content-center">
      <h3 className="mb-4 text-center">‘Best Rated’ or ‘Most Popular’?</h3>
      <div className="flex flex-row justify-center">
        <ButtonSml desc="Best rated"/>
        <ButtonSml desc="Most Popular"/>
      </div>
    </div>
  )
}

export default Rating;
