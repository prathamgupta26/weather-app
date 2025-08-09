import { useState } from "react"
import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"

export default function WeatherApp () {
    let [weatherInfo, setWeatherInfo] = useState ({
        city: "Wonderland", 
        feelslike: 31.11,
        humidity: 79,
        temp: 27.65,
        temp_max: 27.65,
        temp_min: 27.65,
        weather: "overcast clouds",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <br></br>
            <InfoBox info={weatherInfo}/>
        </div>
    );  
}