import { useState, useEffect } from "react"
import axios from "axios"

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/name/'

const RenderCountryInfo = ({ countryInfo }) => {
    const img = {
        width: '175px',
        height: '100%',
    }

    const languagesObject = countryInfo.languages
    console.log(languagesObject)
    const languagesArray = Object.values(languagesObject)
    return(
        <div>
            <h1>{countryInfo.name.common}</h1>
            <div>capital {countryInfo.capital}</div>
            <div>area {countryInfo.area}</div>
            <h3>languages:</h3>
            <ul>
            {languagesArray.map((language, i) =>
            <li key={i}>
                {language}
            </li>)}
            </ul>
            <div>
                <img src={countryInfo.flags.svg} alt={countryInfo.flags.alt} style={img}/>
            </div>
        </div>
    )
}

const SpecificCountry = ({ country }) => {
    const [countryInfo, setCountryInfo] = useState([])

    useEffect(() => {
          axios
            .get(`${baseUrl}/${country}`)
            .then(response => {
              setCountryInfo(response.data)
            })
      }, [country])

      if (!countryInfo) {
        return <div>Loading...</div>
    } else if (countryInfo.length !== 0) {
        return(
            <div>
                <RenderCountryInfo countryInfo={countryInfo} />
            </div>
        )
    }

}

export default SpecificCountry