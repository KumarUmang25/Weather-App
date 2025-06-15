import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    const API_URL="http://api.openweathermap.org/data/2.5/weather";
    const API_KEY="71011769ab01b6c16bcf15f13cb5d133";


    let [city,setCity]=useState("");
    let[error,setError]=useState(false);
    
    let generateWeatherInfo=async()=>{
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
        let result={
            city:city,
            temp:jsonResponse.main.temp,
            min:jsonResponse.main.temp_min,
            max:jsonResponse.main.temp_max,
            feelsLike:jsonResponse.main.feels_like,
            humidity:jsonResponse.main.humidity,
            weather:jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
    }

    let handleInputChange=(event)=>{
        setCity(event.target.value)
    }

    let handleSubmit=async (event)=>{
        try{
        event.preventDefault();
        console.log(city);
        setCity("");
        updateInfo(await generateWeatherInfo());
        }catch(err){
            setError(true);
        }
    }

    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City-Name" variant="outlined" value={city} onChange={handleInputChange} required />
                <br></br><br></br>
                <Button variant="contained" type="submit">Search</Button>
                {error && <p style={{color:"red"}}>Such a place does not exist</p>}
            </form>
        </div>
    )
}