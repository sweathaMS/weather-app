import axios from "axios";
import { useState } from "react";

function Weather()
{
    const[city,setcity]=useState("");
    const[weather,setweather]=useState("")
   const[temp,settemp]=useState("")
   const[desc,setdesc]=useState("")
    function handlecity(event)
    {
    setcity(event.target.value)
    }
    function getweather()
    {
        var weatherdata=axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6d861b1e7aa7cbca77c80419c30e8b9d`)

        weatherdata.then(function(sucess)
    {
        console.log(sucess.data);
        setweather(sucess.data.weather[0].main)
        settemp(sucess.data.main.temp)
        setdesc(sucess.data.weather[0].description)
        
    })

    }
    return(
        <>
        <div className="max-w-sm mx-auto  p-7 bg-gradient-to-r from-purple-400 to-purple-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 mt-32">
            <div className="bg-pink-400 p-10 rounded-md">
                <h1 className="text-3xl">Weather Report</h1>
                <p className="my-2 text-xl">I can give you a weather report about your city</p>
                <input  value={city} onChange={handlecity} className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-white" placeholder="Enter city name"></input>
                <button onClick={getweather} className="bg-purple-400   hover:bg-purple-300 transition duration-300 p-2 rounded-md mt-2 ">Get Report</button>
                <div className="mt-2  mb-3 p-2 ">
                    <h1><b>Weather:{weather}</b></h1>
                    <p><b>Temperature:{temp}</b></p>
                    <p><b>Description:{desc}</b></p>
                    </div>
                
            </div>
        </div>
        </>
    )
}
export default Weather