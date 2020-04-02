import React from 'react';

const Submit = () => {

  const submitRequest = () => {
    console.log('SUBMITTED!!!')
  }
  return (
    <div>
      <input onClick={submitRequest}className="font-body text-white font-bold bg-gray-800 hover:bg-black hover:text-gray-300 rounded-full py-3 px-6 mb-4" type="submit" value="Let's get cooking!"/>
    </div>
  )
}

export default Submit;