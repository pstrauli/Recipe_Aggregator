import React from 'react';
import Button from './Button';

const Time = () => {
  return (
    <div className="mb-8 rounded-sm border-gray-300 border-solid">
      <h3 className="font-body text-center">How long do you want to cook?</h3>
      <div className="flex flex-row overflow-x-auto">
        <Button desc="30 mins"/>
        <Button desc="1 hour"/>
        <Button desc="1 hour +"/>
        <Button desc="2 hours +"/>
      </div>
    </div>
  )
}

export default Time;