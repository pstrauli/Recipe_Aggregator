
const [was30Mins, set30Mins] = useState(false)
const [was60Mins, set60Mins] = useState(false)
const [was120Mins, set120Mins] = useState(false)
const [was2400Mins, set2400Mins] = useState(false)

const [was2Servings, setWas2Servings] = useState(false)
const [was4Servings, setWas4Servings] = useState(false)
const [was6Servings, setWas6Servings] = useState(false)
const [was8Servings, setWas8Servings] = useState(false)

const time = () => {
  if (was30Mins && !was60Mins && !was120Mins && !was2400Mins) {
    return 30
  } else if (!was30Mins && was60Mins && !was120Mins && !was2400Mins) {
    return 60
  } else if (!was30Mins && !was60Mins && was120Mins && !was2400Mins) {
    return 120
  } else if (!was30Mins && !was60Mins && !was120Mins && was2400Mins) {
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


  const handleClick = async(e) => {
    e.preventDefault()
    let resp

    if (time <= 0 && servings <= 0) {
      resp = await axios.get(`/api/recipes?query=${searchBarInput}`)
    } else if (time > 0 && servings <= 0) {
      resp = await axios.get(`/api/recipes?query=${searchBarInput}&time=${time}`)
    } else if (time <= 0 && servings > 0) {
      resp = await axios.get(`/api/recipes?query=${searchBarInput}&servings=${servings}`)
    } else {
      return null
    }
  }

