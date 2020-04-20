import React from 'react';
import './App.css';

const UserLocation = ({date,weather})=>{
    return(
        <div className="user-weather">
            <div className="row">
                <div className="col-md-12 weather-temp">
                    <h1>{Math.round(weather.main.temp)}°C{weather.icon}</h1>
                    
                    <p>{weather.name}, {weather.sys.country}</p>
                </div>

                <div className="col-md-12">
                    
                </div>
            </div>

            <div className="row">
                <div className="col-md-4 weather-info">
                    <p><b>Todays date:</b></p>
                    <h2>{date}</h2>
                </div>

                <div className="col-md-4 weather-info">
                    <p><b>Description:</b></p>
                    <h2>{weather.weather[0].main}</h2>
                </div>

                <div className="col-md-4 weather-info">
                    <p><b>Fells like:</b></p>
                    <h2>{Math.round(weather.main.feels_like)}°C</h2>
                </div>

 

            </div>
        </div>
    )
}
        
export default UserLocation;