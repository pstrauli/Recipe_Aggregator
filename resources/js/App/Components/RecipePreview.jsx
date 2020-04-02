import React from 'react';

const RecipePreview = ({ url, image_url, description, name, total_time }) => {
  return (
    <section className="h-64 mb-8 rounded-sm w-full shadow bg-white flex flex-col">
      <a href={url} target="_blank">

        <div className="w-full h-32 bg-center bg-cover bg-no-repeat rounded-t-sm" style={{ backgroundImage: ` url(${image_url})` }}>
        </div>

        <div className="w-full h-32 block">

          <h3 className="font-body font-bold px-2 pt-2 mb-2">{name}</h3>

          <p className="font-body text-sm px-2">{description}</p>

          <p>Click on preview for full recipe</p>

          <p className="font-body text-sm text-gray-500 px-2 text-right">{total_time}mins</p>
        </div>
      </a>
    </section>
  )
}

export default RecipePreview;