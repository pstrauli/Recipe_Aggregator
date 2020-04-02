import React, {useState} from 'react';
import axios from 'axios'

import Rating from './Rating';
import Time from './Time';
import RecipePreview from './RecipePreview';


const Recipe = ({data}) => {

  return(
    <>

    </>
  )
}

const Filter = () => {
  const [searchBarInput, setSearchBarInput] = useState('')
  const [was30MinutesClicked, setWas30MinutesClicked] = useState(false)
  const [was60MinutesClicked, setWas60MinutesClicked] = useState(false)
  const [was120MinutesClicked, setWas120MinutesClicked] = useState(false)
  const [was240MinutesClicked, setWas240MinutesClicked] = useState(false)
  const [was2ServingsClicked, setWas2ServingsClicked] = useState(false)
  const [was4PlusServingsClicked, setWas4PlusServingsClicked] = useState(false)
  const [recipes, setRecipes] = useState()

  const handleChange = (event) => {
    setSearchBarInput(event.target.value)
    console.log('searchbarinput state', searchBarInput)
  }

  const handleClick = async(e) => {
    e.preventDefault()
    let resp 
    // if(!wasMostPopularButtonClicked && !wasBestRatedButtonClicked) {
    // resp = await axios.get(`/api/recipes?query=${searchBarInput}`)
    // setWasBestRatedButtonClicked(false)
    // setWasMostPopularClicked(false)

    // } else if(wasMostPopularButtonClicked && !wasBestRatedButtonClicked) {
    //   resp = await axios.get(`/api/recipes?query=${searchBarInput}&popular=1`) 
    //   setWasMostPopularClicked(false)  

    // } else if(wasBestRatedButtonClicked && !wasMostPopularButtonClicked) {
    // resp = await axios.get(`/api/recipes?query=${searchBarInput}&best=1`)
    // setWasBestRatedButtonClicked(false)    

    // } else if(wasMostPopularButtonClicked && wasBestRatedButtonClicked) {
    // resp = await axios.get(`/api/recipes?query=${searchBarInput}&best=1&popular=1`)

    if(!was30MinutesClicked && !was60MinutesClicked && !was120MinutesClicked && !was240MinutesClicked && !was2ServingsClicked && !was4ServingsClicked && !was6ServingsClicked && !was8ServingsClicked) {
      resp = await axios.get(`/api/recipes?query=${searchBarInput}`)
      setWas30MinutesClicked(false)
      setWas60MinutesClicked(false)
      setWas120MinutesClicked(false)
      setWas240MinutesClicked(false)
      setWas2ServingsClicked(false)
      setWas4ServingsClicked(false)
      setWas6ServingsClicked(false)
      setWas8ServingsClicked(false)


    } else if (was30MinutesClicked && !was60MinutesClicked && !was120MinutesClicked && !was240MinutesClicked && !was2ServingsClicked && !was4ServingsClicked && !was6ServingsClicked && !was8ServingsClicked) {
      resp = await axios.get(`/api/recipes?query=${searchBarInput}&time=30`)
      setWas60MinutesClicked(false)
      setWas120MinutesClicked(false)
      setWas240MinutesClicked(false)
      setWas2ServingsClicked(false)
      setWas4ServingsClicked(false)
      setWas6ServingsClicked(false)
      setWas8ServingsClicked(false)

    } else if (!was30MinutesClicked && was60MinutesClicked && !was120MinutesClicked && !was240MinutesClicked && !was2ServingsClicked && !was4ServingsClicked && !was6ServingsClicked && !was8ServingsClicked) {
      resp = await axios.get(`/api/recipes?query=${searchBarInput}&time=60`)
      setWas30MinutesClicked(false)
      setWas120MinutesClicked(false)
      setWas240MinutesClicked(false)
      setWas2ServingsClicked(false)
      setWas4ServingsClicked(false)
      setWas6ServingsClicked(false)
      setWas8ServingsClicked(false)

    } else if (!was30MinutesClicked && !was60MinutesClicked && was120MinutesClicked && !was240MinutesClicked && !was2ServingsClicked && !was4ServingsClicked && !was6ServingsClicked && !was8ServingsClicked) {
      resp = await axios.get(`/api/recipes?query=${searchBarInput}&time=120`)
      setWas30MinutesClicked(false)
      setWas60MinutesClicked(false)
      setWas240MinutesClicked(false)
      setWas2ServingsClicked(false)
      setWas4ServingsClicked(false)
      setWas6ServingsClicked(false)
      setWas8ServingsClicked(false)
    
    } else if (!was30MinutesClicked && !was60MinutesClicked && !was120MinutesClicked && was240MinutesClicked && !was2ServingsClicked && !was4ServingsClicked && !was6ServingsClicked && !was8ServingsClicked) {
      resp = await axios.get(`/api/recipes?query=${searchBarInput}&time=240`)
      setWas30MinutesClicked(false)
      setWas60MinutesClicked(false)
      setWas120MinutesClicked(false)
      setWas2ServingsClicked(false)
      setWas4ServingsClicked(false)
      setWas6ServingsClicked(false)
      setWas8ServingsClicked(false)

    } else if(!was30MinutesClicked && !was60MinutesClicked && !was120MinutesClicked && !was240MinutesClicked && was2ServingsClicked && !was4ServingsClicked && !was6ServingsClicked && !was8ServingsClicked) {
      resp = await axios.get(`/api/recipes?query=${searchBarInput}&servings=2`)
      setWas30MinutesClicked(false)
      setWas60MinutesClicked(false)
      setWas120MinutesClicked(false)
      setWas240MinutesClicked(false)
      setWas4ServingsClicked(false)
      setWas6ServingsClicked(false)
      setWas8ServingsClicked(false)

    } else if(!was30MinutesClicked && !was60MinutesClicked && !was120MinutesClicked && !was240MinutesClicked && !was2ServingsClicked && !was4ServingsClicked && !was6ServingsClicked && !was8ServingsClicked) {
      resp = await axios.get(`/api/recipes?query=${searchBarInput}&servings=2`)
      setWas30MinutesClicked(false)
      setWas60MinutesClicked(false)
      setWas120MinutesClicked(false)
      setWas240MinutesClicked(false)
      setWas4ServingsClicked(false)
      setWas6ServingsClicked(false)
      setWas8ServingsClicked(false)

    
          
    } else {
      return null
    }
    
    // const resp = await axios.get(`/api/recipes?query=beef&time=60&servings=4&best=1&popular=1`)
    console.log('response from the api', resp)
    setRecipes(resp.data)
  }

  const fetchByPopularity = async(e) => {
    e.preventDefault()
    setWasMostPopularClicked(true)
    // const resp = await axios.get(`/api/recipes?popular=1`)
    // setRecipes(resp.data)
  }

  const fetchByRating = async(e) => {
    e.preventDefault()
    setWasBestRatedButtonClicked(true)
    // const resp = await axios.get('/api/recipes?best=1')
    // setRecipes(resp.data)
  }

  const fetchBy30Mins = async(e) => {
    e.preventDefault()
    setWas30MinutesClicked(true)
  }

  const fetchBy60Mins = async(e) => {
    e.preventDefault()
    setWas60MinutesClicked(true)
  }

  const fetchBy120Mins = async(e) => {
    e.preventDefault()
    setWas120MinutesClicked(true)
  }

  const fetchBy240Mins = async(e) => {
    e.preventDefault()
    setWas240MinutesClicked(true)
  }

  const fetchBy2Servings = async(e) => {
    e.preventDefault()
    setWas2ServingsClicked(true)
  }

  const fetchBy4PlusServings = async(e) => {
    e.preventDefault()
    setWas4PlusServingsClicked(true)
  }
  
  const getData = () => {
    fetch()
  }

  return (
    <>
    <form className="flex flex-col items-center bg-gray-100 shadow rounded-sm pt-6 p-2" onSubmit={getData}>

      {/* Search Bar */}
      <input onChange={handleChange
      } value={searchBarInput} className="border border-solid border-gray-400 rounded-full px-2 w-full"type="text" placeholder="eg.chilli..."/>

      {/* Rating Section */}
      {/* <div className="font-body py-2 m-2 mb-2 w-full border-solid border border-gray-300 rounded flex flex-col content-center">

        <h3 className="mb-4 text-center">‘Best Rated’ or ‘Most Popular’?</h3>

        <div className="flex flex-row justify-center">

          <button onClick={fetchByRating} className="font-body text-white border-none inline rounded-full bg-red-600 px-2 py-1 mx-4 text-sm">Best Rated</button>

          <button onClick={fetchByPopularity} className="font-body text-white border-none inline rounded-full bg-red-600 px-2 py-1 mx-4 text-sm">Most Popular</button>

        </div> */}

      {/* </div> */}

      {/* Time section */}
      <div className="mb-8 rounded-sm border-gray-300 border-solid">
        
        <h3 className="font-body text-center">How long do you want to cook?</h3>
        
        <div className="flex flex-row overflow-x-auto">
      
          {/* Button 30 */}
          <button onClick={fetchBy30Mins} className="font-body text-white border-none inline rounded-full bg-red-600 px-2 py-1 mx-2 text-sm w-12 h-12">30</button>
            
          {/* Button 60 */}
          <button onClick={fetchBy60Mins} className="font-body text-white border-none inline rounded-full bg-red-600 px-2 py-1 mx-2 text-sm w-12 h-12">1 hr</button>

          {/* Button 120 */}
          <button onClick={fetchBy120Mins} className="font-body text-white border-none inline rounded-full bg-red-600 px-2 py-1 mx-4 text-sm w-12 h-12">1 hr+</button>

          {/* Button 240 */}
          <button onClick={fetchBy240Mins} className="font-body text-white border-none inline rounded-full bg-red-600 px-2 py-1 mx-4 text-sm w-12 h-12">2 hrs+</button>

        </div>
      </div>

      {/* Servings section */}
      <div className="mb-8 rounded-sm border-gray-300 border-solid">
        
        <h3 className="font-body text-center">How many servings?</h3>
        
        <div className="flex flex-row overflow-x-auto">
      
          {/* Button 2 */}
          <button onClick={fetchBy2Servings} className="font-body text-white border-none inline rounded-full bg-red-600 px-2 py-1 mx-2 text-sm w-12 h-12">2</button>
            
          {/* Button 4 */}
          <button onClick={fetchBy4PlusServings} className="font-body text-white border-none inline rounded-full bg-red-600 px-2 py-1 mx-2 text-sm w-12 h-12">4</button>

        </div>
      </div>

      {/* <input className="font-body text-white font-bold bg-gray-800 hover:bg-black hover:text-gray-300 rounded-full py-3 px-6 mb-4" type="submit" value="Let's get cooking!"/> */}

      <button onClick={handleClick} className="font-body text-white font-bold bg-gray-800 hover:bg-black hover:text-gray-300 rounded-full py-3 px-6 mb-4">Let's get cooking!</button>

    </form>
    {recipes && recipes.length > 0 && recipes.map((x, i) => <RecipePreview image_url={x.image_url} url={x.url} description={x.description} name={x.name} total_time={x.total_time} />)}


    </>
  )
}

export default Filter;

// &time=60&servings=4
