import { useState, useEffect } from "react"
import SearchField from "./components/SearchField"
import countryService from "./services/countries"
import Countries from "./components/Countries"

const App = () => {
  const [countries, setCountries] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
    countryService
      .getAll()
      .then(countries => {
        setCountries(countries)
      })
      .catch(error =>
        console.log('error while fetching data from api:', error))
  }, [])

  return(
     <div> 
       <SearchField searchTerm={searchTerm} handleChange={handleSearchTermChange}/>
       <Countries searchTerm={searchTerm} countries={countries} />
     </div>
  )
}

export default App