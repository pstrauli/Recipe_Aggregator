import React from 'react';


const Button = ({desc}) => {
  return (
    <div className="flex flex-col mx-2">

      // the class names are Tailwind CSS styling

      <button aria-labelledby={desc} aria-pressed={} style="backgroundImage=url(/app/public/images/clock.svg)" className="bg-center bg-contain bg-no-repeat border-none w-16 h-16">

      // Because the button isn't named I've included the 'aria-labelledby' for accessibility best practices

      // The 'aria-pressed' should display eith 'true' or 'false' as it can be toggled

      // I want the button to be filled with the clock.svg...not sure if I'm keeping it in the correct folder and
      // if that's the right way to write the path for it within React

      </button>
      <label>{desc}</label>
    </div>
  )
}

export default Button;

