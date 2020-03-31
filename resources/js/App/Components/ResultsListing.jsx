import React from 'react';
import RecipePreview from './RecipePreview'
// import the data one way or other

const ResultsListing = () => {
  const recipePreviewComponent = data.map(result => <RecipePreview />)

  return (
    <div>
      {recipePreviewComponent}
    </div>
  )
}

export default ResultsListing;