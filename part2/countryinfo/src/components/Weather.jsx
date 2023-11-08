import { useEffect, useState } from "react"
import axios from "axios"

const Weather = ({ city }) => {
    const [weatherData, setWeatherData] = useState([])
    const weatherUrl = 'http://api.weatherapi.com/v1/current.json?key='
    const key = import.meta.env.VITE_SOME_KEY

    useEffect(() => {
        axios
            .get(`${weatherUrl}${key}&q=${city}&aqi=no`)
            .then(response => {
                setWeatherData(response.data)
            })
            .catch(error =>
                console.log('error while getting the weather data:', error))
    }, [city])

    if (weatherData.length === 0) {
        return(
            <div>
                <h3>Weather in {city}</h3>
                <div>loading...</div>
            </div>
        )
    }   else {
        return(
            <div>
            <h3>Weather in {city}</h3>
            <div>temperature {weatherData.current.temp_c} Celsius</div>
            <img src={weatherData.current.condition.icon} alt="weather icon" />
            <div>wind {weatherData.current.wind_kph} km/h</div>
            </div>
        )
    }

}


export default Weather