import { useEffect } from "react"

const Countries = ({ searchTerm, countries, onCountryClick }) => {
    var foundCountries = []

    if (searchTerm !== '') {
        var foundCountries = countries.filter(country => country.name.common.toLowerCase().includes(searchTerm.toLowerCase()))
    } else {
        return null
    }

    if (foundCountries.length > 10) {
        return(
            <div>Too many matches, specify another filter</div>
        )
    } else if (foundCountries.length !== 1 && foundCountries.length !== 0) {
        return(
            <div>
                {foundCountries.map((country, i) => 
                    <div key={i}>
                        {country.name.common}
                        <button onClick={() => onCountryClick(country.name.common.toLowerCase())}>show</button>
                    </div>)}
                    
            </div>
        )
    } else if (foundCountries.length === 1) {
        onCountryClick(foundCountries[0].name.common.toLowerCase())
    } else if (foundCountries.length === 0) {
        return(
            <div>no countries found. try another search</div>
        )
    }
}


export default Countries