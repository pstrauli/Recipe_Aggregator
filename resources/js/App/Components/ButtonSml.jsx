import React from 'react';


const ButtonSml = ({desc}) => {

  const handleClick = () => {
    console.log('This button works')
  }

  return (
    <button onClick={handleClick} className="font-body text-white border-none inline rounded-full bg-red-600 px-3 py-1 mx-4 text-sm">{desc}</button>
  )
}

export default ButtonSml;

