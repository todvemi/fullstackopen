import React, { useState, useEffect } from "react"
import SpecificCountry from "./SpecificCountry"

const Countries = ({ searchTerm, countries }) => {
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [foundCountries, setFoundCountries] = useState([])

  useEffect(() => {
    if (searchTerm !== '') {
      const filteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(searchTerm.toLowerCase()))
      setFoundCountries(filteredCountries)
      setSelectedCountry(null)
    } else {
      setFoundCountries([])
    }
  }, [searchTerm])

  const onCountryClick = (countryName) => {
    setSelectedCountry(countryName)
  }

  if (selectedCountry) {
    return <SpecificCountry country={selectedCountry} />;
  }

  if (foundCountries.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (foundCountries.length !== 1 && foundCountries.length !== 0) {
    return (
      <div>
        {foundCountries.map((country, i) => (
          <div key={i}>
            {country.name.common}
            <button onClick={() => onCountryClick(country.name.common.toLowerCase())}>
              show
            </button>
          </div>
        ))}
      </div>
    )
  } else if (foundCountries.length === 1) {
    return <SpecificCountry country={foundCountries[0].name.common.toLowerCase()} />
  } else if (foundCountries.length === 0 && searchTerm !== '') {
    return <div>No countries found. Try another search</div>
  }
}

export default Countries