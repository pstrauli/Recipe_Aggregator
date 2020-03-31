import React from 'react';
import Button from './Button';

const Time = () => {
  return (
    <div className="mb-4">
      <h3 className="items-start">How long do you want to cook?</h3>
      <div className="flex flex-row">
        <Button desc="30 mins"/>
        <Button desc="1 hour"/>
        <Button desc="1 hour +"/>
        <Button desc="2 hours +"/>
      </div>
    </div>
  )
}

export default Time;