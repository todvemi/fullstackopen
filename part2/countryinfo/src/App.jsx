import { useState, useEffect } from "react"
import SearchField from "./components/SearchField"
import countryService from "./services/countries"
import Countries from "./components/Countries"
import SpecificCountry from "./components/SpecificCountry"


const App = () => {
  const [countries, setCountries] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(null)

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value)
    setSelectedCountry(null)
  }

  useEffect(() => {
    countryService
      .getAll()
      .then(countries => {
        setCountries(countries)
      })
  }, [])

  return(
     <div>
       <SearchField searchTerm={searchTerm} handleChange={handleSearchTermChange}/>
       {selectedCountry ? (
        <SpecificCountry country={selectedCountry} />
      ) : (
        <Countries
          searchTerm={searchTerm}
          countries={countries}
          onCountryClick={(countryName) => setSelectedCountry(countryName)}
        />
      )}
     </div>
  )
}

export default App


// selectedCountry tila pitää varmaan siirtää Countries komponenttiin. Appin tilaa ei voida päivittää eri komponentista, joten tämä täytyy ratkoa jotenkin