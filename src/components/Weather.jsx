import React, { useEffect, useState } from 'react'
import search from '../assets/search.png'
import sun from '../assets/clear.png'
import humidity from '..//assets/humidity.png'
import wind from '..//assets/wind.png'
import axios from 'axios'
import dotenv from 'dotenv';



const weather = () => {
  const [weatherData, setWeatherData] = useState({ name: "" , temp:"", humidity:"" , wind:""})
  useEffect(() => {
    // const apiKey = process.env.REACT_APP_API_KEY
    const apiKey = process.env.REACT_APP_API_KEY;
    const city = "Delhi"
    let weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    axios.get(weatherApi)
      .then((res) => {
        console.log(res.data)
        setWeatherData({
          name: res.data.name,
          temp:res.data.main.temp,
          humidity:res.data.main.humidity,
          wind:res.data.wind.speed,
        })
      })
      .catch((err) => { "some thing is error" })
  }, [])
  return (

    <div className='h-screen bg-green-400 flex items-center justify-center align-center'>
      {weatherData.name}
      {weatherData.wind}
      {weatherData.temp}
      <div className='bg-blue-600 w-[330px] h-[450px] p-[20px] rounded-lg '>
        <div className='flex justify-center gap-1'>
          <input className='flex justify-center h-[40px] border-none outline-none rounded-[50px] p-[20px]' type="text" placeholder='search' />
          <div className='bg-white flex justify-center rounded-full h-10 w-10 items-center'>
            <img className='h-5 w-5' src={search} alt="search" />
          </div>
        </div>
        {/* second */}
        <div className='flex flex-col items-center justify-center'>

          <img src={sun} alt="sun-image" />
          <p className='text-white text-[40px]'>16°C</p>
          <p className='text-white text-[40px]'>London</p>
        </div>

        {/* third */}
        <div className='flex justify-between'>
          <div className="flex gap-2">
            <img className='h-10' src={humidity} alt="humidity" />
            <div className='flex flex-col'>
              <p className='text-white'>16°C</p>
              <h4 className='text-white'>humidity</h4>
            </div>
          </div>

          <div className="flex gap-2">
            <img className='h-10' src={wind} alt="humidity" />
            <div className='flex flex-col'>
              <p className='text-white'>16°C</p>
              <h4 className='text-white'>wind</h4>
            </div>
          </div>
        </div>
        {/* third */}

      </div>
    </div>

  )
}

export default weather
