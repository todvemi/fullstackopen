import Weather from "./Weather"

const RenderCountryInfo = ({ countryInfo }) => {
    const img = {
        width: '175px',
        height: '100%',
    }
    const languagesObject = countryInfo.languages
    const languagesArray = Object.values(languagesObject)
    return(
        <div>
            <h1>{countryInfo.name.common}</h1>
            <div>capital {countryInfo.capital}</div>
            <div>area {countryInfo.area} km^2</div>
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
            <div>
                <Weather city={countryInfo.capital} />
            </div>
        </div>
    )
}

export default RenderCountryInfo