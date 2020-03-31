import React from 'react';

const RecipePreview = (props) => {
  return (
    <section>
      <h3>{props.results.title}</h3>
      <p>{props.results.time}}</p>
      <p>{props.results.description}</p>
    </section>
  )
}

export default RecipePreview;