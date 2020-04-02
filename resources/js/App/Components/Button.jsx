import React from 'react';


const Button = ({desc}) => {

  const handleClick = () => {
    console.log('Nailed it')
  }

  return (
    <div className="flex flex-col mx-2">
      <button onClick={handleClick} aria-labelledby={desc} style={{backgroundImage: "url(/app/public/images/clock.svg"}} className=" bg-center bg-contain bg-no-repeat border-none w-16 h-16"></button>
      <label className="font-body text-sm">{desc}</label>
    </div>
  )
}

export default Button;

