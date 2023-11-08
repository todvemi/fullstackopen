import { useState, useEffect } from "react"
import axios from "axios"
import RenderCountryInfo from "./RenderCountryInfo"

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/name/'

const SpecificCountry = ({ country }) => {
    const [countryInfo, setCountryInfo] = useState([])

    useEffect(() => {
          axios
            .get(`${baseUrl}/${country}`)
            .then(response => {
              setCountryInfo(response.data)
            })
            .catch(error =>
                console.log('error while getting the country data:', error))
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