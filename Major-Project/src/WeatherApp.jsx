import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";


export default function(){
    let [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        temp:25.05,
        min:25.05,
        max:25.05,
        feelsLike:24.84,
        humidity:47,
        weather:"haze",
    });

    let updateInfo=(result)=>{
        setWeatherInfo(result);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}