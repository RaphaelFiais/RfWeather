import React from 'react'
import { Climate } from './style'
import { WiHumidity } from "react-icons/wi";
import { SiWindicss } from "react-icons/si";

const Clima = ({ infoCity }) => {

  const img = `https://openweathermap.org/img/wn/${infoCity.weather[0].icon}.png`

  return (
    <>
      <Climate>
      <h2>{infoCity.name} {infoCity.sys.country} {infoCity.country}</h2>
        <div className='temperature'>          
          <img src={img} alt="clima do dia" />
          <p>{(infoCity.main.temp - 273.15).toFixed(2)} °C </p>
        </div>
        <div>
          <p>{infoCity.weather[0].description}</p>
          <p><WiHumidity /> {infoCity.main.humidity}% </p>
          <p>{infoCity.main.pressure} hPa</p>
          <p><SiWindicss /> {(infoCity.wind.speed * 3.6).toFixed(2)} km/h</p>
        </div>

      </Climate>
    </>
  )
}

export default Clima 