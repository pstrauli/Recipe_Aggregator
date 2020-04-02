import React from 'react';
import ResultSummary from './ResultSummary'
import RecipePreview from './RecipePreview'
// import the data one way or other

const ResultsListing = () => {
  const recipePreviewComponent = data.map(result => <RecipePreview />)

  return (
    <div>
      <ResultSummary />
      {recipePreviewComponent}
    </div>
  )
}

export default ResultsListing;