import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './infoBox.css';

export default function({info}){

    let HOT_URL="https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    let COLD_URL="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let RAIN_URL="https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    return(
        <div className='infoBox'>
            <h1>Weather Info</h1>
            <div className='card-comp'>
            <Card sx={{ width: 400,margin:"auto"}}>
                <CardMedia
                sx={{ height: 200 }}
                image={info.humidity>80?RAIN_URL:info.humidity>15?HOT_URL:COLD_URL}
                title="green iguana" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {info.city}
                    </Typography>
                <Typography variant="body2"  sx={{ color: 'text.secondary' }}>
                <p>Temperature={info.temp}&deg;C</p>
                <p>Humidity={info.humidity}&deg;C</p>
                <p>Min Temp={info.min}&deg;C</p>
                <p>Max Temp={info.max}&deg;C</p>
                <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p> 
                </Typography>
            </CardContent>
            </Card>
            </div>
        </div>
    )
}