import React, {useState} from 'react';
import axios from 'axios'
import RecipePreview from './RecipePreview';


const Recipe = ({data}) => {

  return(
    <>

    </>
  )
}

const Filter = () => {
  const [searchBarInput, setSearchBarInput] = useState('')
  
  const [was30Mins, setWas30Mins] = useState(false)
  const [was60Mins, setWas60Mins] = useState(false)
  const [was120Mins, setWas120Mins] = useState(false)
  const [was240Mins, setWas240Mins] = useState(false)

  const [was2Servings, setWas2Servings] = useState(false)
  const [was4Servings, setWas4Servings] = useState(false)
  const [was6Servings, setWas6Servings] = useState(false)
  const [was8Servings, setWas8Servings] = useState(false)

  const [recipes, setRecipes] = useState()
  const [recipeTime, setRecipeTime] = useState(null)
  const [recipeServing, setRecipeServing] = useState(null)
  

  // Search Bar input
  const handleChange = (event) => {
    setSearchBarInput(event.target.value)
    console.log('searchbarinput state', searchBarInput)
  }

  const time = () => {
    if (was30Mins && !was60Mins && !was120Mins && !was240Mins) {
      return 30
    } else if (!was30Mins && was60Mins && !was120Mins && !was240Mins) {
      return 60
    } else if (!was30Mins && !was60Mins && was120Mins && !was240Mins) {
      return 120
    } else if (!was30Mins && !was60Mins && !was120Mins && was240Mins) {
      return 240
    } else {
      return 0
    }
  }

  const servings = () => {
    if (was2Servings && !was4Servings && !was6Servings && !was8Servings) {
      return 2
    } else if (!was2Servings && was4Servings && !was6Servings && !was8Servings) {
      return 4
    } else if  (!was2Servings && !was4Servings && was6Servings && !was8Servings) {
      return 6
    } else if (!was2Servings && !was4Servings && !was6Servings && was8Servings) {
      return 8
    } else {
      return 0
    }
  }

  // const handleClick = async(e) => {
  //   e.preventDefault()
  //   let resp 
  //   console.log ('Submit!!!')

  //   if (time <= 0 && servings <= 0) {
  //     resp = await axios.get(`/api/recipes?query=${searchBarInput}`)
  //   } else if (time > 0 && servings <= 0) {
  //     resp = await axios.get(`/api/recipes?query=${searchBarInput}&time=${time}`)
  //   } else if (time <= 0 && servings > 0) {
  //     resp = await axios.get(`/api/recipes?query=${searchBarInput}&servings=${servings}`)
  //   } else {
  //     return null
  //   }

  //   console.log('response from the api', resp)
  //   setRecipes(resp.data)
  // }

  const handleClick = async(e) => {
    e.preventDefault()
    console.log('new handleclick function testing')
    const resp = await axios.get(`/api/recipes?query=${searchBarInput}${recipeTime ? `&time=${recipeTime}` : null}${recipeServing ? `&servings=${recipeServing}` : null}`)
    //const resp = await axios.get(`/api/recipes?query=${searchBarInput}`)
    setRecipes(resp.data)
     

  }

  // TIME button methods

  const howMuchTime = 0

  const fetchBy30Mins = async(e) => {
    e.preventDefault()
    setWas30Mins(true)
    console.log('30 mins clicked')
    howMuchTime = 30
  }

  const fetchBy60Mins = async(e) => {
    e.preventDefault()
    setWas60Mins(true)
    console.log('60 mins clicked')
  }

  const fetchBy120Mins = async(e) => {
    e.preventDefault()
    setWas120Mins(true)
    console.log('120 mins clicked')
  }

  const fetchBy240Mins = async(e) => {
    e.preventDefault()
    setWas240Mins(true)
    console.log('240 mins clicked')
  }

  // SERVINGS button methods

  const fetchBy2Servings = async(e) => {
    e.preventDefault()
    setWas2Servings(true)
    console.log('2 servings clicked')
  }

  const fetchBy4Servings = async(e) => {
    e.preventDefault()
    setWas4Servings(true)
    console.log('4 servings clicked')
  }

  const fetchBy6Servings = async(e) => {
    e.preventDefault()
    setWas6Servings(true)
    console.log('6 servings clicked')
  }

  const fetchBy8Servings = async(e) => {
    e.preventDefault()
    setWas8Servings(true)
    console.log('8 servings clicked')
  }
  
  const getData = () => {
    fetch()
  }

  return (
    <>
    <form className="flex flex-col items-center bg-gray-100 shadow rounded-sm pt-6 p-2" onSubmit={getData}>

      {/* SEARCH BAR */}
      <input onChange={handleChange
      } value={searchBarInput} className="border border-solid border-gray-400 rounded-full px-2 w-full"type="text" placeholder="eg.chilli..."/>

      {/* TIME */}
      <div className="mb-8 rounded-sm border-gray-300 border-solid">
        
        <h3 className="font-body text-center">How long do you want to cook?</h3>
        
        <div className="flex flex-row overflow-x-auto">
      
          {/* Button 30 */}
          <button onClick={(e) => {e.preventDefault(); setRecipeTime(30)}} className="font-body text-white border-none inline rounded-full bg-red-600 px-2 py-1 mx-2 text-sm w-12 h-12">30</button>
            
          {/* Button 60 */}
          <button onClick={(e) => {e.preventDefault(); setRecipeTime(60)}} className="font-body text-white border-none inline rounded-full bg-red-600 px-2 py-1 mx-2 text-sm w-12 h-12">1 hr</button>

          {/* Button 120 */}
          <button onClick={(e) => {e.preventDefault(); setRecipeTime(120)}} className="font-body text-white border-none inline rounded-full bg-red-600 px-2 py-1 mx-4 text-sm w-12 h-12">1 hr+</button>

          {/* Button 240 */}
          <button onClick={(e) => {e.preventDefault(); setRecipeTime(240)}} className="font-body text-white border-none inline rounded-full bg-red-600 px-2 py-1 mx-4 text-sm w-12 h-12">2 hrs+</button>

          {/* <p>You have chosen{howMuchTime} minutes</p> */}

        </div>
      </div>

      {/* SERVINGS */}
      <div className="mb-8 rounded-sm border-gray-300 border-solid">
        
        <h3 className="font-body text-center">How many servings?</h3>
        
        <div className="flex flex-row overflow-x-auto">
      
          {/* Button 2 */}
          <button onClick={(e) => {e.preventDefault(); setRecipeServing(2)}} className="font-body text-white border-none inline rounded-full bg-red-600 px-2 py-1 mx-2 text-sm w-12 h-12">2</button>
            
          {/* Button 4 */}
          <button onClick={(e) => {e.preventDefault(); setRecipeServing(4) }} className="font-body text-white border-none inline rounded-full bg-red-600 px-2 py-1 mx-2 text-sm w-12 h-12">4</button>

          {/* Button 6 */}
          <button onClick={(e) => {e.preventDefault(); setRecipeServing(6)}} className="font-body text-white border-none inline rounded-full bg-red-600 px-2 py-1 mx-2 text-sm w-12 h-12">6</button>

          {/* Button 8 */}
          <button onClick={(e) => {e.preventDefault(); setRecipeServing(8)}} className="font-body text-white border-none inline rounded-full bg-red-600 px-2 py-1 mx-2 text-sm w-12 h-12">8</button>

        </div>

      </div>

      {/* SUBMIT */}
      <button onClick={handleClick} className="font-body text-white font-bold bg-gray-800 hover:bg-black hover:text-gray-300 rounded-full py-3 px-6 mb-4">Let's get cooking!</button>

    </form>

    {/* RESULTS  */}
    {recipes && recipes.length > 0 && recipes.map((x, i) => <RecipePreview image_url={x.image_url} url={x.url} description={x.description} name={x.name} total_time={x.total_time} />)}


    </>
  )
}

export default Filter;

// &time=60&servings=4
